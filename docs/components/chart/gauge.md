# 仪表盘

<script setup>
    let data=[
    {name:'基础仪表盘',code:'AnChartGaugeNormal'},
    {name:'渐变指针仪表盘',code:'AnChartGaugePointer'},
    {name:'渐变图标仪表盘',code:'AnChartGaugeImage'}]
</script>

<element :data="data"></element>
