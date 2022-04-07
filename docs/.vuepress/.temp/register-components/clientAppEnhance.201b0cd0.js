import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("element", defineAsyncComponent(() => import("D:/project/anov/anov-ui-doc/docs/.vuepress/components/element.vue"))),
  app.component("guideTypeDetail", defineAsyncComponent(() => import("D:/project/anov/anov-ui-doc/docs/.vuepress/components/guideTypeDetail.vue"))),
  app.component("theme", defineAsyncComponent(() => import("D:/project/anov/anov-ui-doc/docs/.vuepress/components/theme.vue")))
}
