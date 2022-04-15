# 组件开发

## 组件目录结构

本节介绍开发者在开发组件时，需要遵循的文件结构。

在开发组件之前，您需要在 _src/components_ 文件夹下新建一个组件目录，在组件目录下可以添加多个组件，每个具体组件建议使用组件特性作为目录名。:chestnut: 参考 **表格** 组件的目录结构。

:::vue
.
├── `components`
│   ├── `table` _(**组件目录：表格**)_
│   │   ├── `normal` _(**常规表格**)_
│   │   │   ├── index.vue _(**视图**)_
│   │   │   ├── config.js _(**配置文件**)_
│   │   ├── `top` _(**TOP表格**)_
│   │   │   ├── index.vue
│   │   │   ├── config.js
│   │   ├── components.json _(**导出目录下所有组件**)_
:::

## 配置文件

您通过 _config.js_ 文件中的`getData`、`getDataDes`函数，来定义外观面板、数据面板、交互面板的显示。


```js {2,8}
export default {
  getData() {
    return {
      option: {},    //外观面板数据
      data: [],      //静态数据 非必须
    };
  },
  getDataDes() {
    return {
      optionDes: {},  //外观面板描述
      sourceDes: {},  //数据面板描述 非必须
      actionsDes: {}, //交互面板描述 非必须
    };
  },
};
```

::: details 样例-外观面板
```js
import Type from "anov-ui/src/utils/panel/type";

export default {
  getData() {
    return {
      option: {
        input: "测试数据",
        select: 1,
        color:""
      }
    };
  },
  getDataDes() {
    return {
      optionDes: {
        input: {
          name: "标题",
          type: Type.input,
        },
        select: {
          name: "类型",
          type: Type.select,
          options: [
            {
              value: 1,
              text: "选项一",
            },
            {
              value: 2,
              text: "选项二",
            },
          ],
        },
        color: {
          name: "颜色选择",
          type: Type.color
        },
      },
    };
  },
};

```
> 呈现效果

<img :src="$withBase('/images/guide/file/panel.png')" style="width:350px;" alt="外观面板">


::: danger 警告
外观面板配置中 `数据`与`描述` 数据结构要对应，结构错误会导致外观面板显示异常。
:::

::: details 样例-数据面板
```js
export default {
  getData() {
    return {
      //静态数据
      data: [
        { area: "北京", amount: "38558", category: "文化旅游" },
        { area: "上海", amount: "48558", category: "生态环境" },
        { area: "湖南", amount: "98558", category: "医疗健康" },
        ...
      ],
    };
  },
  getDataDes() {
    return {
      //数据面板：不支持数据映射的组件可不写sourceDes配置
      sourceDes: {
        mapFields: [   
          { field: "area", mapField: "area", des: "区域" },
          { field: "amount", mapField: "amount", des: "金额" },
          { field: "category", mapField: "category", des: "行业" },
        ],
      },
    };
  },
};
```
> 呈现效果

<img :src="$withBase('/images/guide/file/source.png')" style="width:300px;" alt="数据面板">

::: tip 提示
当描述中不提供 sourceDes 属性时，不会显示数据面板；面板配置文件中只开放`静态数据`、`映射字段描述`配置，其它都是组件库内置的一些配置行为。
:::

::: details 样例-交互面板

```js
export default {
  getData() {
    return {};
  },
  getDataDes() {
    return {
      //交互面板：不支持交互的组件可不写actionsDes配置
      actionsDes: {
        event: [
          {
            name: "click",
            des: "单击事件",
          },
          ...
        ],
        mapFields: [  //非必须
          {
            field: "index",
            mapField: "",
            des: "行索引",
          }
        ],
      },
    };
  },
};
```
> 呈现效果

<img :src="$withBase('/images/guide/file/action.png')" style="width:300px;" alt="交互面板">

::: tip 提示
当描述中不提供 actionsDes 属性时，不会显示交互面板；面板配置文件中只开放`交互行为`、`全局参数映射`配置，其它都是组件库内置的一些配置行为。
:::

## 视图文件

*index.vue*文件是组件的入口文件。以下提供了一个示例供您参考，并介绍了*index.vue*文件中的常用函数，可以根据需要去实现这些函数。

```vue {3}
<template>
  <div :style="{ ...size }" @click="click">
    <div v-for="(item index) in data" :key="index" @click="onClick(index,item)">
      ....
    </div>
  </div>
</template>

<script>
import anMixin from "anov-ui/src/components/mixin/component.js";
export default {
  name: "Table", //组件名称，采用帕斯卡(pascal)命名法
  data() {
    return {};
  },
  mixins: [anMixin],
  methods: {
    /**
     * 组件初始化
     */
    init() {},
    /**
     * 重新加载组件，会执行动画线
     */
    reload() {},
    /**
     * 刷新，保留之前的缓存内容，一般用于修改数据，不会执行动画线
     */
    refresh() {},
    /**
     * 主题改变，组件执行的操作
     */
    changeTheme() {
      console.log(this.theme); //当前主题
    },
    /**
     * 容器大小改变，组件执行的操作
     */
    resize() {},
    /**
     * 销毁
     */
    destroy() {},
    /**
     * 点击事件
     */
    onClick(index, params) {
      //第一个参数click对应的是交互描述中的 event.name
      //第二个参数中 index(行索引)对应的是交互描述中 全局参数映射 中的index，data是当前数据行的值
      this.handleEvent("click", { index: index + 1, data: params });
    },
  },
};
</script>
```

混入的*mixin/component.js*提供了组件接收的数据，以及通用函数。

::: details 组件数据
```js
export default {
  props: {
    option: {  //外观面板数据
      type: Object
    },
    width: {
      type: String,
      default: 440
    },
    height: {
      type: String,
      default: 246
    },
    theme: {   //当前主题
      type: Object
    },
    data: {},   //数据
  },
  computed: {
    size: function () {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`
      };
    }
  },
  methods:{
    /**
     * 事件处理逻辑
     * @param {*} eventName 事件名称
     * @param {*} params 参数
     */
    handleEvent(eventName, params = {}) {
      //具体实现逻辑.....
    }
  }
}
```
:::

## 导出组件

导出组件分二步，首先在组件类别目录下的 *components.json* 文件中导出组件，第二步在 *src/components.json* 文件中导出这个类别的组件。我们这样做的目的，我们不需要在入口文件 *src/index.js*  手动

* 在组件类别目录下的 *components.json* 文件中导出组件，格式如下：

```json {11,22}
{
    "name": "表格",
    "other": {
        "author": "",
        "company": "",
        "email": "",
        "remark": ""
    },
    "components": [
        {
            "name": "Table",   //与视图文件中的name对应
            "c_name": "常规表格",
            "component": "table/normal/index.vue", 
            "config": "table/normal/config.js",
            "view": {
                "width": "440px",
                "height": "246px",
                "preview": ""
            }
        },
        {
            "name": "TopTable",   //与视图文件中的name对应
            "c_name": "TOP表格",
            "component": "table/top/index.vue",
            "config": "table/top/config.js",
            "view": {
                "width": "440px",
                "height": "246px",
                "preview": ""
            }
        }
    ]
}
```


::: tip 提示
添加一个组件，包含三个要点：配置文件(config.js)、视图文件(index.vue)、导出组件(components.json)。
三要点文件命名建议参考以上规范，也可以根据用户习惯命名。
:::
