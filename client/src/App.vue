<template>
  <v-app id="inspire">
    <Login />
    <Dashboard />
  </v-app>
</template>

<script>
import Login from "@/components/Login";
import Dashboard from "@/components/Dashboard";
export default {
  components: {
    Login,
    Dashboard
  },
  data: () => ({})
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
