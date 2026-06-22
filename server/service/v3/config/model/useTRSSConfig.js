// 添加群号 prompt
export const addGroupPromptProps = {
  content: '请输入群号：',
  placeholder: '请输入群号',
  okText: '添加',
  rules: [
    { required: true, message: '群号得填上才行哦~' },
    // [{min: 5, message: '真的有这么短的群号吗？'}],
  ],
}

// 添加账号 prompt
export const addUserPromptProps = tip => ({
  content: `请输入${tip}账号：`,
  placeholder: '请输入账号',
  okText: '添加',
  rules: [
    { required: true, message: '账号得填上才行哦~' },
  ],
})

export const baseConfig = {
  bot: [
    {
      field: 'log_length',
      label: '单条日志长度',
      component: 'InputNumber',
      componentProps: {
        min: 0,
        placeholder: '请输入单条日志长度',
      },
    },
    {
      field: 'log_object',
      label: '对象日志格式',
      bottomHelpMessage: '是否显示详细对象日志',
      component: 'Switch',
    },
    {
      field: 'log_align',
      label: '日志ID',
      bottomHelpMessage: '日志ID对齐',
      component: 'Input',
      componentProps: {
        placeholder: '请输入日志ID',
        trimValue: false,
      },
    },
    {
      field: 'plugin_load_timeout',
      label: '插件加载超时',
      bottomHelpMessage: '超时后不再等待插件加载',
      component: 'InputNumber',
      componentProps: {
        min: 1,
        placeholder: '（秒）',
      },
    },
    {
      field: 'file_watch',
      label: '监听文件变化',
      bottomHelpMessage: '是否监听配置文件、插件文件的变化',
      component: 'Switch',
    },
    {
      field: 'update_time',
      label: '自动更新时间',
      bottomHelpMessage: '启动超过指定时间后更新',
      component: 'InputNumber',
      componentProps: {
        min: 0,
        placeholder: '（分钟）',
      },
    },
    {
      field: 'restart_time',
      label: '自动重启时间',
      bottomHelpMessage: '启动超过指定时间后重启',
      component: 'InputNumber',
      componentProps: {
        min: 0,
        placeholder: '（分钟）',
      },
    },
    {
      field: 'update_cron',
      label: '定时更新cron',
      bottomHelpMessage: '在指定的时间更新',
      component: 'EasyCron',
      componentProps: {
        placeholder: '请输入或选择Cron表达式',
      },
    },
    {
      field: 'restart_cron',
      label: '定时重启cron',
      bottomHelpMessage: '在指定的时间重启',
      component: 'EasyCron',
      componentProps: {
        placeholder: '请输入或选择Cron表达式',
      },
    },
    {
      field: 'stop_cron',
      label: '定时关机cron',
      bottomHelpMessage: '在指定的时间关机',
      component: 'EasyCron',
      componentProps: {
        placeholder: '请输入或选择Cron表达式',
      },
    },
    {
      field: 'start_cron',
      label: '定时开机cron',
      bottomHelpMessage: '在指定的时间开机',
      component: 'EasyCron',
      componentProps: {
        placeholder: '请输入或选择Cron表达式',
      },
    },
    {
      field: 'cache_group_member',
      label: '缓存群成员列表',
      bottomHelpMessage: '群成员数量越多，内存占用越多，关闭后部分插件群成员信息不完整',
      component: 'Switch',
    },
    {
      field: 'file_to_url_time',
      label: '文件保存时间',
      component: 'InputNumber',
      componentProps: {
        min: 1,
        placeholder: '（分钟）',
      },
    },
    {
      field: 'file_to_url_times',
      label: '文件访问次数',
      component: 'InputNumber',
      componentProps: {
        min: 1,
      },
    },
    {
      field: 'msg_type_count',
      label: '消息类型统计',
      bottomHelpMessage: '收发消息记录详细类型统计',
      component: 'Switch',
    },
    {
      field: '/→#',
      label: '/→#',
      bottomHelpMessage: '收到的消息以/开头转为#处理',
      component: 'Switch',
    }
  ],
  server: [
    {
      key: 'system.server',
      title: '服务器配置',
      desc: '对服务器进行相关配置',
      schemas: [
        {
          field: 'url',
          label: '服务器地址',
          component: 'Input',
          componentProps: {
            placeholder: '请输入服务器地址',
          },
        },
        {
          field: 'port',
          label: '服务器端口',
          component: 'InputNumber',
          componentProps: {
            placeholder: '0-65535',
            min: 0,
            max: 65535,
          },
        },
        {
          field: 'redirect',
          label: '服务器缺省跳转地址',
          component: 'Input',
          componentProps: {
            placeholder: '请输入地址',
          },
        },
        {
          field: 'auth',
          label: '服务器鉴权',
          component: 'GSubForm',
          componentProps: {
            multiple: true,
            modalProps: {
              title: '服务器鉴权配置',
            },
            schemas: [
              {
                field: 'key',
                label: '鉴权标识',
                bottomHelpMessage: '不能重复、不能包含空格',
                component: 'Input',
                required: true,
                rules: [
                  { pattern: '^[^\\s]*$', message: '不能包含空格' },
                ],
              },
              {
                field: 'value',
                label: '鉴权值',
                bottomHelpMessage: '',
                component: 'Input',
                required: true
              }
            ]
          },
        },
        {
          field: 'https.url',
          label: 'HTTPS 服务器地址',
          component: 'Input',
          componentProps: {
            placeholder: '请输入服务器地址',
          },
        },
        {
          field: 'https.port',
          label: 'HTTPS 服务器端口',
          component: 'InputNumber',
          componentProps: {
            placeholder: '0-65535',
            min: 0,
            max: 65535,
          },
        },
        {
          field: 'https.key',
          label: 'HTTPS 服务器私钥',
          component: 'Input',
          componentProps: {
            placeholder: '请输入服务器私钥文件路径',
          },
        },
        {
          field: 'https.cert',
          label: 'HTTPS 服务器证书',
          component: 'Input',
          componentProps: {
            placeholder: '请输入服务器证书文件路径',
          },
        },
      ],
    },
  ],
}

