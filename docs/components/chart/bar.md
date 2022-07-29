# 柱状图

<script setup>
    let data=[{name:'渐变单柱图',code:'AnChartGradualSingleBar'},
    {name:'堆积柱状图',code:'AnChartStackBar'},
    {name:'3D单柱图',code:'AnChartSingleBar3D'},
    {name:'渐变条形图',code:'AnChartCrossGradualMutiBar'},
    {name:'双向条形图',code:'AnChartTwoWayBar'},
    {name:'堆叠圆环柱形图',code:'AnChartRingStackBar'}
    ,{name:'堆叠圆环扇形图',code:'AnChartFanStackBar'}]
</script>

<element :data="data"></element>
