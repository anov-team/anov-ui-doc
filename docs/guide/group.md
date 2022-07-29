# 分组介绍

当 **外观面板** 配置项过多的时候，提供对配置项按功能分组的能力，且分组不限个数、不限层级。

分组属性 _group_ 提供以下配置项

| 字段名  | 含义         | 类型     | 是否必须 | 默认值 | 备注   |
| ------- | ------------ | -------- | -------- | ------ | ------ |
| name    | 组名称       | string   | true     |        |        |
| expand  | 是否展开     | boolean  | false    | false  |        |
| depends | 控制组的显隐 | function | false    |        | 非必须 |



## 简单分组

:chestnut: 提供基础属性、高级属性二个组，基础属性组默认展开。

```js {19-22,33-35}
export default {
  getData() {
    return {
      option: {
        base: {
          number: 55,
          checkbox: true,
        },
        advance: {
          position: "right",
        },
      },
    };
  },
  getDataDes() {
    return {
      optionDes: {
        base: {
          group: {
            name: "基础属性",
            expand: true, //分组是否展开，默认不展开
          },
          number: {
            name: "数字",
            type: "number",
          },
          checkbox: {
            name: "复选框",
            type: "checkbox",
          },
        },
        advance: {
          group: {
            name: "高级属性",
          },
          position: {
            name: "水平位置",
            type: "position",
            mode: "h",
          },
        },
      },
    };
  },
};
```

> 呈现效果

<img :src="$withBase('/images/guide/group/baseGroup.png')" alt="简单分组">

## 嵌套分组

:chestnut: 提供 **基础属性组** 下面嵌套 **子分组**，基础属性组、子分组默认都展开。

```js {22-25,31-38,50-52}
export default {
  getData() {
    return {
      option: {
        base: {
          number: 55,
          child: {
            color: "",
            image: "",
          },
        },
        advance: {
          position: "right",
        },
      },
    };
  },
  getDataDes() {
    return {
      optionDes: {
        base: {
          group: {
            name: "基础属性",
            expand: true, //分组是否展开，默认不展开
          },
          number: {
            name: "数字",
            type: "number",
          },
          child: {
            group: {
              name: "子分组",
              expand: true, // 分组是否展开，默认不展开
              depends:({rootOption,rootDes})=>{
                // 当父级number>50的时候才显示此分组
                return rootOption.base.number > 50 
              }
            },
            color: {
              name: "颜色选择",
              type: "color",
            },
            image: {
              name: "图片上传",
              type: "image",
            },
          },
        },
        advance: {
          group: {
            name: "高级属性",
          },
          position: {
            name: "水平位置",
            type: "position",
            mode: "h",
          },
        },
      },
    };
  },
};
```

> 呈现效果

<img :src="$withBase('/images/guide/group/advanceGroup.png')" alt="嵌套分组">
