<template>
  <v-app id="inspire">
    {{isUserLoggedIn}}
    <Login v-if="!isUserLoggedIn" />
    <Dashboard v-if="isUserLoggedIn" />
  </v-app>
</template>

<script>
import Login from "@/components/Login";
import Dashboard from "@/components/Dashboard";
import { mapState } from "vuex";

export default {
  components: {
    Login,
    Dashboard
  },
  data: () => ({}),
  computed: {
    ...mapState({
      isUserLoggedIn: state => state.authArea.isUserLoggedIn
    })
  }
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.25s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>>
