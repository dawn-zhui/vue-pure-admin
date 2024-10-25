<script setup lang="ts">
import { ref, onMounted } from "vue";
onMounted(() => {
  // canvas基本使用示例
  const canvas = document.getElementById(
    "watermarkCanvas"
  ) as HTMLCanvasElement;
  const context = canvas.getContext("2d");

  const image = new Image();
  image.src = "/src/views/components/upload/imgs/1.jpg"; // 你的图片URL
  console.log(222);

  image.onload = function () {
    console.log("image:", image);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    context.font = "48px Arial";
    context.fillStyle = "red";
    context.fillText("Watermark Text", 50, 50);
  };
});
</script>

<template>
  <div v-watermark="{ text: '绝密资料，请勿外传' }">
    自定义水印
    <div v-ripple class="testDir">自定义水印测试</div>
    <canvas id="watermarkCanvas" width="800" height="600" />
  </div>
</template>

<style lang="scss" scoped>
.testDir {
  width: 200px;
  height: 100px;
}
</style>
