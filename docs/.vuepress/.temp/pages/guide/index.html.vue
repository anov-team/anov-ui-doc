<template><h1 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p><strong>ANOV-UI</strong> 是一套开源组件库，致力于为开发者、设计人员提供丰富的可视化大屏组件，可在基于 VUE 的项目上使用该组件库。</p>
<h2 id="兼容性" tabindex="-1"><a class="header-anchor" href="#兼容性" aria-hidden="true">#</a> 兼容性</h2>
<p>该平台在谷歌 80+、火狐、QQ、360 极速、Edge、搜狗浏览器均可运行，建议使用谷歌浏览器，其余浏览器由于浏览器本身 API 不同，可能会造成部分功能无法正常使用。</p>
<h2 id="开发环境搭建" tabindex="-1"><a class="header-anchor" href="#开发环境搭建" aria-hidden="true">#</a> 开发环境搭建</h2>
<p>首先您的开发环境需要 Node.js 10+，推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
<ol>
<li>Fork 组件库代码</li>
</ol>
<p>请先 Fork <a href="https://github.com/anov-team/anov-ui" target="_blank" rel="noopener noreferrer">ANOV-UI<ExternalLinkIcon/></a> 代码到自己的 github 账号下，不建议直接在我们仓库下建立分支。</p>
<ol start="2">
<li>克隆代码到本地，并安装依赖</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/xxxxx/anov-ui.git
<span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="3">
<li>导出组件 src/index.js</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run build:file
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4">
<li>启动项目</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="开发组件" tabindex="-1"><a class="header-anchor" href="#开发组件" aria-hidden="true">#</a> 开发组件</h2>
<p>当项目启动以后，你就进入了正式的组件开发流程了。但是，请先别动手写代码，花一些时间熟悉我们的<RouterLink to="/guide/dirtree.html#%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84">目录结构</RouterLink>和<RouterLink to="/guide/devrule.html">基本规则</RouterLink>是非常必要的。</p>
</template>
