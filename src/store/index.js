import Vue from "vue";
import Vuex from "vuex";
import { Auth } from "aws-amplify";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Login from "../components/Login";
import CompleteNewPassword from "../components/CompleteNewPassword";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "",
    layout: AuthLayout,
    authstate: Login,
  },
  getters: {
    getUser: (state) => state.user,
    getLayout: (state) => state.layout,
    getAuthState: (state) => state.authstate,
  },
  mutations: {
    setuser: (state, payload) => (state.user = payload),
    setLayout: (state, payload) => (state.layout = payload),
    setAuthState: (state, payload) => (state.authstate = payload),
  },
  actions: {
    async signUp(context, payload) {
      try {
        const user = await Auth.signIn({
          username: payload.email,
          password: payload.pass,
        });
        if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
          context.commit("setuser", user);
          context.commit("setAuthState", CompleteNewPassword);
        } else {
          context.commit("setuser", user);
          context.commit("setLayout", MainLayout);
        }
      } catch (error) {
        console.log("error signing up:", error);
        return error;
      }
    },
    async completePassword(context, payload) {
      try {
        const user = context.state.user;
        console.log(user);
        try {
          const newUser = await Auth.completeNewPassword(user, payload);
          context.commit("setuser", newUser);
        } catch (e) {
          console.log(e);
        }
      } catch (e) {
        console.log(e);
      }
    },
    async logOut(context) {
      try {
        await Auth.signOut({ global: true });
        context.commit("setLayout", AuthLayout);
        context.commit("setAuthState", Login);
      } catch (error) {
        console.log("error signing out: ", error);
      }
    },
    async redirectIfAuthenticated(context) {
      try {
        const user = await Auth.currentAuthenticatedUser();
        console.log(user);
        context.commit("setuser", user);
        context.commit("setLayout", MainLayout);
      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: {},
});
