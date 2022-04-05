import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/limeng/Desktop/project/2022/anov-ui-doc/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/limeng/Desktop/project/2022/anov-ui-doc/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
