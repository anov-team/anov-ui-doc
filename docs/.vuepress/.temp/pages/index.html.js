export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroImage": "/logo.png",
    "heroText": null,
    "tagline": null,
    "actionText": "快速上手 →",
    "actionLink": "/zh/guide/",
    "features": [
      {
        "title": "丰富的组件",
        "details": "目前 anov-ui 提供了 8 类 40+个组件，包括的类别有图表(柱图、折线、饼图、气泡、散点等)、文字(数字、日期、指标、天气)、列表(TOP 表格、排名列表等)、素材(header、标题、点缀、icon)、媒体、地图、3D、控件(按钮、页签、时间轴、行列布局等)。"
      },
      {
        "title": "主题管理",
        "details": "组件内置多套主题风格，如科技蓝、赛博朋克、黑金、黑冰、青橙等，用户可以根据不同场景一键切换主题，应对不同用户的喜好，缓解视觉疲劳；用户也可以自定义主题。"
      },
      {
        "title": "资源管理",
        "details": "组件库包含多类资源组件，包括头部装饰、标题装饰、动画点缀、背景图片、视频、ICON等，资源组件内置部分静态数据，也支持接入标准格式的外部资源数据。"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2022-present ANOV"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "使用",
      "slug": "使用",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1648890668000,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
