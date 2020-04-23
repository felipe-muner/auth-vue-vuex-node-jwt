import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(store.state.isUserLoggedIn);
  store
    .dispatch("auth/authenticate")
    .then((response) => {
      next();
    })
    .catch((error) => {});
});

// router.beforeEach((to, from, next) => {
//   store.dispatch('auth/authenticate').then(response => {
//     next()
//   }).catch(error => {
//     if (!error.message.includes('Could not find stored JWT')) {
//       console.log('Authentication error', error)
//     }
//     (to.meta.requiresAuth) ? next('/inicio-sesion') : next()
//   })
// })

export default router;
