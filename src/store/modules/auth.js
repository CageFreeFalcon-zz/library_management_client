import { Auth, Storage } from "aws-amplify";
import router from "@/router";

export default {
  state: {
    user: undefined,
    otp: "",
    email: "",
    password: "",
    authenticated: undefined,
  },
  getters: {
    getUser: (state) => state.user,
    getEmail: (state) => state.email,
    getAuthState: (state) => state.authenticated,
  },
  mutations: {
    setuser: (state, payload) => (state.user = payload),
    setOtp: (state, payload) => (state.otp = payload),
    setEmail: (state, payload) => (state.email = payload),
    setPassword: (state, payload) => (state.password = payload),
    setAuthState: (state, payload) => {
      state.authenticated = payload;
      state.email = "";
      state.password = "";
      state.otp = "";
    },
  },
  actions: {
    async signUp(context, payload) {
      if (payload.password === payload.re_password) {
        let img_path = "";
        if (payload.dp) {
          console.log("started image upload");
          const { key } = await Storage.put(payload.dp.name, payload.dp, {
            contentType: "image/*",
          });
          img_path = key;
          console.log("image uploaded" + key);
        }
        await Auth.signUp({
          username: payload.email,
          password: payload.password,
          attributes: {
            name: payload.name,
            family_name: payload.fathername,
            birthdate: payload.dob,
            phone_number: "+91" + payload.phone,
            address: payload.address,
            picture: img_path,
            "custom:course": payload.course,
            "custom:department": payload.department,
            "custom:yoa": payload.yoa,
            "custom:city": payload.city,
            "custom:pin": payload.pin,
            "custom:islateral": payload.islateral,
          },
        });
        context.commit("setEmail", payload.email);
        router.push({ name: "OTP", params: { type: "registration" } });
      } else {
        throw Error("Password doesn't match");
      }
    },
    async confirmSignUp(context, payload) {
      const data = await Auth.confirmSignUp(context.state.email, payload.code);
      if (data === "SUCCESS") {
        context.commit("setAuthState", false);
        router.push({
          name: "Home",
          query: {
            msg: "You have successfully signed up wait for librarian to confirm your account",
          },
        });
      }
    },
    async resendConfirmationCode(context) {
      await Auth.resendSignUp(context.state.email);
      return { message: "code resent successfully" };
    },
    async completePassword(context, payload) {
      if (payload.password === payload.re_password) {
        const user = await Auth.currentAuthenticatedUser({
          bypassCache: true,
        });
        console.log(user);
        const newUser = await Auth.completeNewPassword(user, payload.password);
        console.log(newUser);
        router.push("/dashboard");
      } else {
        throw Error("password didn't match");
      }
    },
    async forgotPassword(context, payload) {
      context.commit("setEmail", payload.email);
      await Auth.forgotPassword(payload.email);
      if (payload.type !== "resend") {
        router.push({
          name: "OTP",
          params: { type: "forgotPassword" },
          query: { msg: "Code send successfully" },
        });
      } else {
        return { message: "Code send successfully" };
      }
    },
    async forgotPasswordsubmit(context, payload) {
      try {
        if (payload.password === payload.re_password) {
          await Auth.forgotPasswordSubmit(
            context.state.email,
            context.state.otp,
            payload.password
          );
          context.dispatch("signIn", {
            username: context.state.email,
            password: payload.password,
          });
        } else {
          throw Error("Password didn't match");
        }
      } catch (error) {
        console.log(error);
        if (error.code === "CodeMismatchException") {
          router.push({
            name: "OTP",
            params: { type: "forgotPassword" },
            query: { msg: error.message },
          });
        } else {
          throw error;
        }
      }
    },
    async signIn(context, payload) {
      try {
        const user = await Auth.signIn(payload.username, payload.password);
        if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
          router.push({ name: "NewPassword", params: { type: "reset" } });
        } else {
          router.push("/dashboard");
        }
      } catch (error) {
        if (error.code === "UserNotConfirmedException") {
          context.commit("setEmail", payload.username);
          context.commit("setPassword", payload.password);
          await context.dispatch("resendConfirmationCode");
          router.push({
            name: "OTP",
            params: { type: "registration" },
            query: { msg: error.message },
          });
        } else {
          throw error;
        }
      }
    },
    async changePassword(context, payload) {
      if (payload.newPassword === payload.reNewPassword) {
        const user = await Auth.currentAuthenticatedUser();
        await Auth.changePassword(
          user,
          payload.oldPassword,
          payload.newPassword
        );
      } else {
        throw Error("Password doesn't match");
      }
    },
    async signOut(context, payload) {
      try {
        await Auth.signOut({ global: true });
        context.commit("setAuthState", false);
        context.commit("setuser", undefined);
        router.push({ name: "Home", query: { msg: payload } });
      } catch (error) {
        console.log("error signing out: ", error);
      }
    },
  },
};