export const groupConfig = {
  group: [
    {
      field: 'groupCD',
      label: '整体冷却时间',
      component: 'InputNumber',
      bottomHelpMessage: '群聊中所有指令操作冷却时间，单位毫秒,0 则无限制',
      componentProps: {
        placeholder: '请输入指令冷却时间',
      },
    },
    {
      field: 'singleCD',
      label: '个人冷却时间',
      component: 'InputNumber',
      bottomHelpMessage: '群聊中个人操作冷却时间，单位毫秒',
      componentProps: {
        placeholder: '请输入指令冷却时间',
      },
    },
    {
      field: 'onlyReplyAt',
      label: '只关注At',
      component: 'RadioGroup',
      bottomHelpMessage: '是否只仅关注主动@机器人的消息',
      componentProps: {
        options: [
          { label: '关闭', value: 0 },
          { label: '开启', value: 1 },
          { label: '开启、主人关闭', value: 2 },
        ],
      },
    },
    {
      field: 'botAlias',
      label: '机器人别名',
      component: 'GTags',
      bottomHelpMessage: '开启“只关注At”后，发送以别名开头的消息也会响应，支持多个别名',
      componentProps: {
        allowAdd: true,
        allowDel: true,
      },
    },
  ],
}

export const otherConfig = {
  other: [

    {
      field: 'master',
      label: '主人账号',
      bottomHelpMessage: '主人账号，功能不受限制，可以设置多个',
      component: 'GTags',
      componentProps: {
        placeholder: '请输入Bot账号:主人账号',
        allowAdd: true,
        allowDel: true,
        showPrompt: true,
        promptProps: addUserPromptProps('Bot账号:主人'),
      },
    },
    {
      field: 'blackUser',
      label: '黑名单用户',
      bottomHelpMessage: '黑名单用户，可以设置多个，用英文逗号分隔',
      component: 'GTags',
      componentProps: {
        placeholder: '请输入黑名单用户',
        allowAdd: true,
        allowDel: true,
        showPrompt: true,
        promptProps: addUserPromptProps('黑名单'),
      },
    },
    {
      field: 'whiteUser',
      label: '白名单用户',
      bottomHelpMessage: '白名单用户，可以设置多个，用英文逗号分隔',
      component: 'GTags',
      componentProps: {
        placeholder: '请输入白名单用户',
        allowAdd: true,
        allowDel: true,
        showPrompt: true,
        promptProps: addUserPromptProps('白名单'),
      },
    }
  ],
}

