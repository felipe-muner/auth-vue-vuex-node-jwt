<template>
  <div class="home">
    sou a AuthArea
    <AuthArea msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import AuthArea from "@/components/auth/Authorization.vue";

export default {
  name: "Home",
  components: {
    Dashboard
  }
};
</script>
