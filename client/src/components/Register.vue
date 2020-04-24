<template>
  <v-content class="ml-3">
    <v-container>
      <v-row>
        <v-col cols="8">
          <v-card class="elevation-12">
            <v-toolbar color="success" dark flat>
              <v-toolbar-title>Register form</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-card-text>
                <v-text-field
                  outlined
                  :rules="emailRules"
                  label="E-mail"
                  v-model="email"
                  prepend-icon="email"
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

                <v-text-field
                  outlined
                  :rules="nameRules"
                  label="Name"
                  v-model="name"
                  prepend-icon="person"
                  type="text"
                />
                <DateOfBirth />
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn :disabled="!valid" color="success" @click="register">Register</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import DateOfBirth from "./DateOfBirth";
export default {
  components: {
    DateOfBirth
  },
  data() {
    return {
      valid: true,
      name: "",
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      passwordRules: [v => !!v || "Password is required"],
      nameRules: [v => !!v || "Name is required"]
    };
  },
  watch: {},
  methods: {
    register() {
      if (this.$refs.form.validate()) {
        alert("validei");
      } else {
        alert("nao validei");
      }
    }
  }
};
</script>

<style>
</style>