<template>
  <v-app id="inspire">
    {{ isUserLoggedIn }}
    <Authentication v-if="!isUserLoggedIn" />
    <Dashboard v-if="isUserLoggedIn" />
  </v-app>
</template>

<script>
import Authentication from "@/views/Authentication";
import Dashboard from "@/views/Dashboard";
import { mapState } from "vuex";

export default {
  components: {
    Authentication,
    Dashboard,
  },
  data: () => ({}),
  computed: {
    ...mapState({
      isUserLoggedIn: (state) => state.authArea.isUserLoggedIn,
    }),
  },
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
}</style
>>
