/**
 * 深克隆一个对象或数组
 * @param obj
 * @returns 返回克隆后的对象或数组
 */
export function deepClone(obj) {
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      newObj[key] = deepClone(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
