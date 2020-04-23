// import AuthenticationService from "@/api/AuthenticationService";

export default {
  namespace: true,
  state: {
    isUserLoggedIn: false,
    user: { nome: "felipe" },
  },
  getters: {},
  mutations: {
    TYPE_MUTATION(state, payload) {
      state.isUserLoggedIn = payload;
    },
  },
  actions: {
    async typeMethod({ commit, state }) {
      commit("TYPE_MUTATION", true);
    },
  },
};
