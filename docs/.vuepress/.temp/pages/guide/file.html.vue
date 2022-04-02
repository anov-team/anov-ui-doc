<template><h1 id="组件开发" tabindex="-1"><a class="header-anchor" href="#组件开发" aria-hidden="true">#</a> 组件开发</h1>
<h2 id="组件目录结构" tabindex="-1"><a class="header-anchor" href="#组件目录结构" aria-hidden="true">#</a> 组件目录结构</h2>
<p>本节介绍开发者在开发组件时，需要遵循的文件结构。</p>
<p>在开发组件之前，您需要在 <em>src/components</em> 文件夹下新建一个组件目录，在组件目录下可以添加多个组件，每个具体组件建议使用组件特性作为目录名。🌰 参考 <strong>表格</strong> 组件的目录结构。</p>
<pre class="vue-container"><code><p>.
├── <code>components</code>
│   ├── <code>table</code> <em>(<strong>组件目录：表格</strong>)</em>
│   │   ├── <code>normal</code> <em>(<strong>常规表格</strong>)</em>
│   │   │   ├── index.vue <em>(<strong>视图</strong>)</em>
│   │   │   ├── config.js <em>(<strong>配置文件</strong>)</em>
│   │   ├── <code>top</code> <em>(<strong>TOP表格</strong>)</em>
│   │   │   ├── index.vue
│   │   │   ├── config.js
│   │   ├── components.json <em>(<strong>导出目录下所有组件</strong>)</em></p>
</code></pre><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2>
<p>您通过 <em>config.js</em> 文件中的<code>getData</code>、<code>getDataDes</code>函数，来定义外观面板、数据面板、交互面板的显示。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">option</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>    <span class="token comment">//外观面板数据</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>      <span class="token comment">//静态数据 非必须</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">getDataDes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">optionDes</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">//外观面板描述</span>
      <span class="token literal-property property">sourceDes</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">//数据面板描述 非必须</span>
      <span class="token literal-property property">actionsDes</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//交互面板描述 非必须</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><details class="custom-container details"><summary>样例-外观面板</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Type <span class="token keyword">from</span> <span class="token string">"anov-ui/src/utils/panel/type"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">option</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">"测试数据"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">select</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span><span class="token string">""</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">getDataDes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">optionDes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"标题"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> Type<span class="token punctuation">.</span>input<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">select</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"类型"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> Type<span class="token punctuation">.</span>select<span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"选项一"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"选项二"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"颜色选择"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> Type<span class="token punctuation">.</span>color
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><blockquote>
<p>呈现效果</p>
</blockquote>
<img :src="$withBase('/images/guide/file/panel.png')" style="width:350px;" alt="外观面板">
<div class="custom-container danger"><p class="custom-container-title">警告</p>
<p>外观面板配置中 <code>数据</code>与<code>描述</code> 数据结构要对应，结构错误会导致外观面板显示异常。</p>
</div>
</details>
<details class="custom-container details"><summary>样例-数据面板</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">//静态数据</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">area</span><span class="token operator">:</span> <span class="token string">"北京"</span><span class="token punctuation">,</span> <span class="token literal-property property">amount</span><span class="token operator">:</span> <span class="token string">"38558"</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">"文化旅游"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">area</span><span class="token operator">:</span> <span class="token string">"上海"</span><span class="token punctuation">,</span> <span class="token literal-property property">amount</span><span class="token operator">:</span> <span class="token string">"48558"</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">"生态环境"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">area</span><span class="token operator">:</span> <span class="token string">"湖南"</span><span class="token punctuation">,</span> <span class="token literal-property property">amount</span><span class="token operator">:</span> <span class="token string">"98558"</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">"医疗健康"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">getDataDes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">//数据面板：不支持数据映射的组件可不写sourceDes配置</span>
      <span class="token literal-property property">sourceDes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">mapFields</span><span class="token operator">:</span> <span class="token punctuation">[</span>   
          <span class="token punctuation">{</span> <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">"area"</span><span class="token punctuation">,</span> <span class="token literal-property property">mapField</span><span class="token operator">:</span> <span class="token string">"area"</span><span class="token punctuation">,</span> <span class="token literal-property property">des</span><span class="token operator">:</span> <span class="token string">"区域"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">"amount"</span><span class="token punctuation">,</span> <span class="token literal-property property">mapField</span><span class="token operator">:</span> <span class="token string">"amount"</span><span class="token punctuation">,</span> <span class="token literal-property property">des</span><span class="token operator">:</span> <span class="token string">"金额"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">"category"</span><span class="token punctuation">,</span> <span class="token literal-property property">mapField</span><span class="token operator">:</span> <span class="token string">"category"</span><span class="token punctuation">,</span> <span class="token literal-property property">des</span><span class="token operator">:</span> <span class="token string">"行业"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><blockquote>
<p>呈现效果</p>
</blockquote>
<img :src="$withBase('/images/guide/file/source.png')" style="width:300px;" alt="数据面板">
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>当描述中不提供 sourceDes 属性时，不会显示数据面板；面板配置文件中只开放<code>静态数据</code>、<code>映射字段描述</code>配置，其它都是组件库内置的一些配置行为。</p>
</div>
</details>
<details class="custom-container details"><summary>样例-交互面板</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">getDataDes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">//交互面板：不支持交互的组件可不写actionsDes配置</span>
      <span class="token literal-property property">actionsDes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"click"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">des</span><span class="token operator">:</span> <span class="token string">"单击事件"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token operator">...</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">mapFields</span><span class="token operator">:</span> <span class="token punctuation">[</span>  <span class="token comment">//非必须</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">"index"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">mapField</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
            <span class="token literal-property property">des</span><span class="token operator">:</span> <span class="token string">"行索引"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><blockquote>
<p>呈现效果</p>
</blockquote>
<img :src="$withBase('/images/guide/file/action.png')" style="width:300px;" alt="交互面板">
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>当描述中不提供 actionsDes 属性时，不会显示交互面板；面板配置文件中只开放<code>交互行为</code>、<code>全局参数映射</code>配置，其它都是组件库内置的一些配置行为。</p>
</div>
</details>
<h2 id="视图文件" tabindex="-1"><a class="header-anchor" href="#视图文件" aria-hidden="true">#</a> 视图文件</h2>
<p><em>index.vue</em>文件是组件的入口文件。以下提供了一个示例供您参考，并介绍了<em>index.vue</em>文件中的常用函数，可以根据需要去实现这些函数。</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ ...size }<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>click<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item index) in data<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onClick(index,item)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      ....
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> anMixin <span class="token keyword">from</span> <span class="token string">"anov-ui/src/components/mixin/component.js"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Table"</span><span class="token punctuation">,</span> <span class="token comment">//组件名称，采用帕斯卡(pascal)命名法</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>anMixin<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 组件初始化
     */</span>
    <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 重新加载组件，会执行动画线
     */</span>
    <span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 刷新，保留之前的缓存内容，一般用于修改数据，不会执行动画线
     */</span>
    <span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 主题改变，组件执行的操作
     */</span>
    <span class="token function">changeTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>theme<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//当前主题</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 容器大小改变，组件执行的操作
     */</span>
    <span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 销毁
     */</span>
    <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 点击事件
     */</span>
    <span class="token function">onClick</span><span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//第一个参数click对应的是交互描述中的 event.name</span>
      <span class="token comment">//第二个参数中 index(行索引)对应的是交互描述中 全局参数映射 中的index，data是当前数据行的值</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleEvent</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">index</span><span class="token operator">:</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">data</span><span class="token operator">:</span> params <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><p>混入的<em>mixin/component.js</em>提供了组件接收的数据，以及通用函数。</p>
