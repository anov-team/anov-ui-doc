<template><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<ol>
<li>安装组件包</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> anov-ui -S
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>使用组件</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> AnovUI <span class="token keyword">from</span> <span class="token string">"anov-ui"</span><span class="token punctuation">;</span>

<span class="token comment">//全局引入</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>AnovUI<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//按需引入</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Table<span class="token punctuation">,</span>
  SingleLine<span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"anov-ui"</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Table<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>SingleLine<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>建议使用<code>npm</code> 进行安装,<code>yarn</code>或者<code>cnpm</code>安装可能导致某些插件版本安装错误，程序无法正常运行</p>
</div>
</template>
