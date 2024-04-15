<script>
export default {
  data() {
    return {};
  },
  props: { project: Object },
  methods: {
    getAbstract(project) {
      return project.description.length > 45
        ? project.description.slice(0, 45) + "..."
        : project.description;
    },
  },
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
          {{ getAbstract(project) }}
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
        <p>
          <strong>Vai alla pagina github: </strong>
          <a :href="project.project_link" target="_blank" class="project-link"
            ><font-awesome-icon icon="fa-brands fa-github" size="lg"
          /></a>
        </p>
        <p>
          <strong>Vai ai dettagli: </strong>
          <router-link
            :to="{ name: 'projects.show', params: { id: project.id } }"
            class="project-link"
            ><font-awesome-icon icon="fa-solid fa-eye" size="lg"
          /></router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-link {
  color: inherit;
}
</style>
