import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      if (
        store.getters.getAuthState === undefined ||
        store.getters.getAuthState === true
      ) {
        store.dispatch("isLoggedIn").then((res) => {
          if (res) {
            next("/dashboard");
          } else {
            next();
          }
        });
      } else {
        next();
      }
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Auth/Login"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Auth/Register"),
  },
  {
    path: "/:type/otp",
    name: "OTP",
    component: () => import("../views/Auth/Otp"),
  },
  {
    path: "/forgot",
    name: "ForgotPassword",
    component: () => import("../views/Auth/Forgot"),
  },
  {
    path: "/:type/newpassword",
    name: "NewPassword",
    component: () => import("../views/Auth/NewPassword"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    components: {
      default: () => import("../views/Dashboard"),
      appBar: () => import("@/components/AppBar"),
    },
    beforeEnter: (to, from, next) => {
      const authenticated = store.getters.getAuthState;
      if (authenticated) {
        next();
      } else if (authenticated === undefined) {
        store.dispatch("isLoggedIn").then((res) => {
          if (res) {
            next();
          } else {
            next("/");
          }
        });
      } else {
        next({
          name: "Login",
          query: { msg: "Please login again" },
        });
      }
    },
  },
  {
    path: "/search",
    name: "Search",
    components: {
      default: () => import("../views/Search"),
      appBar: () => import("@/components/SearchBar"),
    },
    beforeEnter: (to, from, next) => {
      const authenticated = store.getters.getAuthState;
      if (authenticated) {
        next();
      } else if (authenticated === undefined) {
        store.dispatch("isLoggedIn").then((res) => {
          if (res) {
            next();
          } else {
            next("/");
          }
        });
      } else {
        next({
          name: "Login",
          query: { msg: "Please login again" },
        });
      }
    },
  },
  {
    path: "/profile",
    name: "Profile",
    components: {
      default: () => import("../views/Profile"),
      appBar: () => import("@/components/ProfilrBar"),
    },
    // beforeEnter: (to, from, next) => {
    //   const authenticated = store.getters.getAuthState;
    //   if (authenticated) {
    //     next();
    //   } else if (authenticated === undefined) {
    //     store.dispatch("isLoggedIn").then((res) => {
    //       if (res) {
    //         next();
    //       } else {
    //         next("/");
    //       }
    //     });
    //   } else {
    //     next({
    //       name: "Login",
    //       query: { msg: "Please login again" },
    //     });
    //   }
    // },
  },
  {
    path: "/changepassword",
    name: "ChanghePassword",
    components: {
      default: () => import("../views/ChangePassword"),
      appBar: () => import("@/components/AppBar"),
    },
    beforeEnter: (to, from, next) => {
      const authenticated = store.getters.getAuthState;
      if (authenticated) {
        next();
      } else if (authenticated === undefined) {
        store.dispatch("isLoggedIn").then((res) => {
          if (res) {
            next();
          } else {
            next("/");
          }
        });
      } else {
        next({
          name: "Login",
          query: { msg: "Please login again" },
        });
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
