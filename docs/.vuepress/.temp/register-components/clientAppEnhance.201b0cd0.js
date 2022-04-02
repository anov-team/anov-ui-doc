import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("guideTypeDetail", defineAsyncComponent(() => import("D:/project/anov/anov-ui-doc/docs/.vuepress/components/guideTypeDetail.vue"))),
  app.component("theme", defineAsyncComponent(() => import("D:/project/anov/anov-ui-doc/docs/.vuepress/components/theme.vue")))
}
