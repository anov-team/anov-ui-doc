export const data = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "准备工作",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "介绍",
      "slug": "介绍",
      "children": []
    },
    {
      "level": 2,
      "title": "兼容性",
      "slug": "兼容性",
      "children": []
    },
    {
      "level": 2,
      "title": "开发环境搭建",
      "slug": "开发环境搭建",
      "children": []
    },
    {
      "level": 2,
      "title": "组件开发",
      "slug": "组件开发",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1648429876000,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "guide/README.md"
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
