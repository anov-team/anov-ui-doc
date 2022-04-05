<template>
    <div v-for="item in data" :key="item.code" class="comp">
        <p class="title">{{ item.name }}</p>
        <iframe frameborder="0" width="100%" height="500px" :src="basePath + item.code"></iframe>
    </div>
</template>

<script setup>
let props = defineProps({
    data: []
})
let basePath = "http://127.0.0.1:8080/#/"
let data = props.data

</script>

<style scoped lang="scss">
.comp {
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