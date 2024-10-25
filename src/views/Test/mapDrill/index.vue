<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

const chartRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (chartRef.value) {
    const myChart = echarts.init(chartRef.value);
    const option = {
      // 这里添加地图钻取的 ECharts 配置
      // 例如：
      title: {
        text: "地图钻取示例"
      },
      series: [
        {
          type: "map",
          map: "china"
          // 其他地图配置...
        }
      ]
    };
    myChart.setOption(option);

    // 添加钻取逻辑
    myChart.on("click", function (params) {
      // 处理地图点击事件，实现钻取功能
      console.log("Clicked area:", params.name);
      // 这里可以根据点击的区域加载相应的下级地图数据
    });
  }
});
</script>

<template>
  <div ref="chartRef" style="width: 100%; height: 600px" />
</template>

<style scoped>
/* 可以添加一些样式 */
</style>
