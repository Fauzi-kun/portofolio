import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import PortoView from "@/views/PortoView.vue";
import ExperienceView from "@/views/ExperienceView.vue";

const routes = [
  { path: "/", component: HomeView },
  {
    path: "/about",
    component: AboutView,
  },
  {
    path: "/porto",
    component: PortoView,
  },
  {
    path: "/exp",
    component: ExperienceView,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
