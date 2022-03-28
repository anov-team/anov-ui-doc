export const data = {
  "key": "v-7a032f1f",
  "path": "/guide/one.html",
  "title": "构建项目",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "添加文件目录",
      "slug": "添加文件目录",
      "children": []
    },
    {
      "level": 2,
      "title": "添加路由",
      "slug": "添加路由",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "guide/one.md"
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
