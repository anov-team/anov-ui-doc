# 准备工作

## 介绍

**ANOV-UI** 是一套开源组件库，致力于为开发者、设计人员提供丰富的可视化大屏组件，可在基于 VUE 的项目上使用该组件库。

## 兼容性

该平台在谷歌 80+、火狐、QQ、360 极速、Edge、搜狗浏览器均可运行，建议使用谷歌浏览器，其余浏览器由于浏览器本身 API 不同，可能会造成部分功能无法正常使用。

## 开发环境搭建

首先您的开发环境需要 Node.js 10+，推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

1. Fork 组件库代码

请先 Fork [ANOV-UI](https://github.com/anov-team/anov-ui) 代码到自己的 github 账号下，不建议直接在我们仓库下建立分支。

2. 克隆代码到本地，并安装依赖

```bash
git clone https://github.com/xxxxx/anov-ui.git
npm install
```

3. 导出组件 src/index.js

```bash
npm run build:file
```

4. 启动项目

```bash
npm run dev
```

## 开发组件

当项目启动以后，你就进入了正式的组件开发流程了。但是，请先别动手写代码，花一些时间熟悉我们的[目录结构](./dirtree.md#目录结构)和[基本规则](./devrule.md)是非常必要的。
