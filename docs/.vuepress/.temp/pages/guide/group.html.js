export const data = {
  "key": "v-792a83a6",
  "path": "/guide/group.html",
  "title": "分组介绍",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "简单分组",
      "slug": "简单分组",
      "children": []
    },
    {
      "level": 2,
      "title": "嵌套分组",
      "slug": "嵌套分组",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1649168746000,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "guide/group.md"
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
