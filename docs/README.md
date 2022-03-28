---
home: true
heroImage: /logo.png
heroText:
tagline:
actionText: 快速上手 →
actionLink: /zh/guide/
features:
  - title: 大屏组件
    details: ANOV-UI 是一套开源组件库，致力于为开发者、设计人员提供丰富的可视化大屏组件，可在基于 VUE2.0 的项目上使用该组件库。
  - title: 主题管理
    details: 组件支持多种主题风格，如科技蓝、赛博朋克、黑金、黑冰、青橙等，用户可以根据不同场景一键切换主题，应对不同用户的喜好，缓解视觉疲劳；用户也可以自定义主题。
  - title: 丰富的组件
    details: 目前anov-ui提供了8类70+个组件，包括的类别有图表、文字、列表、素材、媒体、地图，3D、交互等。
footer: MIT Licensed | Copyright © 2022-present ANOV
---

## 使用

1. 安装组件包

```shell
npm install anov-ui -S
```

2. 使用组件

```javascript
import Vue from "vue";
import AnovUI from "anov-ui";

//全局引入
Vue.use(AnovUI);

//按需引入
import {
  Table,
  SingleLine,
  // ...
} from "anov-ui";
Vue.use(Table);
Vue.use(SingleLine);
```

:::warning NOTE
建议使用`npm` 进行安装,`yarn`或者`cnpm`安装可能导致某些插件版本安装错误，程序无法正常运行
:::
