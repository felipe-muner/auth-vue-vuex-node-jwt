import AuthenticationService from "@/api/AuthenticationService";

const authArea = {
  namespace: true,
  state: {
    isUserLoggedIn: false,
    user: {},
    token: "",
    newUser: {},
  },
  getters: {},
  mutations: {
    REGISTER(state, payload) {
      console.log("mutation");
      console.log(payload);
      state.newUser = payload;
    },
  },
  actions: {
    async registerUser({ commit, state }, data) {
      const user = (await AuthenticationService.register(data)).data;
      commit("REGISTER", user);
    },
  },
};

export default authArea;
