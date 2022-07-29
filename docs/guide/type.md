# 类型介绍

您可以通过 _config.js_ 外观描述中定义的 type 字段，来定义控件的类型和配置。

## 类型概览

type 字段支持以下类型：

| 类别       | 类型                            | 说明                                                             |
| ---------- | ------------------------------- | ---------------------------------------------------------------- |
| 基础类型   | [number](#number)               | 数值输入框，可以定制步长、最大值和最小值、后缀。                 |
|            | [input](#input)                 | 文本输入框，支持单行、多行模式。                                 |
|            | [select](#select)               | 选择器，支持自定义下拉选项。                                     |
|            | [slider](#slider)               | 滑动条，可以定制步长、最大值和最小值、后缀。                     |
|            | [switch](#switch)               | 开关，支持是否展示文字状态。                                     |
|            | [align](#align)                 | 可以控制元素水平或垂直位置的对齐方式。                           |
|            | [position](#position)           | 可以控制元素的水平、垂直位置(主要用于控制图表图例的位置)。       |
|            | [color](#color)                 | 颜色选择器，支持主题定义。                                       |
|            | [bgcolor](#bgcolor)             | 颜色选择器，支持透明、纯色、渐变色、主题定义。                   |
|            | [radioGroup](#radiogroup)       | 一组单选框                                                       |
|            | [checkboxGroup](#checkboxgroup) | 一组复选框                                                       |
|            | [checkbox](#checkbox)           | 复选框，支持是否展示文字状态。                                   |
|            | [image](#image)                 | 图片上传                                                         |
|            | [media](#media)                 | 媒体资源上传                                                     |
|            | [upload](#upload)               | 资源上传                                                     |
|            | [unit](#unit)                   | 单位，支持自定义单位项。                                         |
|            | [icon](#icon)                   | 图标选择器                                                       |
|            | [code](#code)                   | 自定义内容，返回一个 render 函数。                               |
| 组合类型   | [radius](#radius)               | 圆角，由四个输入框组成，可定制左上、右上、右下、左下四个圆角值。 |
|            | [margin](#margin)               | 外边框，由四个输入框组成，可定制上右下左四个外边距值。           |
|            | [padding](#padding)             | 内边框，由四个输入框组成，可定制上右下左四个内边距值。           |
|            | [size](#padding)                | 定义容器尺寸                                                     |
|            | [textStyle](#textstyle)         | 文本样式设置，可以设置字体大小、颜色、粗细、是否斜体、对齐方式。 |
| 自定义类型 | slot                            | 预留插槽                                                         |

<script setup>

let baseFiles=[{name:'name',disName:'名称',type:'string',required:false,defaultValue:'',remark:''},
    {name:'type',disName:'类型',type:'string',required:true,defaultValue:'',remark:''}];
let numFiles=[ {name:'max',disName:'最大值',type:'number',required:false,defaultValue:'',remark:''},
    {name:'min',disName:'最小值',type:'number',required:false,defaultValue:'',remark:''},
    {name:'step',disName:'步长',type:'number',required:false,defaultValue:'',remark:''},
    {name:'unit',disName:'后缀',type:'string',required:false,defaultValue:'',remark:''}];
let imgBaseUrl = '/images/guide/type/'


let baseType = {
  number: {
    description: "数值输入框，可以定制步长、最大值和最小值、后缀。",
    files: [
      ...baseFiles,
      ...numFiles
    ],
    value: '',
    img: `${imgBaseUrl}number.png`,
    code: {
      name: "数字框",
      type: "number",
      unit: "px",
    }
  },
  input: {
    description: "文本输入框，支持单行、多行模式。",
    files: [
      ...baseFiles,
      { name: 'rows', disName: '显示行数', type: 'number', required: false, defaultValue: '1', remark: '' },
    ],
    value: '',
    img: `${imgBaseUrl}input.png`,
    code: {
      name: "输入框",
      type: "input",
      rows: 3
    }
  },
  select: {
    description: "选择器，支持自定义下拉选项。",
    files: [
      ...baseFiles,
      { name: 'options', disName: '选项列表', type: 'Array', required: true, defaultValue: '', remark: '每一项都包含text和value，text表示显示文本，value表示文本的值。' },
    ],
    value: '',
    img: `${imgBaseUrl}select.png`,
    code: {
      name: "下拉框",
      type: "select",
      "options": [
        {
          "value": 1,
          "text": "选项一"
        },
        {
          "value": 2,
          "text": "选项二"
        }
      ]
    }
  },
  slider: {
    description: "滑动条，可以定制步长、最大值和最小值、后缀。",
    files: [
      ...baseFiles,
      ...numFiles
    ],
    value: '',
    img: `${imgBaseUrl}slider.png`,
    code: {
      name: "滑动输入条",
      type: "slider",
      min: 0,
      max: 50,
      step: 1,
      unit: "%"
    }
  },
  switch1: {
    description: "开关，支持是否展示文字状态。",
    files: [
      ...baseFiles
    ],
    value: '',
    img: `${imgBaseUrl}switch.png`,
    code: {
      name: "开关",
      type: "switch"
    }
  }, 
  align: {
    description: "可以控制元素水平或垂直位置的对齐方式。",
    files: [
      ...baseFiles,
       { name: 'mode', disName: '模式', type: 'string', required: false, defaultValue: 'h', remark: 'h：水平对齐方式，v：垂直对齐方式。' }
    ],
    value: 'left',
    img: `${imgBaseUrl}align.png`,
    code: {
      name: "元素位置",
      type: "align",
      mode: 'h'
    }
  },position: {
    description: "可以控制元素的水平、垂直位置(主要用于控制图表图例的位置)。",
    files: [
      ...baseFiles
    ],
    value: {
      left: "center",
      top: "top"
    },
    img: `${imgBaseUrl}position.png`,
    code: {
      name: "元素位置",
      type: "position"
    }
  },
  color: {
    description: "颜色选择器，支持主题定义。",
    files: [
      ...baseFiles,
      { name: 'theme', disName: '主题配置', type: 'object', required: false, defaultValue: '', remark: '根据 theme 配置，初始化颜色默认值。',
      children:{
        description:"theme对象属性，具体参数主题应用模块",
        files:[
          { name: 'key', disName: '主题字段', type: 'string', required: true, defaultValue: '', remark: '主题字段。'},
          { name: 'opacity', disName: '透明度', type: 'number', required: false, defaultValue: '1', remark: '颜色透明度，0-1的值。'}
        ]
      }}  
    ],
    value: '',
    img: `${imgBaseUrl}color.png`,
    code: {
      name: "颜色选择",
      type: "color",
      theme: {
        key: "color",
        opacity: 1
      }
    }
  },
  bgcolor: {
    description: "颜色选择器，支持透明、纯色、渐变色、主题定义。",
    files: [
      ...baseFiles,
      { name: 'theme', disName: '主题配置', type: 'object', required: false, defaultValue: '', remark: '根据 theme 配置，初始化颜色默认值。',
      children:{
        description:"theme对象属性，具体参数主题应用模块",
        files:[
          { name: 'type', disName: '类型', type: 'string', required: false, defaultValue: 'linear', remark: 'linear：线性渐变，radial：径向渐变'},
          { name: 'degree', disName: '旋转角度', type: 'number', required: false, defaultValue: '0', remark: '旋转角度'},
          { name: 'points', disName: '一组点集合', type: 'Array', required: false, defaultValue: '', remark: '每一项都包含key和opacity，key表示主题字段，opacity表示透明度。'}
        ]
      }}
    ],
    value: {
      style: "linear-gradient(90deg,rgba(17,95,234,0.3) 0%,rgba(17,95,234,0.1) 100%"
    },
    img: `${imgBaseUrl}bgcolor.png`,
    code: {
      name: "颜色选择",
      type: "bgcolor",
      theme: {
        type: "linear",
        degree: 90,
        points: [
          {
            key: "color",
            opacity: 0.3
          },
          {
            key: "color",
            opacity: 0.1
          }
        ]
      }
    }
  },
  radioGroup: {
    description: "一组单选框。",
    files: [
      ...baseFiles,
      { name: 'options', disName: '选项列表', type: 'Array', required: true, defaultValue: '', remark: '每一项都包含text和value，text表示显示文本，value表示文本的值。' }
    ],
    value: '',
    img: `${imgBaseUrl}radioGroup.png`,
    code: {
      name: "单选项",
      type: "radioGroup",
      options: [
        {
          "value": 1,
          "text": "选项一"
        },
        {
          "value": 2,
          "text": "选项二"
        }
      ]
    }
  },
  checkboxGroup: {
    description: "一组复选框。",
    files: [
      ...baseFiles,
      { name: 'options', disName: '选项列表', type: 'Array', required: true, defaultValue: '', remark: '每一项都包含text、value和key。text表示显示文本，value表示文本的值，key表示字段名称。' }
    ],
    value: {
      field1: true,
      field2: true
    },
    img: `${imgBaseUrl}checkboxGroup.png`,
    code: {
      name: "复选框",
      type: "checkboxGroup",
      options: [
        {
          value: 1,
          text: "选项一",
          key: "field1"
        },
        {
          value: 2,
          text: "选项二",
          key: "field2"
        }
      ],
    }
  },
  checkbox: {
    description: "复选框，支持是否展示文字状态。",
    files: [
      ...baseFiles,
      { name: 'text', disName: '文本', type: 'string', required: false, defaultValue: '', remark: '' }
    ],
    value: 'true|false',
    img: `${imgBaseUrl}checkbox.png`,
    code: {
      type: "checkbox",
      text: "控制隐藏显示"
    }
  },
  image: {
    description: "图片上传",
    files: [
      ...baseFiles
      ],
    value: '',
    img: `${imgBaseUrl}image.png`,
    code: {
      name: "图片",
      type: "image",
    }
  },
  media: {
    description: "媒体资源上传",
    files: [
      ...baseFiles,
      { name: 'text', disName: '按钮文字', type: 'string', required: false, defaultValue: '文件上传', remark: ''},
      { name: 'accept', disName: '接受上传的文件类型', type: 'string', required: false, defaultValue: 'video/*', remark: ''}
    ],
    value: '',
    img: `${imgBaseUrl}media.png`,
    code: {
      name: "媒体",
      type: "media",
    }
  },
  upload: {
    description: "资源上传",
    files: [
      ...baseFiles,
      { name: 'text', disName: '按钮文字', type: 'string', required: false, defaultValue: '文件上传', remark: ''},
      { name: 'accept', disName: '文件类型', type: 'string', required: false, defaultValue: '', remark: '接受上传的文件类型'},
      { name: 'multiple', disName: '多文件上传', type: 'boolean', required: false, defaultValue: false, remark: '是否支持多文件上传'}
    ],
    value: '',
    img: `${imgBaseUrl}upload.png`,
    code: {
      name: "文件上传",
      type: "upload",
    }
  },
  unit: {
    description: "单位，支持自定义单位项。",
    files: [
      ...baseFiles,
      { name: 'options', disName: '选项列表', type: 'Array', required: true, defaultValue: '[{value:"%",text:"%"},{value:"px",text:"px"}]', remark: '每一项都包含text和value，text表示显示文本，value表示文本的值。' }
    ],
    value: {
      value: 50,
      unit: "px"
    },
    img: `${imgBaseUrl}unit.png`,
    code: {
      name: "单位",
      type: "unit"
    }
  },
  icon: {
    description: "图标选择器",
    files: [
      ...baseFiles
    ],
    value: {
      name: "收藏",
      value: "bangong_shoucang"
    },
    img: `${imgBaseUrl}icon.png`,
    code: {
      name: "图标选择",
      type: "icon"
    }
  }
}

let groupType = {
  radius: {
    description: "圆角，由四个输入框组成，可定制左上、右上、右下、左下四个圆角值。",
    files: [
      ...baseFiles
    ],
    value: [
      {
        "val": 5,
        "unit": "px"
      },
      {
        "val": 5,
        "unit": "px"
      },
      {
        "val": 5,
        "unit": "px"
      },
      {
        "val": 5,
        "unit": "px"
      }
    ],
    img: `${imgBaseUrl}radius.png`,
    code: {
      name: "圆角",
      type: "radius"
    }
  },
  margin: {
    description: "外边框，由四个输入框组成，可定制上右下左四个外边距值。",
    files: [
      ...baseFiles
    ],
    value: [
      {
        "val": 0,
        "unit": "px"
      },
      {
        "val": 0,
        "unit": "px"
      },
      {
        "val": 0,
        "unit": "px"
      },
      {
        "val": 0,
        "unit": "px"
      }
    ],
    img: `${imgBaseUrl}margin.png`,
    code: {
      name: "边距",
      type: "margin"
    }
  },
  padding: {
    description: "内边框，由四个输入框组成，可定制上右下左四个内边距值。",
    files: [
      ...baseFiles
    ],
    value: [
      {
        "val": 0,
        "unit": "px"
      },
      {
        "val": 0,
        "unit": "px"
      },
      {
        "val": 0,
        "unit": "px"
      },
      {
        "val": 0,
        "unit": "px"
      }
    ],
    img: `${imgBaseUrl}margin.png`,
    code: {
      name: "内边框",
      type: "padding"
    }
  },
  size: {
    description: "定义容器尺寸",
    files: [
      ...baseFiles
    ],
    value: [20, 20],
    img: `${imgBaseUrl}size.png`,
    code: {
      name: "尺寸",
      type: "size"
    }
  },
  textStyle: {
    description: "文本样式设置，可以设置字体大小、颜色、粗细、是否斜体、对齐方式。",
    files: [
      ...baseFiles
    ],
    value: {
      fontFamily: "Microsoft YaHei",
      fontSize: 14,
      color: "#000000",
      textAlign: "left",
      fontWeight: "normal",
      fontStyle: "normal"
    },
    img: `${imgBaseUrl}textStyle.png`,
    code: {
      name: "文本样式",
      type: "textStyle"
    }
  }
}

let customType={
  code:{
    description: "自定义内容，返回值为一个标准的 render 函数。",
    files: [
      ...baseFiles
    ],
    value:{
      jscode: "return h(\"div\",\"测试数据\")"
    },
    img: `${imgBaseUrl}code.png`,
    code: {
      name: "自定义内容",
      type: "code"
    }
  }
}

</script>

## number

<guide-type-detail :config="baseType.number"  :src="$withBase(baseType.number.img)"/>

## input

<guide-type-detail :config="baseType.input"  :src="$withBase(baseType.input.img)"/>

## select

<guide-type-detail :config="baseType.select"  :src="$withBase(baseType.select.img)"/>

## slider

<guide-type-detail :config="baseType.slider"  :src="$withBase(baseType.slider.img)"/>

## switch

<guide-type-detail :config="baseType.switch1"  :src="$withBase(baseType.switch1.img)"/>

## align

<guide-type-detail :config="baseType.align"  :src="$withBase(baseType.align.img)"/>

## position

<guide-type-detail :config="baseType.position"  :src="$withBase(baseType.position.img)"/>

## color

<guide-type-detail :config="baseType.color"  :src="$withBase(baseType.color.img)"/>

## bgcolor

<guide-type-detail :config="baseType.bgcolor"  :src="$withBase(baseType.bgcolor.img)"/>

## radioGroup

<guide-type-detail :config="baseType.radioGroup"  :src="$withBase(baseType.radioGroup.img)"/>

## checkboxGroup

<guide-type-detail :config="baseType.checkboxGroup"  :src="$withBase(baseType.checkboxGroup.img)"/>

## checkbox

<guide-type-detail :config="baseType.checkbox"  :src="$withBase(baseType.checkbox.img)"/>

## image

<guide-type-detail :config="baseType.image"  :src="$withBase(baseType.image.img)"/>

## media

<guide-type-detail :config="baseType.media"  :src="$withBase(baseType.media.img)"/>

## upload

<guide-type-detail :config="baseType.upload"  :src="$withBase(baseType.upload.img)"/>

## unit

<guide-type-detail :config="baseType.unit"  :src="$withBase(baseType.unit.img)"/>

## icon

<guide-type-detail :config="baseType.icon"  :src="$withBase(baseType.icon.img)"/>

## code

<guide-type-detail :config="customType.code"  :src="$withBase(customType.code.img)"/>

## radius

<guide-type-detail :config="groupType.radius"  :src="$withBase(groupType.radius.img)"/>

## margin

<guide-type-detail :config="groupType.margin"  :src="$withBase(groupType.margin.img)"/>

## padding

<guide-type-detail :config="groupType.padding"  :src="$withBase(groupType.margin.img)"/>

## size

<guide-type-detail :config="groupType.size"  :src="$withBase(groupType.size.img)"/>

## textStyle

<guide-type-detail :config="groupType.textStyle"  :src="$withBase(groupType.textStyle.img)"/>
