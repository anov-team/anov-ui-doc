<template><h1 id="饼图" tabindex="-1"><a class="header-anchor" href="#饼图" aria-hidden="true">#</a> 饼图</h1>
<element :data="data"></element>
</template>

<script setup>
    let data=[{name:'基础饼图',code:'AnChartPieBase'},{name:'3/4多层环形图',code:'AnChartPieThreeQuarterMultiLayer'},
    {name:'极坐标系多系列柱图',code:'AnChartBarPolarMultiSeries'},{name:'带label极坐标系玫瑰图',code:'AnChartRoseAngleAxisLabel'}
    ,{name:'单层环形图',code:'AnChartPieSingleLayer'}]
</script>
