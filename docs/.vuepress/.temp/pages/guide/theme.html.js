export const data = {
  "key": "v-4d76029c",
  "path": "/guide/theme.html",
  "title": "主题应用",
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
  "filePathRelative": "guide/theme.md"
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
