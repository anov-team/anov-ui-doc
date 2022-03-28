<template><h1 id="环境服务" tabindex="-1"><a class="header-anchor" href="#环境服务" aria-hidden="true">#</a> 环境服务</h1>
<p>根据项目<a href="#%E9%85%8D%E7%BD%AE%E5%88%97%E8%A1%A8">配置列表</a>，检测并提供当前系统运行的参数，包括大屏等级、显卡信息、分辨率、浏览器信息、网络状态、摄像头、麦克风、缩放比例、性能、网络延迟、远程终端连接情况等。</p>
<!-- <WatchVideo url="https://anov.cucloud.cn" title="环境服务" text="查看该功能介绍"></WatchVideo> -->
<h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明" aria-hidden="true">#</a> 使用说明</h2>
<p>引入模块</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 按需引入</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> envServer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"anov-core"</span><span class="token punctuation">;</span>
<span class="token comment">// 完整引入</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> anov <span class="token keyword">from</span> <span class="token string">"anov-core"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="配置列表" tabindex="-1"><a class="header-anchor" href="#配置列表" aria-hidden="true">#</a> 配置列表</h2>
<p>查看<code>src/assets/js/app/config/env/index.js</code>文件，该文件包含了系统环境服务的一些配置项</p>
<p>::: vue
.
├── <code>src</code>
│   ├── <code>assets</code>
│   │   ├── <code>js</code>
│   │   │ ├── <code>app</code>
│   │   │ │ ├── <code>config</code>
│   │   │ │ │ ├── <code>env</code>
│   │   │ │   │ │ └── index.js <em>(<strong>环境服务配置列表</strong>)</em>
│   ...
...
:::</p>
<p>在<code>anov1.2.6+</code>版本，可以通过配置该文件里的<code>openParams</code>对象，决定系统环境服务<strong>初始化</strong>需要检测的内容</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>openParams: { video: true, // 是否开启摄像头检测 audio: false, //
是否开启麦克风检测 local: true, // 是否检测本地网络 remote: false, // 是否检测
weather: false, // 是否检测天气 performance: true, // 是否检测性能 browser:
true, // 是否检测浏览器相关信息 display: true // 是否检测浏览器相关信息 }
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
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
<td style="text-align:left">level</td>
<td>大屏等级</td>
<td style="text-align:left">string</td>
<td>''</td>
</tr>
<tr>
<td style="text-align:left">browserInfo</td>
<td>浏览器相关信息</td>
<td style="text-align:left">object</td>
<td>{}</td>
</tr>
<tr>
<td style="text-align:left">fps</td>
<td>当前系统帧率</td>
<td style="text-align:left">number</td>
<td>0</td>
</tr>
<tr>
<td style="text-align:left">resolution</td>
<td>分辨率</td>
<td style="text-align:left">object</td>
<td>w: 1920, h: 1080</td>
</tr>
<tr>
<td style="text-align:left">localNetwork</td>
<td>内网状态</td>
<td style="text-align:left">object</td>
<td>{}</td>
</tr>
<tr>
<td style="text-align:left">remoteNetwork</td>
<td>外网状态</td>
<td style="text-align:left">object</td>
<td>{}</td>
</tr>
<tr>
<td style="text-align:left">scaleRatio</td>
<td>页面缩放比例</td>
<td style="text-align:left">number</td>
<td>1</td>
</tr>
<tr>
<td style="text-align:left">videoStatus</td>
<td>摄像头是否开启</td>
<td style="text-align:left">boolean</td>
<td>false</td>
</tr>
<tr>
<td style="text-align:left">audioStatus</td>
<td>麦克风是否开启</td>
<td style="text-align:left">boolean</td>
<td>false</td>
</tr>
<tr>
<td style="text-align:left">performance</td>
<td>性能</td>
<td style="text-align:left">object</td>
<td>{}</td>
</tr>
<tr>
<td style="text-align:left">resourceSize</td>
<td>加载资源大小</td>
<td style="text-align:left">object</td>
<td>{}</td>
</tr>
<tr>
<td style="text-align:left">weather</td>
<td>天气</td>
<td style="text-align:left">object</td>
<td>{}</td>
</tr>
<tr>
<td style="text-align:left">hardware</td>
<td>硬件信息</td>
<td style="text-align:left">object</td>
<td>{}</td>
</tr>
<tr>
<td style="text-align:left">memory</td>
<td>内存相关信息</td>
<td style="text-align:left">object</td>
<td>{}</td>
</tr>
<tr>
<td style="text-align:left">dom</td>
<td>页面 dom 数统计</td>
<td style="text-align:left">object</td>
<td>{}</td>
</tr>
<tr>
<td style="text-align:left">chip</td>
<td>使用本地/远程芯片</td>
<td style="text-align:left">string</td>
<td>'local'</td>
</tr>
</tbody>
</table>
<h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2>
<p><strong>onLine</strong></p>
<p>网络连接时触发</p>
<hr>
<p><strong>onOffLine</strong></p>
<p>网络断开连接时触发</p>
<hr>
<p><strong>onVideoOpen</strong></p>
<p>摄像头开启时触发</p>
<hr>
<p><strong>onVideoNotOpen</strong></p>
<p>摄像头未开启时触发</p>
<hr>
<p><strong>onAudioOpen</strong></p>
<p>麦克风开启时触发</p>
<hr>
<p><strong>onAudioNotOpen</strong></p>
<p>麦克风未开启时触发</p>
<hr>
<p><strong>weatherSuccess</strong></p>
<p>天气接口成功时触发</p>
<hr>
<p><strong>weatherError</strong></p>
<p>天气接口失败时触发</p>
<hr>
</template>
