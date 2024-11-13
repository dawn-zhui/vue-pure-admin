<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import * as echarts from "echarts";
import chinaJson from "@/assets/map/china2.json"; // 确保路径正确
const router = useRouter();
// 使用 typeof 和 Parameters 获取 registerMap 函数的参数类型
type RegisterMapParams = Parameters<typeof echarts.registerMap>;
type MapInput = RegisterMapParams[1];

const chartRef = ref<HTMLElement | null>(null);
let myChart;
onMounted(() => {
  // if (chartRef.value) {
  myChart = echarts.init(chartRef.value);

  // echarts.registerMap("china", chinaJson as MapInput);
  //   const option: echarts.EChartsOption = {
  //     geo: {
  //       map: "china",
  //       roam: true, // 启用地图平移和缩放
  //       zoom: 1.2, // 初始缩放级别
  //       scaleLimit: {
  //         min: 1, // 最小缩放级别
  //         max: 5 // 最大缩放级别
  //       },
  //       itemStyle: {
  //         areaColor: "#eee", // 地图区域的颜色
  //         borderColor: "#79b1d9" // 地图边界的颜色
  //       },
  //       emphasis: {
  //         itemStyle: {
  //           areaColor: "#b8d3ea" // 鼠标悬停时的颜色
  //         }
  //       }
  //     },
  //     series: [
  //       {
  //         type: "map",
  //         map: "china",
  //         geoIndex: 0,
  //         roam: true
  //       },
  //       {
  //         type: "scatter",
  //         coordinateSystem: "geo",
  //         data: [
  //           { name: "北京", value: [116.4074, 39.9042] },
  //           { name: "上海", value: [121.4737, 31.2304] },
  //           { name: "广州", value: [113.2644, 23.1292] }
  //           // 更多数据...
  //         ]
  //       }
  //     ]
  //   };
  //   myChart.setOption(option);

  // 添加钻取逻辑
  myChart.on("click", function (params) {
    // 判断是否点击的是地图区域，进入下一层级
    if (params.data && params.seriesType === "map") {
      const { adcode, name, level } = params.data;
      if (level === "district") {
        alert("无此区域地图显示！");
        return;
      }
      mapList.push({ name, adcode });
      getJSON(adcode, name);
    } else if (params.seriesType === "scatter") {
      const url = params.data.url;
      if (url) {
        // 使用 Vue Router 进行导航
        router.push(url);
      }
    }
  });
  renderChart("china", chinaJson);
  // const data = chinaJson; // 第一步所准备的地图 json 数据
  // setOption("china", data);
});

function setOption(name, data) {
  const option: echarts.EChartsOption = {
    geo: {
      map: name,
      roam: true, // 启用地图平移和缩放
      zoom: 1.2, // 初始缩放级别
      scaleLimit: {
        min: 1, // 最小缩放级别
        max: 5 // 最大缩放级别
      },
      itemStyle: {
        areaColor: "#eee", // 地图区域的颜色
        borderColor: "#79b1d9" // 地图边界的颜色
      },
      emphasis: {
        itemStyle: {
          areaColor: "#b8d3ea" // 鼠标悬停时的颜色
        }
      }
    },
    // tooltip 提示配置项
    tooltip: {
      formatter: function (params) {
        // 根据需要进行数据处理或格式化操作
        const { adcode, name, level } = params.data;
        if (params.seriesType === "scatter") {
          return `${params.name}<br/>值: ${params.value[2]}<div>
              <img style="width: 200px;height:200px;" src="src/views/waterPrint/your-image.png" style="width:100px;height:100px;"><br>
              图片<br>
            </div>`;
        }
        // // 返回自定义的tooltip内容
        // return `adcode: ${adcode}<br>name: ${name}<br>level: ${level}`;
      }
    },

    series: [
      {
        type: "map",
        map: name,
        geoIndex: 0,
        roam: true,
        data
      },
      {
        type: "scatter",
        coordinateSystem: "geo",
        data: [
          {
            name: "维护区1",
            value: [116.4074, 39.9042]
            // url: "/test/CSSModule"
          },
          {
            name: "维护区2",
            value: [121.4737, 31.2304]
            // url: "/test/massdataEcharts"
          },
          {
            name: "维护区3",
            value: [113.2644, 23.1292]
            // url: "/test/useEcharts"
          }
          // 更多数据...
        ]
      }
    ]
  };
  myChart.setOption(option, true);
}

const getJSON = (adcode, name) => {
  let geoData = ref<MapInput>({} as MapInput);
  axios
    .get(
      `https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=${adcode}_full`
    )
    .then(({ data }) => {
      geoData.value = data;
      renderChart(name, data);
    })
    .catch(error => {
      console.log("error:", error);
    });
};
// 渲染地图
function renderChart(name, data) {
  // 注册地图
  echarts.registerMap(name, data);
  // 根据 json 数据拼装 mapdata， 用于地图点击下钻时传递数据，主要有adcode、name
  const mapdata = data.features.map(item => {
    return item.properties;
  });
  // 配置option
  setOption(name, mapdata);
}
// 返回上一地图层级
const mapList = [{ name: "中国", adcode: 100000 }];
// 设置返回策略，根据 adcode 区域编码判断是否需要返回
function setBackbtn() {
  if (mapList[mapList.length - 1].adcode === 100000) {
    return;
  }
  mapList.splice(mapList.length - 1, 1);
  getJSON(mapList[mapList.length - 1].adcode, mapList[mapList.length - 1].name);
}
</script>

<template>
  <div class="map-drill">
    <el-button click="goBack" @click="setBackbtn">返回上一地图层级</el-button>
    <div
      ref="chartRef"
      class="chart-container"
      style="width: 100%; height: 600px"
    />
  </div>
</template>

<style scoped>
/* 可以添加一些样式 */
</style>
