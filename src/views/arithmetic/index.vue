<template>
  <div>算法<testCom /></div>
</template>

<script lang="ts" setup>
import { bubbleSort } from "./bubbleSort";
import { selectionSort } from "./selectionSort";
import { insertionSort } from "./insertionSort";
import { mergeSort } from "./mergeSort";
import { quickSort } from "./quickSort";
import { deepClone } from "./deepClone";
import testCom from "./testCom.vue";
let array = [7, 2, 4, 3, 1, 8, 5]; //  i < j， i 与 j 交换
[7, 2, 4, 3, 1, 5, 8]; // i 与 j 对撞，7
[5, 2, 4, 3, 1, 7, 8]; // i 与 j 对撞，5。右边一个
[1, 2, 4, 3, 5, 7, 8]; // j 与 基准元素 对撞，都没找到 1
[1, 2, 4, 3, 5, 7, 8]; // j 与 基准元素 对撞，都没找到 2
[1, 2, 4, 3, 5, 7, 8]; // i 与 j 对撞，j 与基准元素交换
// let array = [1, 1, 6, 6, 5, 2, 3];
console.log(quickSort(array));
let obj = { a: 1, b: [2, 3, 4] };
console.log(deepClone(obj));
obj.b.push(5);
</script>

<style lang="scss" scoped>
.test {
  height: 1000px;
  background-color: bisque;
}
</style>
