<template><h1 id="天气" tabindex="-1"><a class="header-anchor" href="#天气" aria-hidden="true">#</a> 天气</h1>
<element :data="data"></element>
</template>

<script setup>
    let data=[{name:'质量天气',code:'AnQualityWeather'},{name:'坐标天气',code:'AnLocationWeather'}]
</script>
