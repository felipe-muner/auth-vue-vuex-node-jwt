<template>
  <div>
    <v-row style="margin-top:50px;">
      <v-col cols="6">
        <Login />
      </v-col>
      <v-col cols="6">
        <Register />
      </v-col>
    </v-row>
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
