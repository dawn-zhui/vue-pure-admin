<template>
  <div class="massdataEcharts">
    海量Echarts数据

    <div
      id="massdataEcharts"
      ref="massdataEcharts"
      style="width: 50%; height: 500px"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, onMounted, watch } from "vue";
import axios from "axios";
import echarts from "@/plugins/echarts";
// 获取数据
let backData = ref([]);
const getMassData = () => {
  axios.post("http://localhost:3000/api/data/massdata").then(({ data }) => {
    console.log("data:", data);
    backData.value = data.data;
  });
};
getMassData();
// 格式化时间
function backTime(value) {
  let date = new Date(value);
  // 获取年份、月份和日期
  let year: string | number = date.getFullYear();
  // 月份从 0 开始，需要加 1
  let month: string | number = date.getMonth() + 1;
  let day: string | number = date.getDate();
  let hours: string | number = date.getHours();
  let minutes: string | number = date.getMinutes();
  let seconds: string | number = date.getSeconds();
  // 格式化月份和日期为两位数（不足两位时补零）
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  // 返回格式化后的字符串
  return (
    year +
    "-" +
    month +
    "-" +
    day +
    "\n" +
    hours +
    ":" +
    minutes +
    ":" +
    seconds
  );
}
let massdataEcharts = ref(null);
// Echarts 实例
let myChart = ref(null);
// 初始化Echarts
const init = () => {
  myChart.value = echarts.init(massdataEcharts.value);
  myChart.value.setOption(option.value);
};
onMounted(() => {
  init();
  window.addEventListener("resize", handleResize);
});
let option = ref({
  legend: {
    data: ["某城市"]
  },
  tooltip: {
    valueFormatter: function (value) {
      return value + " ml";
    }
  },
  // dataZoom: [
  //   {
  //     type: "slider", // 滑块类型 值有slider和inside
  //     xAxisIndex: [0],
  //     start: 0,
  //     end: 1,
  //     minSpan: 0, // 用于限制窗口大小的最小值（百分比值），取值范围是 0 ~ 100。
  //     maxSpan: 10
  //   }
  // ],
  xAxis: {
    type: "category",
    // 返回时间
    data: backData.value.map(v => backTime(v.time)),
    splitLine: { show: false },
    lineStyle: {
      width: 2
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      // 更改x轴文字颜色的配置
      textStyle: {
        color: "#717782"
      },
      showMinLabel: true,
      showMaxLabel: true // 固定显示X轴的最后一条数据
    }
  },
  yAxis: {
    type: "value",
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: "#D2DBE6"
      }
    },
    axisLabel: {
      formatter: "{value}",
      color: "#717782"
    }
  },
  grid: {
    left: "30",
    right: "35",
    bottom: "10",
    top: "20",
    containLabel: true
  },

  series: [
    {
      data: backData.value.map(v => v.value),
      type: "line",
      smooth: true
      // sampling: "average" //' 表示采用平均值采样策略

      // // 采用 Largest-Triangle-Three-Bucket 算法，
      // // 可以最大程度保证采样后线条的趋势，形状和极值。
      // // 不过有可能会造成页面渲染时间长
      // sampling: "lttb"

      // //开启大数据量优化，在数据特别多而出现图形卡顿时候开启
      // large: true,
      // largeThreshold: 10000
    }
  ]
});
// 监听数据变化，更新 Echarts 选项
watch(
  () => backData.value,
  () => {
    option.value.xAxis.data = backData.value.map(v => backTime(v.time));
    option.value.series[0].data = backData.value.map(v => v.value);
    myChart.value.setOption(option.value);
  }
);
// 处理页面视图大小改变
const handleResize = () => {
  myChart.value.resize();
  console.log(111);
};
</script>
