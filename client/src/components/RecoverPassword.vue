<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" text>
          Recover Password...
        </v-btn>
      </template>

      <v-card class="elevation-12">
        <v-toolbar color="black" dark flat>
          <v-toolbar-title>Recover Password</v-toolbar-title>
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
              hint="Type your registered e-mail."
              persistent-hint
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn :disabled="!valid" color="success" @click="submit"
              >Register</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      dialog: false,
      valid: true,
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    ...mapActions(["recoverPassword"]),
    submit() {
      this.recoverPassword();
    },
  },
};
</script>
