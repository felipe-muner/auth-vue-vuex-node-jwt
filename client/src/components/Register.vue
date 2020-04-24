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
                <v-menu
                  v-model="menuDate"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      outlined
                      v-model="computedDateFormatted"
                      label="Date of Birth"
                      hint="DD/MM/YYYY format"
                      persistent-hint
                      prepend-icon="event"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title @input="menuDate = false"></v-date-picker>
                </v-menu>
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
export default {
  data() {
    return {
      date: "",
      dateFormatted: "",
      menuDate: false,
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
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    }
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },
  methods: {
    register() {
      if (this.$refs.form.validate()) {
        alert("validei");
      } else {
        alert("nao validei");
      }
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>

<style>
</style>