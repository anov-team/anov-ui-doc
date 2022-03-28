<template><h1 id="聚焦模式服务" tabindex="-1"><a class="header-anchor" href="#聚焦模式服务" aria-hidden="true">#</a> 聚焦模式服务</h1>
<p>该服务提供聚焦模式下显示及隐藏、自动轮播的功能。</p>
<WatchVideo url="https://anov.cucloud.cn/train?active=12" title="聚焦模式" text="查看该功能介绍"></WatchVideo>
<h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明" aria-hidden="true">#</a> 使用说明</h2>
<p>引入模块</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 按需引入</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> focusServer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"anov-core"</span><span class="token punctuation">;</span>
<span class="token comment">// 完整引入</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> anov <span class="token keyword">from</span> <span class="token string">"anov-core"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>全局对象方式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span>focusServer<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th>说明</th>
<th style="text-align:left">类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">isOpen</td>
<td>聚焦模式是否开启</td>
<td style="text-align:left">boolean</td>
<td>false</td>
</tr>
<tr>
<td style="text-align:left">focusedId</td>
<td>当前聚焦 id</td>
<td style="text-align:left">string</td>
<td>''</td>
</tr>
<tr>
<td style="text-align:left">carousel</td>
<td>智能解说是否开启</td>
<td style="text-align:left">boolean</td>
<td>false</td>
</tr>
</tbody>
</table>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<table>
<thead>
<tr>
<th style="text-align:left">方法名</th>
<th>说明</th>
<th style="text-align:left">参数</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">activated</td>
<td>激活某个模块聚焦</td>
<td style="text-align:left">string:聚焦模块 id|object:聚焦模块配置对象</td>
</tr>
<tr>
<td style="text-align:left">inactivated</td>
<td>取消某个模块聚焦</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">focuseNext</td>
<td>聚焦下一个模块</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">hideComplete</td>
<td>清空 focusedId</td>
<td style="text-align:left">-</td>
</tr>
</tbody>
</table>
</template>
