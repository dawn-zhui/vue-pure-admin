<script setup lang="ts"></script>

<template>
  <div>
    <div v-show="false" class="box">
      <div class="center"><input /></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import $ from "jquery";
onMounted(() => {
  console.log("mounted", $(".box"));
  console.log("height:", $(".box input").height());
});
</script>

<style lang="scss" scoped>
.center {
  padding: 0 5px;
  margin: 50px 0;
  // height: 100px;
  font-size: 20px;
  background-color: aqua;
}
</style>
