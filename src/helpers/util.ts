const toString = Object.prototype.toString // 判断类型

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

// export function isObject(val: any): val is Object { // 非常规对象判断
//   return val !== null && typeof val === 'object'
// }

export function isPlainObject(val: any): val is Object { // 普通对象判断
  return toString.call(val) === '[object Object]'
}


export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    // 括号开始情况下，前面加;
    // to最终被断言为T&U类型
    // from[key]为U类型不能赋值给T&U类型，所以要加类型断言为any
    ; (to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
