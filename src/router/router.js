
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SearchView from "../views/MainView.vue";
import ProfileView from "../views/ProfileView.vue";
import AddEditPerson from "../views/AddEditView.vue";
import MenuView from "../views/MenuView.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/mainview",
    name: "MainView",
    component: MenuView,
    
  },
  {
    path: "/searchview",
    name: "SearchView",
    component: SearchView,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileView,
    
  },
  {
    path: "/addperson",
    name: "AddEditPerson",
    component: AddEditPerson,
    
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;