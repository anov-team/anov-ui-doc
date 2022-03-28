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
        "title": "大屏组件",
        "details": "ANOV-UI 是一套开源组件库，致力于为开发者、设计人员提供丰富的可视化大屏组件，可在基于 VUE2.0 的项目上使用该组件库。"
      },
      {
        "title": "主题管理",
        "details": "组件支持多种主题风格，如科技蓝、赛博朋克、黑金、黑冰、青橙等，用户可以根据不同场景一键切换主题，应对不同用户的喜好，缓解视觉疲劳；用户也可以自定义主题。"
      },
      {
        "title": "丰富的组件",
        "details": "目前anov-ui提供了8类70+个组件，包括的类别有图表、文字、列表、素材、媒体、地图，3D、交互等。"
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
  "git": {},
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
