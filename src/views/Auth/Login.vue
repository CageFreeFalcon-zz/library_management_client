<template>
  <v-container class="d-flex flex-column h-100-p">
    <v-row class="flex-grow-0">
      <v-col class="pb-0">
        <v-btn icon rounded to="/">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-none d-md-flex flex-column justify-center">
        <v-img max-width="400" :src="logo" class="mx-auto flex-grow-0" />
        <h1 class="text-h3 text-center font-weight-bold">Sign In</h1>
        <p class="text-subtitle-1 text-center mt-3">
          Enter your credentials to access your account
        </p>
      </v-col>
      <v-col class="d-flex flex-column align-self-md-center">
        <v-row class="flex-grow-0 d-md-none">
          <v-col>
            <v-img width="200" :src="logo" class="mx-auto" />
            <h1 class="text-h3 text-center font-weight-bold">Sign In</h1>
            <p class="text-subtitle-1 text-center mt-3">
              Enter your credentials to access your account
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="px-11">
            <v-alert
              border="left"
              color="red"
              dense
              text
              type="error"
              v-if="msg"
              >{{ msg }}
            </v-alert>
            <v-text-field
              height="70"
              rounded
              solo
              placeholder="E-mail"
              label="E-mail"
              type="email"
              v-model="email"
            />
            <v-text-field
              height="70"
              rounded
              solo
              placeholder="Password"
              label="Password"
              type="password"
              v-model="password"
            />
            <router-link to="/forgot">
              <p class="text-right">Forget Password?</p>
            </router-link>
          </v-col>
        </v-row>
        <v-row class="flex-grow-0">
          <v-col class="px-11">
            <v-btn
              block
              rounded
              large
              height="60"
              color="primary"
              elevation="3"
              class="grad-btn text--white font-weight-bold mx-auto"
              :loading="loading"
              @click="submitform"
              >Sign In
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import logo from "@/assets/images/logo.svg";
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      logo: logo,
      email: "",
      password: "",
      msg: "",
      loading: false,
    };
  },
  methods: {
    ...mapActions(["signIn"]),
    async submitform() {
      this.loading = true;
      const res = await this.signIn({
        username: this.email,
        password: this.password,
      });
      if (res !== undefined) {
        console.log(res.message);
        this.msg = res.message;
      }
      this.loading = false;
    },
  },
  mounted() {
    if (this.$route.query.msg) {
      this.msg = this.$route.query.msg;
    }
  },
};
</script>

<style scoped></style>
