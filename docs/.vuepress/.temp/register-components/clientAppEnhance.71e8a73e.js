import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("element", defineAsyncComponent(() => import("/Users/limeng/Desktop/project/2022/anov-ui-doc/docs/.vuepress/components/element.vue"))),
  app.component("guideTypeDetail", defineAsyncComponent(() => import("/Users/limeng/Desktop/project/2022/anov-ui-doc/docs/.vuepress/components/guideTypeDetail.vue"))),
  app.component("theme", defineAsyncComponent(() => import("/Users/limeng/Desktop/project/2022/anov-ui-doc/docs/.vuepress/components/theme.vue")))
}
