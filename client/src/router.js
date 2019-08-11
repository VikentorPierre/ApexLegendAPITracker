import Vue from "vue";
import Router from "vue-router";
import Search from "./components/Search";
import ProfilePage from "./components/ProfilePage";

// in our router we only have two routes.
// the first one is our home routes which is the search route
// the second one is our profile route that takes two url paremeter
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "search",
      component: Search
    },
    {
      path: "/profile/:platform/:gamertag",
      name: "profile",
      component: ProfilePage
    }
  ]
});
