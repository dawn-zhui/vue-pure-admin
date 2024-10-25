export let array = [7, 2, 4, 3, 1, 8, 5];
// 从第1个开始
// 从后向前比较是否更小，直到没有找到更小的
//    找到更小的，将更小数的下一位开始，向后移动

// 不太清楚这个整体后移，怎么个移法
// export const insertionSort = () => {
//   for (let i = 1; i < array.length; i++) {
//     debugger;
//     let insertValue = array[i];
//     for (let j = i - 1; j >= 0; j--) {
//       if (array[j] < array[i]) {
//         array.splice(i, 1);
//         array.splice(j + 1, 0, insertValue);
//         break;
//       }
//       if (j === 0) {
//         array.splice(i, 1);
//         array.splice(0, 0, insertValue);
//       }
//     }
//   }
//   console.log("array:", array);
//   return array;
// };
/**
 * 使用插入排序算法对数组进行排序
 * @param {Array} array - 需要排序的数组
 * @return {Array} 排序后的数组
 */
export const insertionSort: (array: number[]) => number[] = array => {
  // 从第二个开始遍历
  for (let i = 1; i < array.length; i++) {
    // 当前需要插入的值
    const insertValue = array[i];
    // 比较的已排序部分的最后一个位置
    let j = i - 1;
    while (j >= 0 && insertValue < array[j]) {
      // 从后往前比较，如该值比前一个值小，则前后交换
      [array[j + 1], array[j]] = [array[j], array[j + 1]];
      j--;
    }
  }
  console.log(array);

  return array;
};
