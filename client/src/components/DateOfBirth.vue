<template></template>

<script>
export default {
  data() {
    return {
      menuDate: false
    };
  },

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