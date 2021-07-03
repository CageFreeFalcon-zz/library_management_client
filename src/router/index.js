import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import { Auth } from "aws-amplify";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
      appBar: () => import("../components/AppBar"),
    },
  },
  {
    path: "/search",
    name: "Search",
    components: {
      default: () => import("../views/Search"),
      appBar: () => import("../components/SearchBar"),
    },
  },
  {
    path: "/profile",
    name: "Profile",
    components: {
      default: () => import("../views/Profile"),
      appBar: () => import("../components/ProfilrBar"),
    },
  },
  {
    path: "/changepassword",
    name: "ChanghePassword",
    components: {
      default: () => import("../views/ChangePassword"),
      appBar: () => import("@/components/AppBar"),
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  let checkAuth = ["Dashboard", "Search", "Profile", "ChanghePassword"];
  if (checkAuth.includes(to.name)) {
    try {
      await Auth.currentAuthenticatedUser();
      next();
    } catch (e) {
      this.$swal("Error", e, "error");
      next("/login");
    }
  } else {
    try {
      await Auth.currentAuthenticatedUser();
      next("/dashboard");
    } catch (e) {
      next();
    }
  }
});

export default router;
