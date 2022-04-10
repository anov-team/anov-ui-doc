<template>
  <p>{{ config.description }}</p>
  <span class="title">配置项说明：</span>
  <table>
    <tr>
      <td>字段名</td>
      <td style="min-width:80px">含义</td>
      <td>类型</td>
      <td>是否必须</td>
      <td>默认值</td>
      <td>备注</td>
    </tr>
    <template v-for="(item, index) in config.files" :key="index">
      <tr>
        <td>{{ item.name }}</td>
        <td>{{ item.disName }}</td>
        <td>{{ item.type }}</td>
        <td>{{ item.required }}</td>
        <td>{{ item.defaultValue }}</td>
        <td>{{ item.remark }}</td>
      </tr>
      <template v-if="item.children">
        <tr>
          <td colspan="6" style="font-weight:bold;">{{ item.children.description }}</td>
        </tr>
        <tr v-for="(citem, cindex) in item.children.files" :key="cindex">
          <td>{{ citem.name }}</td>
          <td>{{ citem.disName }}</td>
          <td>{{ citem.type }}</td>
          <td>{{ citem.required }}</td>
          <td>{{ citem.defaultValue }}</td>
          <td>{{ citem.remark }}</td>
        </tr>
      </template>
    </template>
  </table>
  <span class="title">配置示例：</span>
  <img :src="src" />
  <pre class="language-javascript"><code>{{ config.code }}</code></pre>
  <span class="title">值说明：</span>
  <pre v-if="config.value" class="language-javascript"><code>{{ config.value }}</code></pre>
</template>

<script setup>
const props = defineProps({
  config: {},
  src: "",
});
const { config, src } = props;
</script>

<style scoped lang="scss">
pre {
  margin: 0 !important;
}
img {
  border-radius: 5px;
}
.title {
  padding-left: 7px;
  font-weight: 600;
  display: block;
  line-height: 1.7;
  margin: 1em 0;
  position: relative;
  &::before {
    content: " ";
    position: absolute;
    border-left: 3px solid #3eaf7c;
    top: 6px;
    left: 0;
    height: 16px;
  }
}
</style>
