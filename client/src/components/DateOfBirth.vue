<template>
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
</template>

<script>
export default {
  data: vm => ({
    date: "",
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menuDate: false
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },

  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    }
  },

  methods: {
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