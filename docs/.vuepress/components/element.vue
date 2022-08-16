<template>
  <div v-for="(item, index) in data" :key="item.code" class="comp">
    <div v-if="!item.load" class="loading">
      <div :id="`eleCon${index}`" class="icon"></div>
      <span class="word">加载中...</span>
    </div>
    <p class="title">{{ item.name }}</p>
    <iframe
      frameborder="0"
      width="100%"
      height="500px"
      :src="basePath + item.code"
      @load="load(item)"
    ></iframe>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Lottie from "lottie-web";
let props = defineProps({
  data: [],
});
let basePath = "https://lfourg.github.io/anov-ui-pro/#/docs/";
let data = ref(props.data);

function load(item) {
  item.load = true;
}

onMounted(() => {
  data.value.forEach((item, index) => {
    Lottie.loadAnimation({
      container: document.getElementById("eleCon" + index), // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/anov-ui-doc/line3.json", // the path to the animation json
    });
  });
});
</script>

<style scoped lang="scss">
@keyframes fontChange {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(0.6);
  }
  100% {
    transform: scale(0.8);
  }
}
.comp {
  position: relative;
  .loading {
    .icon {
      height: 40px;
      width: 50%;
      top: 50%;
      left: 25%;
      margin-top: -20px;
      position: absolute;
    }
    .word {
      font-size: 12px;
      color: #fff;
      line-height: 16px;
      bottom: 5px;
      right: 3px;
      transform: scale(0.8);
      animation: fontChange 3s infinite alternate;
      position: absolute;
    }
  }

  iframe {
    background: rgb(3, 9, 26);
    border-radius: 5px;
  }
}
.title {
  padding-left: 7px;
  font-weight: 600;
  font-size: 16px;
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
