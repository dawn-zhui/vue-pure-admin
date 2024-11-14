import { ganttastic } from "@/router/enums";

export default {
  path: "/d3",
  redirect: "/d3/demo1",
  meta: {
    icon: "ri:bar-chart-horizontal-line",
    title: "d3页面",
    rank: ganttastic
  },
  children: [
    {
      path: "/d3/demo1",
      name: "demo1",
      component: () => import("@/views/d3/demo1/index.vue"),
      meta: {
        title: "demo1"
      }
    },
    {
      path: "/d3/demo2",
      name: "demo2",
      component: () => import("@/views/d3/demo2/index.vue"),
      meta: { title: "demo2" }
    },
    {
      path: "/d3/demo3",
      name: "demo3",
      component: () => import("@/views/d3/demo3/index.vue"),
      meta: { title: "demo3" }
    }
  ]
} satisfies RouteConfigsTable;
