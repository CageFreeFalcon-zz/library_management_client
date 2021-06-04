<template>
  <v-container class="d-flex flex-column h-100-p">
    <v-row class="flex-grow-0">
      <v-col class="pb-0">
        <v-btn icon rounded to="/login">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-none d-md-flex flex-column justify-center">
        <v-img max-width="400" :src="logo" class="mx-auto flex-grow-0" />
        <h1 class="text-h3 text-center font-weight-bold">Forget</h1>
        <h1 class="text-h3 text-center font-weight-bold">Password</h1>
        <p class="text-subtitle-1 text-center mt-3">
          Enter your email with which your account was created
        </p>
      </v-col>
      <v-col class="d-flex flex-column align-self-md-center">
        <v-row class="flex-grow-0 d-md-none">
          <v-col>
            <v-img width="200" :src="logo" class="mx-auto" />
            <h1 class="text-h3 text-center font-weight-bold">Forget</h1>
            <h1 class="text-h3 text-center font-weight-bold">Password</h1>
            <p class="text-subtitle-1 text-center mt-3">
              Enter your email with which your account was created
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="px-11">
            <v-text-field
              rounded
              solo
              height="70"
              placeholder="E-mail"
              label="E-mail"
              type="email"
              v-model="email"
            />
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
              @click="sendOtp"
              >send OTP
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
  name: "Forget",
  data() {
    return {
      logo: logo,
      email: "",
      loading: false,
      msg: "",
    };
  },
  methods: {
    ...mapActions(["forgotPassword"]),
    async sendOtp() {
      this.loading = true;
      try {
        await this.forgotPassword({ email: this.email });
      } catch (e) {
        this.$swal("Error", e.message, "error");
      }
      this.loading = false;
    },
  },
};
</script>

<style scoped></style>
