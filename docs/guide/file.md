# 组件开发文件介绍

本文介绍开发者在开发**ANOV-UI**组件时，需要遵循的文件结构。

在开发组件之前，您需要在 src/components 目录下新建一个文件夹，作为组件类别目录，在组件类别目录下可以添加多个组件目录。以表格类组件为例，组件目录中需要包含以下目录、文件。

:::vue
├── `components`
│   ├── `table` _(**类别目录**)_
│   │   ├── `normal` _(**组件目录 常规表格**)_
│   │   │   ├── index.vue _(**组件**)_
│   │   │   ├── config.js _(**配置面板**)_
│   │   ├── `top` _(**组件目录 TOP 表格**)_
│   │   │   ├── index.vue
│   │   │   ├── config.js
│   │   ├── components.json _(**导出类别下所有组件**)_
:::