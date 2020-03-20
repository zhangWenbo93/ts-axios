const toString = Object.prototype.toString // 判断类型

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

// export function isObject(val: any): val is Object { // 非常规对象判断
//   return val !== null && typeof val === 'object'
// }

export function isPlainObject(val: any): val is Object { // 普通对象判断
  return toString.call(val) === '[object object]'
}