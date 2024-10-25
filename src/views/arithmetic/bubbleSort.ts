const originalArr = [1, 2, 4, 3];
// 将原始数组按从小到大进行排序
export const bubbleSort = () => {
  // 从 0 开始遍历
  // 前面 j 的与后面的 j+1 比较
  // j 大于 j+1 则置换
  // 从 1 开始遍历...

  // 外层控制 i 比较的起始值
  // 内存控制 j 比较的次数
  const arr = JSON.parse(JSON.stringify(originalArr));
  const arrLen = arr.length;
  for (let i = 0; i < arrLen - 1; i++) {
    // 某次内部循环没有交换的数，排序完成
    let done = true;
    for (let j = 0; j < arrLen - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        done = false;
      }
    }
    if (done) {
      break;
    }
  }
  console.log("arr:", arr, originalArr);
  return arr;
};
