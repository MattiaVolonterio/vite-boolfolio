<script>
export default {
  data() {
    return {};
  },
  props: { title: String },
  methods: {},
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{{ title }}</a>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
