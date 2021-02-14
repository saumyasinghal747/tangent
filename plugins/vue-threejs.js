
import * as VueThreejs from 'vue-threejs';

import Vue from 'vue';
Vue.use(VueThreejs)

export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('vthree', VueThreejs);
}


