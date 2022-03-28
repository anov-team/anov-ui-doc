module.exports = {
  // 站点配置
  base: "/",
  lang: "zh-CN",
  title: "ANOV-UI",
  description:
    "ANOV-UI 是一套开源组件库，致力于为开发者、设计人员提供丰富的可视化大屏组件，可在基于 VUE 的项目上使用该组件库。",
  head: [["link", { rel: "icon", href: "favicon.ico" }]],

  port: "8086",
  open: true, //是否在开发服务器启动后打开浏览器
  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "favicon.ico",
    repo: "https://github.com/anov-team/anov-ui-doc",
    navbar: [
      {
        text: "指南",
        link: "/guide/",
      },
      {
        text: "组件",
        link: "/components/",
      },
      {
        text: "主题",
        link: "/theme/",
      },
      {
        text: "资源",
        link: "/resource/",
      },
    ],
    sidebarDepth: 1, //0 来禁用所有级别的页面标题  1 来包含 <h2> 标题  2 来包含 <h2> 和 <h3> 标题
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          children: ["/guide/README.md", "/guide/dirtree.md", "/guide/file.md"],
        },
      ],
      "/components/": [
        {
          text: "组件",
          children: ["/components/design.md"],
        },
      ],
    },
    editLink: false, //是否启用 编辑此页 链接
  },
  plugins: [
    [
      "@vuepress/container",
      {
        type: "vue",
        before: () => '<pre class="vue-container"><code>',
        after: () => "</code></pre>",
      },
    ],
  ],
};
