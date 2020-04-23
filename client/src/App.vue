<template>
  <v-app>
    <AuthArea v-if="!isUserLoggedIn"></AuthArea>
    <Dashboard v-if="isUserLoggedIn"></Dashboard>
  </v-app>
</template>

<script>
import AuthArea from "./views/AuthArea";
import Dashboard from "./views/Dashboard";

import { mapActions } from "vuex";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    AuthArea,
    Dashboard
  },
  data: () => ({}),
  computed: {
    ...mapState({
      isUserLoggedIn: state => state.authArea.isUserLoggedIn
    })
  },
  methods: {
    ...mapActions(["typeMethod"])
  },
  created() {}
};
</script>
