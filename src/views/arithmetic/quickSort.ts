/**
 * 以第一位为基准元素
 * 从右边往左遍历 j，找到小于等于基准元素的元素。如 j 与基准元素对撞，交换
 * 从左往右变量 i，找到大于等于基准元素的元素。如 i与j对撞, j与基准元素交换
 * 找到的i和j不相等，则交换位置。继续遍历
 * 递归用快速排序处理基准元素两边的，直到剩下一个元素，递归结束
 */
/**
 * 快速排序函数
 * 快速排序是一种高效的排序算法，它采用分治法策略，通过一个划分操作，将数组分为两个子数组，
 * 使得左边子数组都不大于右边子数组，然后再分别对两个子数组进行排序
 *
 * @param array 待排序的数组
 * @param basisIndex 划分基准元素的索引，默认为0
 * @param initI 排序开始时i的初始值，默认为basisIndex + 1
 * @param initJ 排序开始时j的初始值，默认为数组末尾
 * @returns 返回排序后的数组
 */
export function quickSort(array: number[]): number[] {
  // 定义辅助函数，用于排序
  function sort(left: number, right: number): void {
    // 如果左边的索引比右边的索引大，说明区间内已经没有数据，退出函数
    if (left >= right) {
      return;
    }
    // 取出基准数
    let pivot = array[left];
    // 定义两个指针
    let i = left;
    let j = right;
    // 开始排序
    while (i < j) {
      // 从右边开始搜索，直到找到比基准数小的数
      while (i < j && array[j] >= pivot) {
        j--;
      }
      // 如果找到了，则将该数存放在左边
      if (i < j) {
        array[i] = array[j];
        i++;
      }
      // 从左边开始搜索，直到找到比基准数大的数
      while (i < j && array[i] <= pivot) {
        i++;
      }
      // 如果找到了，则将该数存放在右边
      if (i < j) {
        array[j] = array[i];
        j--;
      }
    }
    // 将基准数存放在最终的位置上
    array[i] = pivot;
    // 递归处理基准数左边的数据
    sort(left, i - 1);
    // 递归处理基准数右边的数据
    sort(i + 1, right);
  }
  // 调用辅助函数，开始排序
  sort(0, array.length - 1);
  // 返回排序后的数组
  return array;
}
