<script>
import { api } from "../store";
import axios from "axios";

export default {
  data() {
    return {
      project: null,
    };
  },
  props: {},
  methods: {
    fetchProject() {
      const projectId = this.$route.params.id;
      axios.get(api.baseUrl + "projects/" + projectId).then((response) => {
        this.project = response.data;
      });
    },
  },

  created() {
    this.fetchProject();
  },
};
</script>

<template>
  <div v-if="project">
    <h1>{{ project.title }}</h1>
    <strong class="me-2">Realizzato da:</strong>
    <code class="fs-5">{{ project.author }}</code>
    <div class="row g-3 mt-3">
      <div class="col-12 col-lg-6">
        <img :src="project.project_image" :alt="project.title" />
      </div>
      <div class="col-12 col-lg-6">
        <p>
          <strong class="me-2">Tipologia di progetto: </strong>
          <span
            class="badge"
            :style="'background-color:' + project.type.color"
            >{{ project.type.type }}</span
          >
        </p>
        <p>
          <strong class="me-2">Tecnologie utilizzate: </strong>
          <span
            v-for="tech in project.technologies"
            class="badge me-2"
            :style="'background-color:' + tech.color"
            >{{ tech.type }}</span
          >
        </p>
        <p>
          <strong class="me-2">Vai alla pagina github: </strong>
          <a :href="project.project_link" target="_blank" class="project-link"
            ><font-awesome-icon icon="fa-brands fa-github" size="lg"
          /></a>
        </p>
        <p>
          <strong class="me-2">Descrizione: </strong>
          {{ project.description }}
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