export const aigcConfig = {
  aigc: [
    {
      label: '通用配置',
      component: 'Divider',
    },
    {
      field: 'enable',
      label: '启用AIGC',
      bottomHelpMessage: '是否启用AIGC功能',
      component: 'Switch',
    },
    {
      field: 'provider',
      label: 'AI 提供商',
      bottomHelpMessage: '选择AI提供商',
      component: 'Select',
      componentProps: {
        options: [
          { label: 'OpenAI', value: 'openai' },
          { label: 'Google Gemini', value: 'gemini' },
        ],
        placeholder: '请选择AI提供商',
      },
    },
    {
      field: 'bot_name',
      label: '机器人名称',
      bottomHelpMessage: 'AIGC相关日志显示',
      component: 'Input',
      componentProps: {
        placeholder: '请输入机器人名称',
      },
    },
    {
      field: 'system_prompt',
      label: '系统提示词',
      bottomHelpMessage: 'AI的系统提示词',
      component: 'InputTextArea',
      componentProps: {
        placeholder: '请输入系统提示词',
        rows: 10,
      },
    },
    {
      field: 'max_tokens',
      label: '输出最大Token数',
      component: 'InputNumber',
      componentProps: {
        min: 1,
        placeholder: '请输入最大Token数',
      },
    },
    {
      field: 'temperature',
      label: '随机程度',
      bottomHelpMessage: '0-1，值越大输出越随机',
      component: 'InputNumber',
      componentProps: {
        min: 0,
        max: 1,
        step: 0.1,
        placeholder: '请输入随机程度',
      },
    },
    {
      field: 'max_tool_rounds',
      label: '工具调用轮次上限',
      bottomHelpMessage: '工具调用轮次上限 (2-10)',
      component: 'InputNumber',
      componentProps: {
        min: 2,
        max: 10,
        placeholder: '请输入工具调用轮次上限',
      },
    },
    {
      field: 'retry_count',
      label: '请求失败重试次数',
      bottomHelpMessage: '请求失败重试次数 (0-5，0不重试)',
      component: 'InputNumber',
      componentProps: {
        min: 0,
        max: 5,
        placeholder: '请输入重试次数',
      },
    },
    {
      field: 'private_enable',
      label: '私聊开关',
      bottomHelpMessage: '是否启用私聊AIGC',
      component: 'Switch',
    },
    {
      field: 'group_whitelist',
      label: '群白名单',
      bottomHelpMessage: 'AIGC群白名单，可以设置多个',
      component: 'GSelectGroup',
      componentProps: {
        placeholder: '请选择群白名单',
      },
    },
    {
      field: 'qq_blacklist',
      label: 'QQ黑名单',
      bottomHelpMessage: 'AIGC QQ黑名单，可以设置多个',
      component: 'GTags',
      componentProps: {
        placeholder: '请输入QQ号',
        allowAdd: true,
        allowDel: true,
      },
    },
    {
      field: 'prefix_filter',
      label: '前缀过滤',
      bottomHelpMessage: '过滤以指定前缀开头的消息',
      component: 'GTags',
      componentProps: {
        placeholder: '请输入前缀',
        allowAdd: true,
        allowDel: true,
      },
    },
    {
      field: 'group_history_count',
      label: '群聊历史条数',
      bottomHelpMessage: '群聊记录携带条数，0则不携带',
      component: 'InputNumber',
      componentProps: {
        min: 0,
        placeholder: '请输入群聊历史条数',
      },
    },
    {
      field: 'max_history',
      label: '对话历史长度',
      bottomHelpMessage: '对话历史长度，单位为消息轮数',
      component: 'InputNumber',
      componentProps: {
        min: 1,
        placeholder: '请输入对话历史长度',
      },
    },
    {
      field: 'strip_reasoning',
      label: '兼容模式',
      bottomHelpMessage: '没出问题就勿动',
      component: 'Switch',
    },
    {
      field: 'show_thinking',
      label: '显示思维链',
      bottomHelpMessage: '是否将思维链以合并转发方式单独发送',
      component: 'Switch',
    },
    {
      field: 'split_reply',
      label: '分条回复',
      bottomHelpMessage: '是否允许AI分条回复',
      component: 'Switch',
    },
    {
      field: 'bilibili_cookie',
      label: 'Bilibili Cookie',
      bottomHelpMessage: 'Bilibili Cookie，用于视频搜索/下载工具',
      component: 'Input',
      componentProps: {
        placeholder: '请输入Bilibili Cookie',
      },
    },
    {
      label: '水群模式',
      component: 'Divider',
    },
    {
      field: 'ambient.enable',
      label: '启用水群模式',
      bottomHelpMessage: '是否启用水群模式',
      component: 'Switch',
    },
    {
      field: 'ambient.cooldown_min',
      label: '最小冷却时间',
      bottomHelpMessage: '每个群随机冷却时间最小值，单位分',
      component: 'InputNumber',
      componentProps: {
        min: 0,
        placeholder: '请输入最小冷却时间',
      },
    },
    {
      field: 'ambient.cooldown_max',
      label: '最大冷却时间',
      bottomHelpMessage: '每个群随机冷却时间最大值，单位分',
      component: 'InputNumber',
      componentProps: {
        min: 0,
        placeholder: '请输入最大冷却时间',
      },
    },
    {
      field: 'ambient.provider',
      label: '分流 Provider',
      bottomHelpMessage: '留空走全局，可选 openai | gemini',
      component: 'Select',
      componentProps: {
        options: [
          { label: '全局', value: '' },
          { label: 'OpenAI', value: 'openai' },
          { label: 'Gemini', value: 'gemini' },
        ],
        placeholder: '请选择分流提供商',
      },
    },
    {
      field: 'ambient.model',
      label: '分流模型',
      bottomHelpMessage: '分流模型名称，留空走全局',
      component: 'Input',
      componentProps: {
        placeholder: '请输入分流模型名称',
      },
    },
    {
      label: 'OpenAI 配置 (兼容接口)',
      component: 'Divider',
    },
    {
      field: 'openai.endpoint',
      label: '接口地址',
      component: 'Input',
      componentProps: {
        placeholder: '请输入OpenAI接口地址',
      },
    },
    {
      field: 'openai.api_key',
      label: 'API Key',
      bottomHelpMessage: '多Key用英文逗号分隔',
      component: 'Input',
      componentProps: {
        placeholder: '请输入OpenAI API Key',
      },
    },
    {
      field: 'openai.model',
      label: '模型',
      component: 'Input',
      componentProps: {
        placeholder: '请输入模型名称',
      },
    },
    {
      field: 'openai.thinking_effort',
      label: '思考等级',
      bottomHelpMessage: '留空=关闭思考，按提供商要求填写',
      component: 'Input',
      componentProps: {
        placeholder: '请输入思考等级',
      },
    },
    {
      label: 'Gemini 配置',
      component: 'Divider',
    },
    {
      field: 'gemini.endpoint',
      label: '接口地址',
      component: 'Input',
      componentProps: {
        placeholder: '请输入Gemini接口地址',
      },
    },
    {
      field: 'gemini.api_key',
      label: 'API Key',
      bottomHelpMessage: '多Key用英文逗号分隔',
      component: 'Input',
      componentProps: {
        placeholder: '请输入Gemini API Key',
      },
    },
    {
      field: 'gemini.model',
      label: '模型',
      component: 'Input',
      componentProps: {
        placeholder: '请输入模型名称',
      },
    },
    {
      field: 'gemini.thinking_level',
      label: '思考等级',
      bottomHelpMessage: '思考等级: minimal, low, medium, high',
      component: 'Select',
      componentProps: {
        options: [
          { label: 'minimal', value: 'minimal' },
          { label: 'low', value: 'low' },
          { label: 'medium', value: 'medium' },
          { label: 'high', value: 'high' },
        ],
        placeholder: '请选择思考等级',
      },
    },
    {
      field: 'gemini.embedding_model',
      label: 'Embedding 模型',
      bottomHelpMessage: '用于知识库向量化',
      component: 'Input',
      componentProps: {
        placeholder: '请输入 Embedding 模型名称',
      },
    },
    {
      label: '代理配置',
      component: 'Divider',
    },
    {
      field: 'proxy.address',
      label: '代理地址',
      bottomHelpMessage: '如 http://127.0.0.1:7890，为空则不启用',
      component: 'Input',
      componentProps: {
        placeholder: '请输入代理地址',
      },
    },
    {
      field: 'proxy.enable',
      label: 'LLM请求走代理',
      bottomHelpMessage: 'LLM请求是否走代理',
      component: 'Switch',
    },
    {
      label: 'MCP 工具服务器',
      component: 'Divider',
    },
    {
      field: 'mcp.servers',
      label: 'MCP工具服务器',
      bottomHelpMessage: 'MCP工具服务器配置，支持 Streamable HTTP 和 stdio 传输',
      component: 'GSubForm',
      componentProps: {
        multiple: true,
        modalProps: {
          title: 'MCP服务器配置',
        },
        schemas: [
          {
            field: 'name',
            label: '名称',
            component: 'Input',
            required: true,
            componentProps: { placeholder: '服务器名称' },
          },
          {
            field: 'transport',
            label: '传输方式',
            component: 'Select',
            required: true,
            componentProps: {
              options: [
                { label: 'HTTP', value: 'http' },
                { label: 'stdio', value: 'stdio' },
              ],
              placeholder: '请选择传输方式',
            },
          },
          {
            field: 'url',
            label: 'URL',
            bottomHelpMessage: 'HTTP 传输时填写',
            component: 'Input',
            componentProps: { placeholder: 'http://localhost:3000/mcp' },
          },
          {
            field: 'api_key',
            label: 'API Key',
            bottomHelpMessage: 'HTTP 鉴权（可选）',
            component: 'Input',
            componentProps: { placeholder: 'API Key' },
          },
          {
            field: 'command',
            label: '命令',
            bottomHelpMessage: 'stdio 传输时填写',
            component: 'Input',
            componentProps: { placeholder: 'npx' },
          },
          {
            field: 'args',
            label: '命令参数',
            bottomHelpMessage: 'stdio 传输时填写，每个参数一项',
            component: 'GTags',
            componentProps: {
              placeholder: '请输入参数值',
              allowAdd: true,
            },
          },
          {
            field: 'timeout_ms',
            label: '超时(毫秒)',
            component: 'InputNumber',
            componentProps: {
              min: 1000,
              placeholder: '30000',
            },
          },
          {
            field: 'protocol_version',
            label: '协议版本',
            bottomHelpMessage: 'MCP 协议版本（可选）',
            component: 'Input',
            componentProps: { placeholder: '请输入协议版本' },
          },
        ],
      },
    },
    {
      label: '语音合成（悟声 Wusound TTS）',
      component: 'Divider',
    },
    {
      field: 'voice.api_key',
      label: '悟声 API Key',
      bottomHelpMessage: '悟声 Wusound TTS API Key，在 https://dev.wusound.cn 开发者中心获取',
      component: 'Input',
      componentProps: {
        placeholder: '请输入悟声 API Key',
      },
    },
    {
      field: 'voice.voice_id',
      label: '默认语音角色 UUID',
      bottomHelpMessage: '悟声默认语音角色 UUID',
      component: 'Input',
      componentProps: {
        placeholder: '请输入语音角色 UUID',
      },
    },
    {
      field: 'voice.break_clone',
      label: '启用情感风格',
      bottomHelpMessage: '是否启用偏向文本的情感风格',
      component: 'Switch',
    },
    {
      field: 'voice.preset',
      label: '参数预设',
      bottomHelpMessage: 'creative(创意/最佳表现力) | balance(均衡) | stable(稳定)',
      component: 'Select',
      componentProps: {
        options: [
          { label: '创意 (creative)', value: 'creative' },
          { label: '均衡 (balance)', value: 'balance' },
          { label: '稳定 (stable)', value: 'stable' },
        ],
        placeholder: '请选择参数预设',
      },
    },
    {
      field: 'voice.speech_rate',
      label: '语速',
      bottomHelpMessage: '语速 0.5-2.0，数值越大越慢',
      component: 'InputNumber',
      componentProps: {
        min: 0.5,
        max: 2.0,
        step: 0.1,
        placeholder: '请输入语速',
      },
    },
  ],
}

