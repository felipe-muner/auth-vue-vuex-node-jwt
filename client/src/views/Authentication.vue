<template>
  <div>
    <v-row style="margin-top:150px;">
      <v-col xs6>
        <Login />
      </v-col>
      <v-col xs6>
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
