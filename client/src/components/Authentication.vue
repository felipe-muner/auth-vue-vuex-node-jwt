<template>
  <div></div>
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
      password: ""
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