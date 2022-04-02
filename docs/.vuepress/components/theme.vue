<template>
  <div class="list">
    <div
      class="item"
      v-for="(item, index) in imgs"
      :style="{
        background: `url(${path}${item}) no-repeat`,
      }"
      :class="[index == activeIndex ? 'active' : '']"
      @mouseover="mouseover(index)"
    ></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let props = defineProps({
  imgs: [],
  path: "",
});
const { imgs, path } = props;

const activeIndex = ref(0);
let mouseover = (index) => {
  activeIndex.value = index;
};
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