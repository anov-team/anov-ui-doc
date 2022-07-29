# 其它

<script setup>
    let data=[
        {name:'词云',code:'AnChartWordcloud'},
        {name:'矩形树形',code:'AnTreemap'},
    {name:'水球图',code:'AnLiquidNormal'},
    {name:'渐变气泡图',code:'AnChartGradualBubble'},
    {name:'单系列盒须图',code:'AnChartSingleBoxplot'},
    {name:'漏斗图',code:'AnChartFunnelNormal'}]
</script>

<element :data="data"></element>