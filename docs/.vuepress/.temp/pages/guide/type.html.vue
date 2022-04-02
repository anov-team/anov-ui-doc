<template><h1 id="类型介绍" tabindex="-1"><a class="header-anchor" href="#类型介绍" aria-hidden="true">#</a> 类型介绍</h1>
<p>您可以通过 <em>config.js</em> 外观描述中定义的 type 字段，来定义控件的类型和配置。</p>
<h2 id="类型概览" tabindex="-1"><a class="header-anchor" href="#类型概览" aria-hidden="true">#</a> 类型概览</h2>
<p>type 字段支持以下类型：</p>
<table>
<thead>
<tr>
<th>类别</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>基础类型</td>
<td><a href="#number">number</a></td>
<td>数值输入框，可以定制步长、最大值和最小值、后缀。</td>
</tr>
<tr>
<td></td>
<td><a href="#input">input</a></td>
<td>文本输入框，支持单行、多行模式。</td>
</tr>
<tr>
<td></td>
<td><a href="#select">select</a></td>
<td>选择器，支持自定义下拉选项。</td>
</tr>
<tr>
<td></td>
<td><a href="#slider">slider</a></td>
<td>滑动条，可以定制步长、最大值和最小值、后缀。</td>
</tr>
<tr>
<td></td>
<td><a href="#switch">switch</a></td>
<td>开关，支持是否展示文字状态。</td>
</tr>
<tr>
<td></td>
<td><a href="#position">position</a></td>
<td>可以控制元素的水平或垂直位置。</td>
</tr>
<tr>
<td></td>
<td><a href="#color">color</a></td>
<td>颜色选择器，支持主题定义。</td>
</tr>
<tr>
<td></td>
<td><a href="#bgcolor">bgcolor</a></td>
<td>颜色选择器，支持透明、纯色、渐变色、主题定义。</td>
</tr>
<tr>
<td></td>
<td><a href="#radiogroup">radioGroup</a></td>
<td>一组单选框</td>
</tr>
<tr>
<td></td>
<td><a href="#checkboxgroup">checkboxGroup</a></td>
<td>一组复选框</td>
</tr>
<tr>
<td></td>
<td><a href="#checkbox">checkbox</a></td>
<td>复选框，支持是否展示文字状态。</td>
</tr>
<tr>
<td></td>
<td><a href="#image">image</a></td>
<td>图片上传</td>
</tr>
<tr>
<td></td>
<td><a href="#media">media</a></td>
<td>媒体资源上传</td>
</tr>
<tr>
<td></td>
<td><a href="#unit">unit</a></td>
<td>单位，支持自定义单位项。</td>
</tr>
<tr>
<td></td>
<td><a href="#icon">icon</a></td>
<td>图标选择器</td>
</tr>
<tr>
<td>组合类型</td>
<td><a href="#radius">radius</a></td>
<td>圆角，由四个输入框组成，可定制左上、右上、右下、左下四个圆角值。</td>
</tr>
<tr>
<td></td>
<td><a href="#margin">margin</a></td>
<td>外边框，由四个输入框组成，可定制上右下左四个外边距值。</td>
</tr>
<tr>
<td></td>
<td><a href="#padding">padding</a></td>
<td>内边框，由四个输入框组成，可定制上右下左四个内边距值。</td>
</tr>
<tr>
<td></td>
<td><a href="#padding">size</a></td>
<td>定义容器尺寸</td>
</tr>
<tr>
<td></td>
<td><a href="#textstyle">textStyle</a></td>
<td>文本样式设置，可以设置字体大小、颜色、粗细、是否斜体、对齐方式。</td>
</tr>
<tr>
<td>自定义类型</td>
<td><a href="#code">code</a></td>
<td>自定义内容，返回一个 render 函数。</td>
</tr>
<tr>
<td></td>
<td><a href="#slot">slot</a></td>
<td>预留插槽</td>
</tr>
</tbody>
</table>
<h2 id="number" tabindex="-1"><a class="header-anchor" href="#number" aria-hidden="true">#</a> number</h2>
<guide-type-detail :config="baseType.number"  :src="$withBase(baseType.number.img)"/>
<h2 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> input</h2>
<guide-type-detail :config="baseType.input"  :src="$withBase(baseType.input.img)"/>
<h2 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select</h2>
<guide-type-detail :config="baseType.select"  :src="$withBase(baseType.select.img)"/>
<h2 id="slider" tabindex="-1"><a class="header-anchor" href="#slider" aria-hidden="true">#</a> slider</h2>
<guide-type-detail :config="baseType.slider"  :src="$withBase(baseType.slider.img)"/>
<h2 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> switch</h2>
<guide-type-detail :config="baseType.switch1"  :src="$withBase(baseType.switch1.img)"/>
<h2 id="position" tabindex="-1"><a class="header-anchor" href="#position" aria-hidden="true">#</a> position</h2>
<guide-type-detail :config="baseType.position"  :src="$withBase(baseType.position.img)"/>
<h2 id="color" tabindex="-1"><a class="header-anchor" href="#color" aria-hidden="true">#</a> color</h2>
<guide-type-detail :config="baseType.color"  :src="$withBase(baseType.color.img)"/>
<h2 id="bgcolor" tabindex="-1"><a class="header-anchor" href="#bgcolor" aria-hidden="true">#</a> bgcolor</h2>
<guide-type-detail :config="baseType.bgcolor"  :src="$withBase(baseType.bgcolor.img)"/>
<h2 id="radiogroup" tabindex="-1"><a class="header-anchor" href="#radiogroup" aria-hidden="true">#</a> radioGroup</h2>
<guide-type-detail :config="baseType.radioGroup"  :src="$withBase(baseType.radioGroup.img)"/>
<h2 id="checkboxgroup" tabindex="-1"><a class="header-anchor" href="#checkboxgroup" aria-hidden="true">#</a> checkboxGroup</h2>
<guide-type-detail :config="baseType.checkboxGroup"  :src="$withBase(baseType.checkboxGroup.img)"/>
<h2 id="checkbox" tabindex="-1"><a class="header-anchor" href="#checkbox" aria-hidden="true">#</a> checkbox</h2>
<guide-type-detail :config="baseType.checkbox"  :src="$withBase(baseType.checkbox.img)"/>
<h2 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h2>
<guide-type-detail :config="baseType.image"  :src="$withBase(baseType.image.img)"/>
<h2 id="media" tabindex="-1"><a class="header-anchor" href="#media" aria-hidden="true">#</a> media</h2>
<guide-type-detail :config="baseType.media"  :src="$withBase(baseType.media.img)"/>
<h2 id="unit" tabindex="-1"><a class="header-anchor" href="#unit" aria-hidden="true">#</a> unit</h2>
<guide-type-detail :config="baseType.unit"  :src="$withBase(baseType.unit.img)"/>
<h2 id="icon" tabindex="-1"><a class="header-anchor" href="#icon" aria-hidden="true">#</a> icon</h2>
<guide-type-detail :config="baseType.icon"  :src="$withBase(baseType.icon.img)"/>
<h2 id="radius" tabindex="-1"><a class="header-anchor" href="#radius" aria-hidden="true">#</a> radius</h2>
<guide-type-detail :config="groupType.radius"  :src="$withBase(groupType.radius.img)"/>
<h2 id="margin" tabindex="-1"><a class="header-anchor" href="#margin" aria-hidden="true">#</a> margin</h2>
<guide-type-detail :config="groupType.margin"  :src="$withBase(groupType.margin.img)"/>
<h2 id="padding" tabindex="-1"><a class="header-anchor" href="#padding" aria-hidden="true">#</a> padding</h2>
<guide-type-detail :config="groupType.padding"  :src="$withBase(groupType.margin.img)"/>
<h2 id="size" tabindex="-1"><a class="header-anchor" href="#size" aria-hidden="true">#</a> size</h2>
<guide-type-detail :config="groupType.size"  :src="$withBase(groupType.size.img)"/>
<h2 id="textstyle" tabindex="-1"><a class="header-anchor" href="#textstyle" aria-hidden="true">#</a> textStyle</h2>
<guide-type-detail :config="groupType.textStyle"  :src="$withBase(groupType.textStyle.img)"/>
<h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> code</h2>
<guide-type-detail :config="customType.code"  :src="$withBase(customType.code.img)"/>
</template>

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
      { name: 'row', disName: '显示行数', type: 'number', required: false, defaultValue: '1', remark: '' },
    ],
    value: '',
    img: `${imgBaseUrl}input.png`,
    code: {
      name: "输入框",
      type: "input",
      row: 3
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
  }, position: {
    description: "可以控制元素的水平或垂直位置。",
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
        description:"theme对象属性",
        files:[
          { name: 'key', disName: '主题字段', type: 'string', required: true, defaultValue: '', remark: '主题字段，具体参数主题模块帮助。'},
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
        description:"theme对象属性",
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
      ...baseFiles
    ],
    value: '',
    img: `${imgBaseUrl}media.png`,
    code: {
      name: "媒体",
      type: "media",
    }
  },
  unit: {
    description: "单位，支持自定义单位项。",
    files: [
      ...baseFiles,
      { name: 'options', disName: '选项列表', type: 'Array', required: true, defaultValue: '', remark: '每一项都包含text和value，text表示显示文本，value表示文本的值。' }
    ],
    value: {
      value: 50,
      unit: "px"
    },
    img: `${imgBaseUrl}unit.png`,
    code: {
      name: "单位",
      type: "unit",
      options: [
        {
          "value": 1,
          "text": "%"
        },
        {
          "value": 2,
          "text": "px"
        }
      ]
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
    description: "自定义内容，返回一个 render 函数。",
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
