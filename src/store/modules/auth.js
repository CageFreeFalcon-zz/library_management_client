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
    async isLoggedIn(context) {
      try {
        await Auth.currentAuthenticatedUser();
        context.commit("setAuthState", true);
        return true;
      } catch (e) {
        context.commit("setAuthState", false);
        return false;
      }
    },
    async signUp(context, payload) {
      try {
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
          console.log(img_path);
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
      } catch (error) {
        return error;
      }
    },
    async confirmSignUp(context, payload) {
      try {
        const data = await Auth.confirmSignUp(
          context.state.email,
          payload.code
        );
        console.log(data);
        if (data === "SUCCESS") {
          context.commit("setAuthState", false);
          router.push({
            name: "Home",
            query: {
              msg:
                "You have successfully signed up wait for librarian to confirm your account",
            },
          });
        }
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    async resendConfirmationCode(context) {
      try {
        await Auth.resendSignUp(context.state.email);
        return { message: "code resent successfully" };
      } catch (error) {
        return error;
      }
    },
    async completePassword(context, payload) {
      try {
        if (payload.password === payload.re_password) {
          const user = await Auth.currentAuthenticatedUser({
            bypassCache: true,
          });
          console.log(user);
          const newUser = await Auth.completeNewPassword(
            user,
            payload.password
          );
          console.log(newUser);
          context.commit("setuser", newUser);
          const pl = user.signInUserSession.accessToken.payload;
          let containStudent = false;
          if ("cognito:groups" in pl) {
            if (pl["cognito:groups"].includes("students")) {
              containStudent = true;
            }
          }
          if (containStudent) {
            router.push("/dashboard");
          } else {
            await context.dispatch(
              "signOut",
              "Let Librarian validate your account first"
            );
          }
        } else {
          throw Error("password didn't match");
        }
      } catch (error) {
        return error;
      }
    },
    async forgotPassword(context, payload) {
      context.commit("setEmail", payload.email);
      try {
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
      } catch (error) {
        return error;
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
        }
        return error;
      }
    },
    async signIn(context, payload) {
      try {
        const user = await Auth.signIn(payload.username, payload.password);
        console.log(user);
        context.commit("setuser", user);
        if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
          router.push({ name: "NewPassword", params: { type: "reset" } });
        }
        const pl = user.signInUserSession.accessToken.payload;
        let containStudent = false;
        if ("cognito:groups" in pl) {
          if (pl["cognito:groups"].includes("students")) {
            containStudent = true;
          }
        }
        if (containStudent) {
          context.commit("setAuthState", true);
          router.push("/dashboard");
        } else {
          await context.dispatch(
            "signOut",
            "Let Librarian validate your account first"
          );
        }
      } catch (error) {
        if (error.code === "UserNotConfirmedException") {
          context.commit("setEmail", payload.username);
          context.commit("setPassword", payload.password);
          await context.dispatch("resendConfirmationCode", {
            username: payload.username,
          });
          router.push({
            name: "OTP",
            params: { type: "registration" },
            query: { msg: error.message },
          });
        } else {
          return error;
        }
      }
    },
    async changePassword(context, payload) {
      Auth.currentAuthenticatedUser()
        .then((user) => {
          return Auth.changePassword(user, payload.oldpass, payload.newpass);
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
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
