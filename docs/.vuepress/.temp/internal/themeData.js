export const themeData = {
  "logo": "favicon.ico",
  "repo": "https://github.com/anov-team/anov-ui-doc",
  "navbar": [
    {
      "text": "指南",
      "link": "/guide/"
    },
    {
      "text": "组件",
      "link": "/components/"
    },
    {
      "text": "主题",
      "link": "/theme/"
    },
    {
      "text": "资源",
      "link": "/resource/"
    }
  ],
  "sidebarDepth": 1,
  "sidebar": {
    "/guide/": [
      {
        "text": "指南",
        "children": [
          "/guide/README.md",
          "/guide/dirtree.md",
          "/guide/file.md",
          "/guide/type.md",
          "/guide/group.md",
          "/guide/theme.md"
        ]
      }
    ],
    "/components/": [
      {
        "text": "设计原则",
        "children": [
          "/components/README.md"
        ]
      },
      {
        "text": "组件",
        "children": [
          "/components/introduce.md"
        ]
      }
    ]
  },
  "editLink": false,
  "lastUpdatedText": "上次更新",
  "contributorsText": "贡献者",
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "contributors": true,
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
