const originalArr = [7, 2, 4, 3, 1, 8, 5];
export const selectionSort = () => {
  // 遍历 n-1 次，每次获得一个最小值，缩减内层比较次数
  //    每次从最前面那个开始比较，是否为最小的
  //    有更小的交换最小值索引
  //    最小值索引互换值
  for (let i = 0; i < originalArr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < originalArr.length; j++) {
      if (originalArr[minIndex] > originalArr[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [originalArr[i], originalArr[minIndex]] = [
        originalArr[minIndex],
        originalArr[i]
      ];
    }
  }
  console.log("originalArr:", originalArr);
};