export const milkyConfig = {
  milky: [
    {
      field: 'enable',
      label: '启用Milky',
      bottomHelpMessage: '是否启用Milky协议适配器',
      component: 'Switch',
    },
    {
      field: 'host',
      label: '服务器地址',
      component: 'Input',
      componentProps: {
        placeholder: '请输入Milky服务器地址',
      },
    },
    {
      field: 'port',
      label: '服务器端口',
      component: 'InputNumber',
      componentProps: {
        min: 1,
        max: 65535,
        placeholder: '请输入端口号',
      },
    },
    {
      field: 'prefix',
      label: 'URL前缀',
      component: 'Input',
      componentProps: {
        placeholder: '请输入URL前缀',
      },
    },
    {
      field: 'access_token',
      label: '鉴权Token',
      component: 'Input',
      componentProps: {
        placeholder: '请输入鉴权Token',
      },
    },
    {
      field: 'connection',
      label: '连接方式',
      component: 'Select',
      componentProps: {
        options: [
          { label: 'WebSocket', value: 'ws' },
          { label: 'Webhook', value: 'webhook' },
        ],
        placeholder: '请选择连接方式',
      },
    },
    {
      field: 'webhook.path',
      label: 'Webhook路径',
      bottomHelpMessage: '仅Webhook模式有效',
      component: 'Input',
      componentProps: {
        placeholder: '请输入Webhook路径',
      },
    },
    {
      field: 'ws.heartbeat',
      label: '心跳间隔',
      bottomHelpMessage: '仅WebSocket模式有效，单位：秒',
      component: 'InputNumber',
      componentProps: {
        min: 1,
        placeholder: '请输入心跳间隔（秒）',
      },
    },
    {
      field: 'ws.reconnect_interval',
      label: '重连间隔',
      bottomHelpMessage: '仅WebSocket模式有效，单位：秒',
      component: 'InputNumber',
      componentProps: {
        min: 1,
        placeholder: '请输入重连间隔（秒）',
      },
    },
    {
      field: 'http_timeout',
      label: 'HTTP超时',
      component: 'InputNumber',
      componentProps: {
        min: 1,
        placeholder: '请输入超时时间（秒）',
      },
    },
  ],
}

