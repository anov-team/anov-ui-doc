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
          "/guide/file.md"
        ]
      }
    ],
    "/components/": [
      {
        "text": "组件",
        "children": [
          "/components/design.md"
        ]
      }
    ]
  },
  "editLink": false,
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
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
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
