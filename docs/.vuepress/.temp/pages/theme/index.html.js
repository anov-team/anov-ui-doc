export const data = {
  "key": "v-d50f5082",
  "path": "/theme/",
  "title": "组件主题",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1648890668000,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "theme/README.md"
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
