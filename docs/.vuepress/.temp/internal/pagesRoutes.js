import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-1020f180","/components/",{"title":"组件"},["/components/index.html","/components/README.md"]],
  ["v-6ec8569b","/components/design.html",{"title":"设计原则"},["/components/design","/components/design.md"]],
  ["v-fffb8e28","/guide/",{"title":"准备工作"},["/guide/index.html","/guide/README.md"]],
  ["v-1b623e0c","/guide/dirtree.html",{"title":"目录结构"},["/guide/dirtree","/guide/dirtree.md"]],
  ["v-55846971","/guide/file.html",{"title":"组件开发文件介绍"},["/guide/file","/guide/file.md"]],
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
