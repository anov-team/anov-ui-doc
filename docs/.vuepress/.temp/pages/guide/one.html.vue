<template><h1 id="构建项目" tabindex="-1"><a class="header-anchor" href="#构建项目" aria-hidden="true">#</a> 构建项目</h1>
<p>该页面将引导你使用<strong>Anov 框架</strong>一步步的构建自己的项目。</p>
<h2 id="添加文件目录" tabindex="-1"><a class="header-anchor" href="#添加文件目录" aria-hidden="true">#</a> 添加文件目录</h2>
<p>为了简便起见我们构建一个有两个页面的项目。</p>
<p>我们在第<code>pages</code>目录添加两个目录<code>home</code>和<code>second</code>，现在目录结构如下所示:</p>
<p>::: vue
.
├── <code>src</code>
│   ├── <code>pages</code> <em>(<strong>项目文件目录</strong>)</em>
│   │   ├── <code>home</code>
│   │   │ ├── <code>comps</code>
│   │   │ │   └── comp1.vue
│   │   │ ├── tl.js
│   │   │ ├── pageConfig.js
│   │   │ └── index.vue
│   │   └── <code>second</code>
│   │   ├── <code>comps</code>
│   │   │   └── comp2.vue
│   │   ├── tl.js
│   │   ├── pageConfig.js
│   │   └── index.vue
│   ...
...
:::</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>通过以上目录结构可以看到，每个页面中都有一个<code>pageConfig.js</code>这是必不可少的，稍后我们将会介绍它的用途。</p>
</div>
<h2 id="添加路由" tabindex="-1"><a class="header-anchor" href="#添加路由" aria-hidden="true">#</a> 添加路由</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>为了便于管理和控制，可视化项目的每一个页面我们都拆分为一个路由。</p>
</div>
<p>定位到路由配置文件<code>src/router/index.js</code>如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">"vue-router"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> home <span class="token keyword">from</span> <span class="token string">"@/pages/home"</span><span class="token punctuation">;</span> <span class="token comment">// 第一个页面</span>
<span class="token keyword">import</span> second <span class="token keyword">from</span> <span class="token string">"@/pages/second"</span><span class="token punctuation">;</span> <span class="token comment">// 第二个页面</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Router<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"home"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">menuText</span><span class="token operator">:</span> <span class="token string">"home"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> home<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"second"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/second"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">menuText</span><span class="token operator">:</span> <span class="token string">"second"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> second<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>自此，我们已经完成了项目的路由配置。</p>
</template>
