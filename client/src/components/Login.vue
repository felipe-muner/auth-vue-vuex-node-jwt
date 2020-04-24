<template>
  <v-content class="mr-3">
    <v-container>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="8">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Login form</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-card-text>
                <v-text-field
                  outlined
                  :rules="emailRules"
                  label="E-mail"
                  v-model="email"
                  prepend-icon="person"
                  type="text"
                />

                <v-text-field
                  outlined
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