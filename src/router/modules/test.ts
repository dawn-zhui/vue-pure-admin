import { ganttastic } from "@/router/enums";

export default {
  path: "/test",
  redirect: "/test/arithmetic",
  meta: {
    icon: "ri:bar-chart-horizontal-line",
    title: "测试页面",
    rank: ganttastic
  },
  children: [
    // {
    //   path: "/test/xhs",
    //   name: "XHS",
    //   component: () => import("@/views/xhs/index.vue"),
    //   meta: {
    //     title: "xhs测试"
    //   }
    // },
    {
      path: "/test/arithmetic",
      name: "Arithmetic",
      component: () => import("@/views/arithmetic/index.vue"),
      meta: {
        title: "算法"
      }
    },
    {
      path: "/test/CSSModule",
      name: "Arithmetic",
      component: () => import("@/views/CSSModule/index.vue"),
      meta: {
        title: "Css测试"
      }
    },
    {
      path: "/test/interviewQuestion",
      name: "InterviewQuestion",
      component: () => import("@/views/interviewQuestion/index.vue"),
      meta: {
        title: "面试题"
      }
    },
    {
      path: "/test/waterPrint",
      name: "waterPrint",
      component: () => import("@/views/waterPrint/index.vue"),
      meta: {
        title: "自定义水印"
      }
    },
    {
      path: "/test/massdataEcharts",
      name: "massdataEcharts",
      component: () => import("@/views/Test/massdataEcharts/index.vue"),
      meta: {
        title: "海量数据Echarts"
      }
    },
    {
      path: "/test/useEcharts",
      name: "useEcharts",
      component: () => import("@/views/Test/useEcharts/index.vue"),
      meta: {
        title: "useEcharts"
      }
    },
    {
      path: "/test/mapDrill",
      name: "MapDrill",
      component: () => import("@/views/Test/mapDrill/index.vue"),
      meta: {
        title: "地图钻取"
      }
    }
  ]
} satisfies RouteConfigsTable;
