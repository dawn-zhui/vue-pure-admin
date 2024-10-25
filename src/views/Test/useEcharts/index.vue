<template>
  <div class="useEcharts">
    <el-button @click="downloadChartImage1('echart.png')">
      点击下载图片</el-button
    >
    <div
      id="chart1"
      ref="chartRef"
      class="echart1"
      style="width: 100%; height: 400px"
    />
  </div>
</template>
<script setup lang="ts">
import { useECharts } from "@/views/echarts/useEcharts";
import type { EChartsOption } from "echarts";
import { ref } from "vue";
let myoptions = ref<EChartsOption>({
  xAxis: {
    type: "category",
    data: ["", 2, 3, 4, 5, 6, 7]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: ["1", "1", "2", "1", "1", "1", "1"],
      type: "line"
    }
  ]
});

const chartRef = ref<HTMLDivElement | null>(null);
const { options: options1, downloadChartImage: downloadChartImage1 } =
  useECharts(chartRef, myoptions.value as EChartsOption);
setTimeout(() => {
  options1.series[0].data = [210, 200, 200, 200, 200, 220, 280];
}, 1000);
</script>
