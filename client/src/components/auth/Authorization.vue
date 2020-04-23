<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <Login />
        <Register />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Login from "@/components/auth/Login.vue";
import Register from "@/components/auth/Register.vue";
export default {
  components: {
    Login,
    Register
  }
};
</script>

<style>
</style>