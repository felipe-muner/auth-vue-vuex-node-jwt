<template>
  <div>
    <Login />
    <Register />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";

export default {
  components: {
    Login,
    Register
  }
};
</script>
