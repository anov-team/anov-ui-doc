# 组件主题

组件支持多种主题风格，如科技蓝、赛博朋克、黑金、黑冰、青橙等，用户可以根据不同场景一键切换主题，应对不同用户的喜好，也能通过切换主题缓解视觉疲劳。


<script setup>
    let imgs = ["1.png","2.png","3.png","4.png","5.png"]
</script>

<theme :imgs="imgs" :path = "$withBase('/images/theme/')"></theme>
