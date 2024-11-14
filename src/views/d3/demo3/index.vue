<template>
  11
  <div id="chart" />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as d3 from "d3";

onMounted(() => {
  // 生成一些假数据
  const data = [];
  for (let i = 0; i < 100; i++) {
    const time = i;
    const pulse = Math.random() * 100 + 50; // 脉搏值
    const heartRate = Math.random() * 10 + 60; // 心率值
    data.push({ time, pulse, heartRate });
  }

  const width = 800;
  const height = 400;
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const svg = d3
    .select("#chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

  // 定义比例尺
  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.time)])
    .range([margin.left, width - margin.right]);
  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.pulse)])
    .range([height, 0]);

  // 定义路径生成函数
  const pulseLine = d3
    .line()
    .x(d => xScale(d.time))
    .y(d => yScale(d.pulse))
    .curve(d3.curveCardinal);
  svg
    .append("path")
    .datum(data)
    .attr("class", "pulse line")
    .attr("d", pulseLine)
    .attr("fill", "none")
    .attr("stroke", "green")
    .attr("stroke-width", 2);

  // 绘制坐标轴
  svg
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));

  svg
    .append("g")
    .attr("transform", `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(yScale));
});
</script>

<style scoped>
/* 添加样式 */
</style>
