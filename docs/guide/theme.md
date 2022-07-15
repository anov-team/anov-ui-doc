# 主题应用

## 主题数据结构

组件内置多套主题风格，如科技蓝、赛博朋克、黑金、黑冰、青橙等，用户也可以扩展主题风格。

```js{2}
  {
    name: "科技蓝",
    color: "#115FEA",
    background: "#05255F",
    pageBackground: "#03091A",
    text: "#F0F0F0",
    groups: ["#115FEA", "#10EBE3", "#10A9EB", "#EB9C10", "#2E10EB", "#9B10EB"],
  },
```

## 单色选择器

```js
{
    type:'color',
    theme:{
        key:'color',
        opacity: 1
    }
}
```

- 主题配置中的 _key_ 可以是主题数据结构中的任何属性名，如：color、background、text 等，也可以取 groups 数组中的某个值，如：{key:'groups.0'}(groups 中索引为 0 的项)、{key:'groups.3'}(groups 中索引为 3 的项)。
- 主题配置中的透明度 _opacity_ 可以设置 0-1 的值，默认值为 1。

## 背景色选择器

1. 单色配置方案

```js
{
    type:'bgcolor',
    theme:{
        key:'color',
        opacity: 1
    }
}
```

- 主题配置中的 _key_ 可以是主题数据结构中的任何属性名，如：color、background、text 等，也可以取 groups 数组中的某个值，如：{key:'groups.0'}(groups 中索引为 0 的项)、{key:'groups.3'}(groups 中索引为 3 的项)。
- 主题配置中的透明度 _opacity_ 可以设置 0-1 的值，默认值为 1。

2. 渐变色配置方案

```js
{
    type: 'bgcolor',
    theme: {
        type: "linear",
        degree: 90,
        points: [
            { key: "color", opacity: 0.4 },
            { key: "groups.3", opacity: 0.4 },
            ....
        ],
    },
}
```

- 主题配置中的渐变方式 _type_ 可以设置 linear：线性渐变(默认) radial：径向渐变。
- 主题配置中的旋转角度 _degree_ 可以设置 0-360 角度的值，默认值为 0。
- 主题配置中的颜色点 _points_ 可以设置一组颜色值，具体组中的值同单色主题配置方案中的 [theme](#背景色选择器) 结构。

## 写在最后

::: tip 提示
如果某个属性配置了主题描述，属性值可以不设置颜色值(值为 null 或“”)，程序会根据配置的主题描述生成默认值。
:::
