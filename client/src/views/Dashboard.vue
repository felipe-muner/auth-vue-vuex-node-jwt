<template>
  <div class="home">
    sou a Dashboard
    <Dashboard msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from "@/components/dashboard/Dashboard.vue";

export default {
  name: "Home",
  components: {
    Dashboard
  }
};
</script>
