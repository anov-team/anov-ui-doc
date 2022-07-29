# 非坐标轴

包含的组件类型有：饼图、日历图、矩形形、水球图、仪表盘、词云、雷达图、气泡图、树形图等。

#### 数据格式
```json {3-4}
[
 {
    "name": "新浪微博",
    "value": 25
  },
  {
    "name": "微信公众号",
    "value": 38
  },
  {
    "name": "新华网",
    "value": 43
  },
  {
    "name": "人民网",
    "value": 65
  }
]
```

有些特殊情况，可以灵活扩展数据属性，比如雷达图添加属性max、s，树形图添加属性children。
```json {3-6}
[
  {
    "name": "销售",
    "value": 4300,
    "max": 6500,
    "s": "预算分配"
  },
  {
    "name": "销售",
    "value": 4300,
    "max": 6500,
    "s": "实际开销"
  },
]
```
```json
{
  "name": "a",
  "children": [
    {
      "name": "a-a",
      "children": [
        {
          "name": "a-a-a",
          "value": 353
        }
      ]
    },
    {
      "name": "a-b",
      "children": [
        {
          "name": "a-b-a",
          "value": 17010
        }
      ]
    }
  ]
}
```

#### 样式面板

包含的组如下图，具体各组包含的属性可参考代码样例。

<img :src="$withBase('/images/guide/standard/noAxisPanel.png')" style="width:300px;margin-top:5px;border-radius:5px;" alt="样式面板">