<template><h1 id="组件开发文件介绍" tabindex="-1"><a class="header-anchor" href="#组件开发文件介绍" aria-hidden="true">#</a> 组件开发文件介绍</h1>
<p>本文介绍开发者在开发<strong>ANOV-UI</strong>组件时，需要遵循的文件结构。</p>
<p>在开发组件之前，您需要在 src/components 目录下新建一个文件夹，作为组件类别目录，在组件类别目录下可以添加多个组件目录。以表格类组件为例，组件目录中需要包含以下目录、文件。</p>
<pre class="vue-container"><code><p>├── <code>components</code>
│   ├── <code>table</code> <em>(<strong>类别目录</strong>)</em>
│   │   ├── <code>normal</code> <em>(<strong>组件目录 常规表格</strong>)</em>
│   │   │   ├── index.vue <em>(<strong>组件</strong>)</em>
│   │   │   ├── config.js <em>(<strong>配置面板</strong>)</em>
│   │   ├── <code>top</code> <em>(<strong>组件目录 TOP 表格</strong>)</em>
│   │   │   ├── index.vue
│   │   │   ├── config.js
│   │   ├── components.json <em>(<strong>导出类别下所有组件</strong>)</em></p>
</code></pre></template>
