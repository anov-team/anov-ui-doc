<template><h1 id="分组介绍" tabindex="-1"><a class="header-anchor" href="#分组介绍" aria-hidden="true">#</a> 分组介绍</h1>
<p>当外观面板配置项过多的时候，提供对配置项按功能分组的能力，且分组不限个数、不限层级。</p>
<p>分组属性 <strong>group</strong> 提供以下配置项</p>
<table>
<thead>
<tr>
<th>字段名</th>
<th>含义</th>
<th>类型</th>
<th>是否必须</th>
<th>默认值</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td>组名称</td>
<td>string</td>
<td>true</td>
<td></td>
<td></td>
</tr>
<tr>
<td>expand</td>
<td>是否展开</td>
<td>boolean</td>
<td>false</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>hide</td>
<td>隐藏分组</td>
<td>boolean</td>
<td>false</td>
<td>false</td>
<td>非必须</td>
</tr>
</tbody>
</table>
<h2 id="简单分组" tabindex="-1"><a class="header-anchor" href="#简单分组" aria-hidden="true">#</a> 简单分组</h2>
<p>提供<strong>基础属性</strong>、<strong>高级属性</strong>二个组，基础属性组默认展开。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">option</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">55</span><span class="token punctuation">,</span>
          <span class="token literal-property property">checkbox</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">advance</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">"right"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">getDataDes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">optionDes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">group</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"基础属性"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">expand</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//分组是否展开，默认不展开</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"数字"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"number"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">checkbox</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"复选框"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"checkbox"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">advance</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">group</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"高级属性"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"水平位置"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"position"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"h"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><blockquote>
<p>呈现效果</p>
</blockquote>
<img :src="$withBase('/images/guide/group/baseGroup.png')" alt="简单分组">
<h2 id="嵌套分组" tabindex="-1"><a class="header-anchor" href="#嵌套分组" aria-hidden="true">#</a> 嵌套分组</h2>
<p>提供<strong>基础属性</strong>组下面嵌套<strong>子分组</strong>，基础属性组、子分组默认都展开。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">option</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">55</span><span class="token punctuation">,</span>
          <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
            <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">advance</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">"right"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">getDataDes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">optionDes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">group</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"基础属性"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">expand</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//分组是否展开，默认不展开</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"数字"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"number"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">group</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"子分组"</span><span class="token punctuation">,</span>
              <span class="token literal-property property">expand</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//分组是否展开，默认不展开</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"颜色选择"</span><span class="token punctuation">,</span>
              <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"color"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"图片上传"</span><span class="token punctuation">,</span>
              <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"image"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">advance</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">group</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"高级属性"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"水平位置"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"position"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"h"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><blockquote>
<p>呈现效果</p>
</blockquote>
<img :src="$withBase('/images/guide/group/advanceGroup.png')" alt="嵌套分组">
</template>
