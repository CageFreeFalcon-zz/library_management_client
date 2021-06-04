<template>
  <v-container class="d-flex flex-column h-100-p">
    <v-row class="flex-grow-0">
      <v-col class="pb-0">
        <v-btn icon rounded :to="backPath">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-none d-md-flex flex-column justify-center">
        <v-img max-width="400" :src="logo" class="mx-auto flex-grow-0" />
        <h1 class="text-h3 text-center font-weight-bold">Enter OTP</h1>
        <p class="text-subtitle-1 text-center mt-3">
          Check your registered email for OTP
        </p>
      </v-col>
      <v-col class="d-flex flex-column align-self-md-center">
        <v-row class="flex-grow-0 d-md-none">
          <v-col>
            <v-img width="200" :src="logo" class="mx-auto" />
            <h1 class="text-h3 text-center font-weight-bold">Enter OTP</h1>
            <p class="text-subtitle-1 text-center mt-3">
              Check your registered email for OTP
            </p>
          </v-col>
        </v-row>
        <v-row class="flex-grow-0 px-8 confirm_signup">
          <v-col cols="2" v-for="(f, i) in field" :key="i" class="px-2">
            <v-text-field
              height="70"
              rounded
              solo
              type="text"
              v-model="field[i]"
              ref="field"
              hide-details
              @input="gotonext(i)"
            />
          </v-col>
        </v-row>
        <v-row class="px-11">
          <v-col class="pa-0 d-flex justify-end">
            <v-btn
              class="text-right"
              @click="resendCode"
              text
              :loading="resendLoading"
              >Resend OTP
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="flex-grow-0">
          <v-col class="px-11">
            <v-btn
              block
              large
              rounded
              color="primary"
              elevation="3"
              class="grad-btn text--white font-weight-bold mx-auto"
              @click="submitform"
              :loading="loading"
              >Submit OTP
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import logo from "@/assets/images/logo.svg";
import { mapActions, mapMutations } from "vuex";
import router from "@/router";

export default {
  name: "Otp",
  data() {
    return {
      logo: logo,
      field: ["", "", "", "", "", ""],
      backPath: this.$route.params.type === "registration" ? "/" : "/forgot",
      loading: false,
      resendLoading: false,
    };
  },
  methods: {
    ...mapActions([
      "confirmSignUp",
      "resendConfirmationCode",
      "forgotPassword",
    ]),
    ...mapMutations(["setOtp"]),
    gotonext(i) {
      if (i < 5) {
        if (this.$refs["field"][i].$refs["input"].value !== "") {
          this.$refs["field"][i + 1].focus();
        }
      }
      if (i > 0) {
        if (this.$refs["field"][i].$refs["input"].value === "") {
          this.$refs["field"][i - 1].focus();
        }
      }
    },
    async submitform() {
      var otp = this.field.join("");
      this.loading = true;
      if (this.$route.params.type === "registration") {
        try {
          await this.confirmSignUp({ code: otp });
        } catch (e) {
          this.$swal("Error", e.message, "error");
        }
      } else if (this.$route.params.type === "forgotPassword") {
        this.setOtp(otp);
        router.push({ name: "NewPassword", params: { type: "forgot" } });
        this.loading = false;
      }
    },
    async resendCode() {
      this.resendLoading = true;
      if (this.$route.params.type === "registration") {
        try {
          const res = await this.resendConfirmationCode();
          this.$swal("Success", res.message, "success");
        } catch (e) {
          this.$swal("Error", e.message, "error");
        }
      } else if (this.$route.params.type === "forgotPassword") {
        try {
          const res = await this.forgotPassword({
            email: this.$store.getters.getEmail,
            type: "resend",
          });
          this.$swal("Success", res.message, "success");
        } catch (e) {
          this.$swal("Error", e.message, "error");
        }
      }
      this.resendLoading = false;
    },
  },
  mounted() {
    this.$refs["field"].forEach((el) => {
      el.$refs["input"].setAttribute("maxlength", 1);
    });
    if (this.$route.query.msg) {
      this.$swal("", this.$route.query.msg, "success");
    }
  },
};
</script>

<style scoped></style>
