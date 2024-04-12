<script>
export default {
  data() {
    return {};
  },
  props: { project: Object },
  methods: {},
};
</script>

<template>
  <div class="col">
    <div class="card h-100">
      <img
        :src="project.project_image"
        class="card-img-top"
        :alt="project.title"
      />
      <div class="card-body">
        <h5 class="card-title fw-bold h4">{{ project.title }}</h5>
        <p class="card-text">
          {{ project.description }}
        </p>
        <p>
          <strong>Tipologia: </strong
          ><span
            class="badge"
            :style="'background-color:' + project.type.color"
            >{{ project.type.type }}</span
          >
        </p>
        <p>
          <strong>Tecnologie: </strong>
          <span
            v-for="tech in project.technologies"
            class="badge me-2"
            :style="'background-color:' + tech.color"
            >{{ tech.type }}</span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
