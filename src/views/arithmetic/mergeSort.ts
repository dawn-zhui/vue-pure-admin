export let array = [7, 2, 4, 3, 1, 8, 5];
// 1.分解
//  1.1 分解至一个数组只包含1或两个元素
//  1.2 将该数组的两个元素进行大小排序，只有一个元素不用排序
//  1.3 返回排序好的数组
// 2.合并
//  2.1 将排序好的数组，从前往后比较排序，合并生成新数组
// export const mergeSort: (arr: number[]) => number[] = arr => {
//   if (arr.length < 2) {
//     return arr;
//   }
//   let arr1 = mergeSort(arr.slice(0, arr.length / 2));
//   let arr2 = mergeSort(arr.slice(arr.length / 2, arr.length)); // 单数会多一个
//   let resArr = [];
//   let i = 0; // arr1的指针
//   let j = 0; // arr2的指针
//   for (let k = 0; k < arr.length; k++) {
//     if (arr1[i] < arr2[j]) {
//       resArr.push(arr1[i]);
//       i++;
//     } else {
//       resArr.push(arr2[j]);
//       j++;
//     }
//     // 有arr1或arr2的已经放完了 节约步骤
//     if (i === arr1.length || j === arr2.length) {
//       if (i === arr1.length) {
//         resArr = resArr.concat(arr2.slice(j, arr2.length));
//       }
//       if (j === arr2.length) {
//         resArr = resArr.concat(arr1.slice(i, arr1.length));
//       }
//       return resArr;
//     }
//   }
// };

export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  return merge(left, right);
}
const merge: (left: number[], right: number[]) => number[] = (left, right) => {
  let i = 0,
    j = 0;
  const result: number[] = [];
  // 按从小到大合并
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  // 剩下未合并的，直接加入
  while (i < left.length) {
    result.push(left[i++]);
  }
  while (j < right.length) {
    result.push(right[j++]);
  }
  return result;
};
