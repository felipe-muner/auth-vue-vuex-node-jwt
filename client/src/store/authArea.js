import AuthenticationService from "@/api/AuthenticationService";

const authArea = {
  namespace: true,
  state: {
    isUserLoggedIn: false,
    user: {},
    token: "",
    newUser: {},
    recoverPassword: "",
  },
  getters: {},
  mutations: {
    REGISTER(state, payload) {
      console.log("mutation");
      console.log(payload);
      state.newUser = payload;
    },
    RECOVER_PASSWORD(state, payload) {
      console.log("mutation-recoverPassword");
      console.log(payload);
      state.recoverPassword = payload;
    },
  },
  actions: {
    async registerUser({ commit, state }, data) {
      const user = (await AuthenticationService.register(data)).data;
      commit("REGISTER", user);
    },
    async recoverPassword({ commit, state }, data) {
      const user = (await AuthenticationService.recoverPassword(data)).data;
      commit("RECOVER_PASSWORD", user);
    },
  },
};

export default authArea;
