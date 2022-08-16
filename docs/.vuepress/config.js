const { path } = require("@vuepress/utils");

module.exports = {
  // 站点配置
  base: "/anov-ui-doc/",
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
    repo: "",
    search: true,  //开启搜索
    searchMaxSuggestions: 8,
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
    ],
    sidebarDepth: 1, //0 来禁用所有级别的页面标题  1 来包含 <h2> 标题  2 来包含 <h2> 和 <h3> 标题
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          children: [
            "/guide/README.md",
            "/guide/dirtree.md",
            "/guide/file.md",
            "/guide/type.md",
            "/guide/group.md",
            "/guide/theme.md",
            "/guide/standard.md"
          ],
        },
      ],
      "/components/": [
        {
          text: "设计原则",
          children: ["/components/README.md"],
        },
        {
          text: "组件",
          children: [
            {
              text: "图表",
              children: [
                "/components/chart/line.md",
                "/components/chart/bar.md",
                "/components/chart/pie.md",
                "/components/chart/pictograph.md",
                "/components/chart/calendar.md",
                "/components/chart/gauge.md",
                "/components/chart/radar.md",
                "/components/chart/other.md",
              ],
            },
            {
              text: "文字",
              children: [
                "/components/text/text.md",
                "/components/text/indicator.md",
                "/components/text/weather.md",
              ],
            },
            {
              text: "媒体",
              children: ["/components/video/img.md", "/components/video/video.md"],
            },
            {
              text: "装饰",
              children: [
                "/components/deck/header.md",
                "/components/deck/title.md",
                "/components/deck/streamer.md",
                "/components/deck/icon.md",
                "/components/deck/shape.md",
              ],
            },
            {
              text: "列表",
              children: [
                "/components/list/table.md",
                "/components/list/list.md",
              ],
            },
            {
              text: "地图",
              children: ["/components/map/map.md",
                "/components/map/3D.md"],
            },
            {
              text: "控件",
              children: [
                "/components/control/select.md",
                "/components/control/btn.md",
                "/components/control/swiper.md",
                "/components/control/other.md",
              ],
            },
          ],
        },
      ],
    },
    editLink: false, //是否启用 编辑此页 链接
    lastUpdatedText: "上次更新",
    contributorsText: "贡献者",
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
    [
      "@vuepress/register-components",
      {
        componentsDir: path.resolve(__dirname, "./components"),
      },
    ],
  ],
};
