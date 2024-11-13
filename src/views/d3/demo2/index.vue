<template>
  <canvas id="chart" ref="chart" width="700" height="600" />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const chartRef = ref(null);

onMounted(() => {
  const canvas = d3.select("#chart");
  const context = canvas.node().getContext("2d");

  context.fillStyle = "red";
  context.fillRect(100, 0, 100, 100);

  context.fillStyle = "blue";
  context.arc(200, 100, 100, 0, Math.PI * 1.5);
  context.fill();
});
</script>

<style scoped>
/* 添加样式 */
#chart {
  border: 1px solid #000;
}
</style>
