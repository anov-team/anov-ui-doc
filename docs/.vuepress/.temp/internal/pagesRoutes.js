import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-1020f180","/components/",{"title":"设计原则"},["/components/index.html","/components/README.md"]],
  ["v-74c56a5a","/components/introduce.html",{"title":"组件"},["/components/introduce","/components/introduce.md"]],
  ["v-d50f5082","/theme/",{"title":"组件主题"},["/theme/index.html","/theme/README.md"]],
  ["v-fffb8e28","/guide/",{"title":"准备工作"},["/guide/index.html","/guide/README.md"]],
  ["v-1b623e0c","/guide/dirtree.html",{"title":"目录结构"},["/guide/dirtree","/guide/dirtree.md"]],
  ["v-55846971","/guide/file.html",{"title":"组件开发"},["/guide/file","/guide/file.md"]],
  ["v-792a83a6","/guide/group.html",{"title":"分组介绍"},["/guide/group","/guide/group.md"]],
  ["v-4d76029c","/guide/theme.html",{"title":"主题应用"},["/guide/theme","/guide/theme.md"]],
  ["v-7a23931a","/guide/type.html",{"title":"类型介绍"},["/guide/type","/guide/type.md"]],
  ["v-0a41b2f7","/components/chart/bar.html",{"title":"柱状图"},["/components/chart/bar","/components/chart/bar.md"]],
  ["v-3534bbdc","/components/chart/bubble.html",{"title":"气泡图"},["/components/chart/bubble","/components/chart/bubble.md"]],
  ["v-3bfbad91","/components/chart/gauge.html",{"title":"仪表盘"},["/components/chart/gauge","/components/chart/gauge.md"]],
  ["v-62954d98","/components/chart/line.html",{"title":"折线图"},["/components/chart/line","/components/chart/line.md"]],
  ["v-454eb5da","/components/chart/other.html",{"title":"其它"},["/components/chart/other","/components/chart/other.md"]],
  ["v-1bfa47c2","/components/chart/pictograph.html",{"title":"象形柱图"},["/components/chart/pictograph","/components/chart/pictograph.md"]],
  ["v-4995011e","/components/chart/pie.html",{"title":"饼图"},["/components/chart/pie","/components/chart/pie.md"]],
  ["v-a40da8b8","/components/chart/radar.html",{"title":"雷达图"},["/components/chart/radar","/components/chart/radar.md"]],
  ["v-bdd2d042","/components/chart/wordcloud.html",{"title":"词云"},["/components/chart/wordcloud","/components/chart/wordcloud.md"]],
  ["v-097617af","/components/control/btn.html",{"title":"按钮"},["/components/control/btn","/components/control/btn.md"]],
  ["v-12feba14","/components/control/dropdown.html",{"title":"下拉列表"},["/components/control/dropdown","/components/control/dropdown.md"]],
  ["v-e95ee83e","/components/control/grid.html",{"title":"布局"},["/components/control/grid","/components/control/grid.md"]],
  ["v-abb1d87a","/components/control/iframe.html",{"title":"iframe"},["/components/control/iframe","/components/control/iframe.md"]],
  ["v-55bab216","/components/control/tab.html",{"title":"页签"},["/components/control/tab","/components/control/tab.md"]],
  ["v-37e9b0c6","/components/control/timeline.html",{"title":"时间轴"},["/components/control/timeline","/components/control/timeline.md"]],
  ["v-40079946","/components/deck/header.html",{"title":"头部装饰"},["/components/deck/header","/components/deck/header.md"]],
  ["v-2313815a","/components/deck/icon.html",{"title":"图标"},["/components/deck/icon","/components/deck/icon.md"]],
  ["v-010dde5c","/components/deck/img.html",{"title":"图片"},["/components/deck/img","/components/deck/img.md"]],
  ["v-749dc084","/components/deck/shape.html",{"title":"形状"},["/components/deck/shape","/components/deck/shape.md"]],
  ["v-0d8695b4","/components/deck/streamer.html",{"title":"动画"},["/components/deck/streamer","/components/deck/streamer.md"]],
  ["v-305c6767","/components/deck/title.html",{"title":"标题装饰"},["/components/deck/title","/components/deck/title.md"]],
  ["v-a5c63bec","/components/list/list.html",{"title":"列表"},["/components/list/list","/components/list/list.md"]],
  ["v-77b50ec8","/components/list/table.html",{"title":"表格"},["/components/list/table","/components/list/table.md"]],
  ["v-94ae1d9c","/components/map/echarts.html",{"title":"2D 地图"},["/components/map/echarts","/components/map/echarts.md"]],
  ["v-1e417be8","/components/text/indicator.html",{"title":"指标"},["/components/text/indicator","/components/text/indicator.md"]],
  ["v-33953caa","/components/text/text.html",{"title":"文字"},["/components/text/text","/components/text/text.md"]],
  ["v-686b8072","/components/text/weather.html",{"title":"天气"},["/components/text/weather","/components/text/weather.md"]],
  ["v-69e57a92","/components/video/video.html",{"title":"媒体"},["/components/video/video","/components/video/video.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
