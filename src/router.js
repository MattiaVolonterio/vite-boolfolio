import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import ProjectsList from "./pages/ProjectsList.vue";
import ProjectDetail from "./pages/ProjectDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/projects",
      name: "projects.index",
      component: ProjectsList,
    },
    {
      path: "/project/:id",
      name: "projects.show",
      component: ProjectDetail,
    },
  ],
});

export { router };
