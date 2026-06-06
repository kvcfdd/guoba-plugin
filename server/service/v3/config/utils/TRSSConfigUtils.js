import { YamlReader } from "#guoba.framework"

export function handleConfigData(action, key, field, value) {

  // auth：需要强制覆盖旧数据格式，使用 CONFIG_FORCE_OVERLAY_KEY
  if (key === 'system.server' && field === 'auth') {
    let handleRes = handleMapField(action, field, value, true)
    field = handleRes.field
    value = handleRes.value
  }

  // system_prompt.custom：GSubForm → YAML map 互转
  if (key === 'system.aigc' && field === 'system_prompt.custom') {
    let handleRes = handleMapField(action, field, value, false)
    field = handleRes.field
    value = handleRes.value
  }

  // GET: 顶层 system_prompt 对象中的 custom map 需转为 GSubForm 数组
  if (action === 'get' && key === 'system.aigc' && field === 'system_prompt') {
    if (value && value.custom instanceof Object && !Array.isArray(value.custom)) {
      value = {
        ...value,
        custom: Object.entries(value.custom).map(([k, v]) => ({ key: k, value: v }))
      }
    } else if (value && !value.custom) {
      value = { ...value, custom: [] }
    }
  }

  return { field, value };
}

function handleMapField(action, field, value, forceOverlay) {
  if (action === 'get') {
    if (!value) {
      return { field, value: [] }
    }
    if (value instanceof Object) {
      return {
        field,
        value: Object.entries(value).map(([key, val]) => {
          return {
            key,
            value: val
          }
        })
      }
    }
    return { field, value: [] }
  } else {
    // auth 需要强制覆盖旧数据格式
    if (forceOverlay) {
      field = YamlReader.CONFIG_FORCE_OVERLAY_KEY + field
    }
    if (Array.isArray(value) && value.length > 0) {
      return {
        field,
        value: value.reduce((acc, cur) => {
          acc[cur.key] = cur.value
          return acc
        }, {})
      }
    }
    // 空值写入 {} 而非 null，保持 YAML map 结构
    return { field, value: {} }
  }
}

/**
 * 处理 group 配置
 */
export function handleGroupConfig(action, data) {
  for (const key of Object.keys(data)) {
    if (action === 'get') {
      // 判断是否带 :
      let groupId = key
      let keySplit = []
      if (typeof groupId === 'string') {
        if (groupId.includes(':')) {
          keySplit = groupId.split(':')
          groupId = keySplit.pop()
        }
        if (groupId.startsWith(YamlReader.CONFIG_INTEGER_KEY)) {
          groupId = groupId.replace(YamlReader.CONFIG_INTEGER_KEY, '')
        }
      }
      if (!groupId) {
        continue
      }
      if (groupId === 'default') {
        continue
      }
      groupId = Number(groupId) || String(groupId)
      const groupName = Bot.pickGroup(groupId)?.group_name
      if (!groupName) {
        continue
      }
      data[key]['__GROUP_TIP_TEXT__'] = `${groupName} (${[...keySplit, groupId].join(':')})`
    } else {
      delete data[key]['__GROUP_TIP_TEXT__']
    }
  }
  return data
}
