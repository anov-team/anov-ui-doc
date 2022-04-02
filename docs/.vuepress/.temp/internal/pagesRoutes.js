import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-74c56a5a","/components/introduce.html",{"title":"组件"},["/components/introduce","/components/introduce.md"]],
  ["v-1020f180","/components/",{"title":"设计原则"},["/components/index.html","/components/README.md"]],
  ["v-1b623e0c","/guide/dirtree.html",{"title":"目录结构"},["/guide/dirtree","/guide/dirtree.md"]],
  ["v-55846971","/guide/file.html",{"title":"组件开发"},["/guide/file","/guide/file.md"]],
  ["v-792a83a6","/guide/group.html",{"title":"分组介绍"},["/guide/group","/guide/group.md"]],
  ["v-fffb8e28","/guide/",{"title":"准备工作"},["/guide/index.html","/guide/README.md"]],
  ["v-4d76029c","/guide/theme.html",{"title":"主题应用"},["/guide/theme","/guide/theme.md"]],
  ["v-7a23931a","/guide/type.html",{"title":"类型介绍"},["/guide/type","/guide/type.md"]],
  ["v-d50f5082","/theme/",{"title":"组件主题"},["/theme/index.html","/theme/README.md"]],
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
