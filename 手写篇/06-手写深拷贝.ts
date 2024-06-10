/**
 * 手写深拷贝
 * @param obj
 * @returns
 */
function deepClone(obj: unknown) {
  // 1.非引用类型或者为null直接返回
  if(typeof obj !== 'object' || obj === null) return obj

  // 2. 初始化拷贝对象
  let copy = {}
  if(obj instanceof Array) {
    copy = []
  }


  // 3. 遍历对象的key
  for(let key in obj) {
    // 如果key是对象的自有属性
    if(obj.hasOwnProperty(key)) {
      // 递归调用深拷贝
      copy[key] = deepClone(obj[key])
    }
  }

  return copy
}
