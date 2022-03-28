export const siteData = {
  "base": "/",
  "lang": "zh-CN",
  "title": "ANOV-UI",
  "description": "ANOV-UI 是一套开源组件库，致力于为开发者、设计人员提供丰富的可视化大屏组件，可在基于 VUE 的项目上使用该组件库。",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "favicon.ico"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
