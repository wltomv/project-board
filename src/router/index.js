import { createRouter, createWebHistory } from "vue-router";

import Hello from "../components/Hello.vue";

const routes = [
  {
    path: "/",
    component: Hello,
    props: { msg: "Project Board" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
