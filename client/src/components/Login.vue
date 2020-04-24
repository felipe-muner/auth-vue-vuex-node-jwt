<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Login form</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-card-text>
                <v-text-field
                  :rules="emailRules"
                  label="E-mail"
                  v-model="email"
                  prepend-icon="person"
                  type="text"
                />

                <v-text-field
                  :rules="passwordRules"
                  label="Password"
                  v-model="password"
                  prepend-icon="lock"
                  type="password"
                />
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn :disabled="!valid" color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      passwordRules: [v => !!v || "Password is required"]
    };
  },
  watch: {},
  methods: {
    login() {
      if (this.$refs.form.validate()) {
      }
    }
  }
};
</script>

<style>
</style>