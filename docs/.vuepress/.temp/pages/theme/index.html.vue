<template><h1 id="组件主题" tabindex="-1"><a class="header-anchor" href="#组件主题" aria-hidden="true">#</a> 组件主题</h1>
<p>组件支持多种主题风格，如科技蓝、赛博朋克、黑金、黑冰、青橙等，用户可以根据不同场景一键切换主题，应对不同用户的喜好，也能通过切换主题缓解视觉疲劳。</p>
<theme :imgs="imgs" :path = "$withBase('/images/theme/')"></theme>
</template>

<script setup>
    let imgs = ["1.png","2.png","3.png","4.png","5.png"]
</script>
