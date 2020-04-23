<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Login" name="login" prepend-icon="person" type="text" />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                {{isUserLoggedIn}}
                <v-spacer />
                <v-btn color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AuthArea from "./views/AuthArea";
import Dashboard from "./views/Dashboard";

import { mapActions } from "vuex";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    AuthArea,
    Dashboard
  },
  data: () => ({}),
  computed: {
    ...mapState({
      isUserLoggedIn: state => state.authArea.isUserLoggedIn,
      user: state => state.authArea.user
    })
  },
  methods: {
    ...mapActions(["typeMethod"])
  },
  created() {
    setTimeout(() => {
      this.typeMethod();
    }, 2000);
  }
};
</script>
