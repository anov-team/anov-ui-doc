<template><h1 id="柱状图" tabindex="-1"><a class="header-anchor" href="#柱状图" aria-hidden="true">#</a> 柱状图</h1>
<element :data="data"></element>
</template>

<script setup>
    let data=[{name:'多柱图',code:'AnChartMutiBar'},{name:'横向堆积柱状图',code:'AnChartCrossStackBar'},
    {name:'双向柱状图',code:'AnChartTwoWayBar'},{name:'混合柱状图',code:'AnChartMixBar'}
    ,{name:'横向渐变单柱图',code:'AnChartCrossGradualSingleBar'}]
</script>
