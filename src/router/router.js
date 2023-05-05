
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SearchView from "../views/MainView.vue";
import ProfileView from "../views/ProfileView.vue";
import AddEditPerson from "../views/AddEditView.vue";
import MenuView from "../views/MenuView.vue";
import CalendarView from "../views/SchedueleView.vue";
import TasksView from "../views/TasksView.vue";

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
  {
    path: "/calendar",
    name: "Calendar",
    component: CalendarView,
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: TasksView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;