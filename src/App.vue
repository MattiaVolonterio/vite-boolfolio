<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "Boolfolio",
    };
  },
  props: {},
  methods: {},

  created() {
    console.log(axios);
  },
};
</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style lang="scss">
@use "/src/scss/general.scss";
</style>
