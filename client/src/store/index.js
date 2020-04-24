import Vue from "vue";
import Vuex from "vuex";

import authArea from "./authArea";

Vue.use(Vuex);

const modules = {
  authArea,
};

export default new Vuex.Store({
  strict: true,
  modules,
});
