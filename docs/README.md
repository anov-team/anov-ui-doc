---
home: true
heroImage: /logo.png
heroText: 
tagline: AnovUI是一套开源组件库，致力于为开发者、设计人员提供丰富的可视化大屏组件，可在基于 VUE 的项目上使用该组件库。
actionText: 快速上手 →
actionLink: /zh/guide/
features:
  - title: 组件类别
    details: 目前提供了 8 类 50+个组件，包括的类别有图表(柱图、折线、饼图、气泡、散点等)、信息(文本、日期、指标、天气)、列表(TOP表格、列表等)、素材(标题、点缀、icon等)、媒体、地图、3D、控件(按钮、选择框、轮播、时间轴、布局等)。
  - title: 主题风格
    details: 组件内置多套主题风格，如科技蓝、赛博朋克、黑金、黑冰、青橙等，用户可以根据不同场景一键切换主题。主题风格的设计不仅是为了让图表或元素更好看，也是为了更符合可视化原理的设计，以使得能够明确地、有效地传递信息。
  - title: 资源管理
    details: 组件库包含多类资源组件，包括头部装饰、标题装饰、动画点缀、背景图片、视频、ICON等，资源组件内置部分静态数据，也支持接入标准格式的外部资源数据。
  
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

::: warning 注意
请确保您的开发环境 Node.js 版本 >= 10
:::