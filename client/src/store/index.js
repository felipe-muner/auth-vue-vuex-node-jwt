import Vue from "vue";
import Vuex from "vuex";

import authArea from "./authArea";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    authArea,
  },
});
