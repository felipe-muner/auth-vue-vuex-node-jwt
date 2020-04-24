import Api from "@/api/Api";

export default {
  register(credentials) {
    return Api().post("/authentication/register", credentials);
  },
  login(credentials) {
    return Api().post("login", credentials);
  },
};