<details class="custom-container details"><summary>组件数据</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">option</span><span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token comment">//外观面板数据</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Object
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">440</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">246</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>   <span class="token comment">//当前主题</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Object
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>   <span class="token comment">//数据</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">size</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>width<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 事件处理逻辑
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">eventName</span> 事件名称
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">params</span> 参数
     */</span>
    <span class="token function">handleEvent</span><span class="token punctuation">(</span><span class="token parameter">eventName<span class="token punctuation">,</span> params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//具体实现逻辑.....</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div></details>
<h2 id="导出类型下组件" tabindex="-1"><a class="header-anchor" href="#导出类型下组件" aria-hidden="true">#</a> 导出类型下组件</h2>
<p><em>components.json</em>文件是导出类别下所有组件，格式如下：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"表格"</span><span class="token punctuation">,</span>
    <span class="token property">"other"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"author"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"company"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"remark"</span><span class="token operator">:</span> <span class="token string">""</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"components"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Table"</span><span class="token punctuation">,</span>   <span class="token comment">//与视图文件中的name对应</span>
            <span class="token property">"c_name"</span><span class="token operator">:</span> <span class="token string">"常规表格"</span><span class="token punctuation">,</span>
            <span class="token property">"component"</span><span class="token operator">:</span> <span class="token string">"table/normal/index.vue"</span><span class="token punctuation">,</span> 
            <span class="token property">"config"</span><span class="token operator">:</span> <span class="token string">"table/normal/config.js"</span><span class="token punctuation">,</span>
            <span class="token property">"view"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"width"</span><span class="token operator">:</span> <span class="token string">"440px"</span><span class="token punctuation">,</span>
                <span class="token property">"height"</span><span class="token operator">:</span> <span class="token string">"246px"</span><span class="token punctuation">,</span>
                <span class="token property">"preview"</span><span class="token operator">:</span> <span class="token string">""</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"TopTable"</span><span class="token punctuation">,</span>   <span class="token comment">//与视图文件中的name对应</span>
            <span class="token property">"c_name"</span><span class="token operator">:</span> <span class="token string">"TOP表格"</span><span class="token punctuation">,</span>
            <span class="token property">"component"</span><span class="token operator">:</span> <span class="token string">"table/top/index.vue"</span><span class="token punctuation">,</span>
            <span class="token property">"config"</span><span class="token operator">:</span> <span class="token string">"table/top/config.js"</span><span class="token punctuation">,</span>
            <span class="token property">"view"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"width"</span><span class="token operator">:</span> <span class="token string">"440px"</span><span class="token punctuation">,</span>
                <span class="token property">"height"</span><span class="token operator">:</span> <span class="token string">"246px"</span><span class="token punctuation">,</span>
                <span class="token property">"preview"</span><span class="token operator">:</span> <span class="token string">""</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>添加一个组件，包含三个要点：配置文件(config.js)、视图文件(index.vue)、导出组件(components.json)。
三要点文件命名建议参考以上规范，也可以根据用户习惯命名。</p>
</div>
</template>