export const satoriConfig = {
  satori: [
    {
      field: 'enable',
      label: '启用Satori',
      bottomHelpMessage: '是否启用Satori协议适配器',
      component: 'Switch',
    },
    {
      field: 'http_endpoint',
      label: 'HTTP终结点',
      component: 'Input',
      componentProps: {
        placeholder: '请输入HTTP终结点地址',
      },
    },
    {
      field: 'ws_endpoint',
      label: 'WebSocket终结点',
      component: 'Input',
      componentProps: {
        placeholder: '请输入WebSocket终结点地址',
      },
    },
    {
      field: 'token',
      label: '访问令牌',
      component: 'Input',
      componentProps: {
        placeholder: '请输入API访问令牌',
      },
    },
    {
      field: 'platform',
      label: '平台名称',
      component: 'Input',
      componentProps: {
        placeholder: '请输入平台名称',
      },
    },
    {
      field: 'timeout',
      label: '超时时间',
      bottomHelpMessage: '单位：毫秒',
      component: 'InputNumber',
      componentProps: {
        min: 0,
        placeholder: '请输入超时时间（毫秒）',
      },
    },
    {
      field: 'heartbeat_interval',
      label: '心跳间隔',
      bottomHelpMessage: '单位：毫秒',
      component: 'InputNumber',
      componentProps: {
        min: 0,
        placeholder: '请输入心跳间隔（毫秒）',
      },
    },
  ],
}

