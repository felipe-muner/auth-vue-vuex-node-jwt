import Api from "@/api/Api";

export default {
  namespace: true,
  state: {
    rates: [{}],
  },
  getters: {
    getRates(state) {
      return state.rates;
    },
  },
  mutations: {
    SAVE_RATES(state, rates) {
      state.rates = rates;
    },
  },
  actions: {
    async loadRates({ commit, state }) {
      commit("SAVE_RATES", (await MyApi.exchangeRate.loadRates()).data);
    },
  },
};
