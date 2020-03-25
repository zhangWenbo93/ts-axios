import { AxiosInstance } from './types/index';
import Axios from './core/Axios';
import { extend } from './helpers/util';

function createInstance(): AxiosInstance {
  const context = new Axios()
  // 此处指向Axios原型上的request方法，由于request内部会访问this，因此通过bind绑定上下文
  const instance = Axios.prototype.request.bind(context)

  // 通过extend把Axios的实例context的原型属性和实例属性都拷贝到instance上
  extend(instance, context)
  return instance as AxiosInstance
}

const axios = createInstance()

export default axios
