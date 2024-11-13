<template>
  <div id="chart" ref="chart" />
  <svg id="chart2" ref="chart2" />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const chartRef = ref(null);

onMounted(() => {
  var data = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  d3.select("#chart")
    .selectAll("div")
    .data(data)
    .enter()
    .append("div")
    .text(d => d);
  const data2 = [30, 86, 168, 234, 32, 8];
  d3.select("#chart2").attr("width", 700).attr("height", 300);
  d3.select("#chart2")
    .selectAll("rect")
    .data(data2)
    .enter()
    .append("rect")
    .attr("width", 50)
    .attr("y", 30)
    .attr("x", (d, i) => i * 100)
    .attr("height", (d, i) => d);
});
</script>

<style scoped>
/* 添加样式 */
#chart2 {
  border: 1px solid #000;
}
</style>
