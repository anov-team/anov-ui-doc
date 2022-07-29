<template>
  <component :is="name" v-bind="{ ...data }" />
</template>

<script setup>
import {
  OptionPanel,
  SourcePanel,
  ActionsPanel,
} from "anov-ui/lib/anov-ui-panel.common.js";
import { ref, computed } from "vue";
let props = defineProps({
  imgs: [],
  path: "",
});
const { imgs, path } = props;

let name = computed(() => {
  return OptionPanel;
});

let data = computed(() => {
  return {
    cid: 1,
    option: {
      input: "测试数据",
      select: 1,
      color: "",
    },
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
        type: Type.color,
      },
    },
    theme: {
      name: "科技蓝",
      color: "#115FEA",
      background: "#05255F",
      pageBackground: "#03091A",
      text: "#F0F0F0",
      default: true,
      groups: [
        "#115FEA",
        "#10EBE3",
        "#10A9EB",
        "#EB9C10",
        "#2E10EB",
        "#9B10EB",
      ],
    },
  };
});
</script>

<style scoped lang="scss">
.list {
  display: flex;
  height: 570px;
  background: #142537;
  .item {
    flex: 1 1 auto;
    border: 0;
    border-right: 2px solid #fff;
    background-size: 100% 100%;
    cursor: pointer;
    transition: all 0.5s;
    &.active {
      width: 300px;
      flex: 0 0 auto;
    }
  }
}
</style>
