# 柱状图

<script setup>
    let data=[{name:'多柱图',code:'AnChartMutiBar'},{name:'横向堆积柱状图',code:'AnChartCrossStackBar'},
    {name:'双向柱状图',code:'AnChartTwoWayBar'},{name:'混合柱状图',code:'AnChartMixBar'}
    ,{name:'横向渐变单柱图',code:'AnChartCrossGradualSingleBar'}]
</script>

<element :data="data"></element>
