import 'mathquill/build/mathquill.css'
import 'mathquill/build/mathquill.js'
import Vue from 'vue';
//export default ({ Vue }) => {
  Object.defineProperty(Vue.prototype, '$mq', { value:  window.MathQuill.getInterface(2)});
//}