export const maintConfig = {
  maint: [
    {
      field: 'enable',
      label: '启用维护任务',
      bottomHelpMessage: '是否启用定时维护任务',
      component: 'Switch',
    },
    {
      field: 'cron',
      label: '定时Cron',
      bottomHelpMessage: '定时维护任务Cron表达式',
      component: 'EasyCron',
      componentProps: {
        placeholder: '请输入或选择Cron表达式',
      },
    },
    {
      field: 'git_paths',
      label: 'Git仓库路径',
      bottomHelpMessage: '支持相对路径和绝对路径，更新为强制更新，仅用于辅助图像仓库更新',
      component: 'GTags',
      componentProps: {
        placeholder: '请输入Git仓库路径',
        allowAdd: true,
        allowDel: true,
      },
    },
    {
      field: 'clean_paths',
      label: '清理路径',
      bottomHelpMessage: '支持相对路径和绝对路径',
      component: 'GTags',
      componentProps: {
        placeholder: '请输入清理路径',
        allowAdd: true,
        allowDel: true,
      },
    },
    {
      field: 'timeout',
      label: 'Git命令超时',
      bottomHelpMessage: 'Git命令超时时间（毫秒）',
      component: 'InputNumber',
      componentProps: {
        min: 1,
        placeholder: '请输入超时时间（毫秒）',
      },
    },
    {
      field: 'mihomo.enable',
      label: '启用Mihomo代理',
      bottomHelpMessage: '是否启用代理订阅为维护（仅支持Linux系统）',
      component: 'Switch',
    },
    {
      field: 'mihomo.sub_url',
      label: '代理订阅链接',
      bottomHelpMessage: 'Mihomo代理订阅链接',
      component: 'Input',
      componentProps: {
        placeholder: '请输入代理订阅链接',
      },
    },
    {
      field: 'mihomo.exclude_regex',
      label: '节点过滤',
      bottomHelpMessage: '代理节点过滤规则',
      component: 'Input',
      componentProps: {
        placeholder: '请输入节点过滤正则',
      },
    },
    {
      field: 'mihomo.config_path',
      label: '代理配置文件路径',
      bottomHelpMessage: 'Mihomo代理订阅配置文件路径',
      component: 'Input',
      componentProps: {
        placeholder: '请输入配置文件路径',
      },
    },
    {
      field: 'mihomo.service_name',
      label: 'Systemctl服务名',
      bottomHelpMessage: 'Mihomo自启动systemctl中的对应名称用于重启',
      component: 'Input',
      componentProps: {
        placeholder: '请输入服务名称',
      },
    },
  ],
}

export const extraTabs = {
  maint: {
    key: 'maint',
    title: '维护配置',
    cards: [
      {
        key: 'system.maint',
        title: '维护任务设置',
        desc: '对定时维护任务进行相关配置',
        schemas: maintConfig.maint,
      },
    ],
  },
  aigc: {
    key: 'aigc',
    title: 'AIGC配置',
    cards: [
      {
        key: 'system.aigc',
        title: 'AIGC设置',
        desc: '对AIGC进行相关配置',
        schemas: aigcConfig.aigc,
      },
    ],
  },
  milky: {
    key: 'milky',
    title: 'Milky配置',
    cards: [
      {
        key: 'system.milky',
        title: 'Milky协议配置',
        desc: '对Milky协议适配器进行相关配置',
        schemas: milkyConfig.milky,
      },
    ],
  },
  satori: {
    key: 'satori',
    title: 'Satori配置',
    cards: [
      {
        key: 'system.satori',
        title: 'Satori协议配置',
        desc: '对Satori协议适配器进行相关配置',
        schemas: satoriConfig.satori,
      },
    ],
  },
}
