import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import DetailPatient from "../components/DetailPatient.vue";
import UpdatePatient from "../components/UpdatePatient.vue";
import AddPatient from "../components/AddPatient.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: DetailPatient,
    },
    {
      path: "/update/:id",
      name: "update",
      component: UpdatePatient,
    },
    {
      path: "/add",
      name: "add",
      component: AddPatient,
    },
  ],
});

export default router;
