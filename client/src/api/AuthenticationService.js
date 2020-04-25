import Api from "@/api/Api";

export default {
  register(credentials) {
    return Api().post("/authentication/register", credentials);
  },
  recoverPassword(credentials) {
    return Api().post("/authentication/recover-password", credentials);
  },
  login(credentials) {
    return Api().post("authentication/login", credentials);
  },
};
