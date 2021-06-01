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
        <v-img width="200" :src="logo" class="mx-auto flex-grow-0" />
        <h1 class="text-h3 text-center font-weight-bold">New Password</h1>
        <p class="text-lg-subtitle-1 text-center mt-3">
          Try to remember the new password
        </p>
      </v-col>
      <v-col class="d-flex flex-column align-self-md-center">
        <v-row class="flex-grow-0 d-md-none">
          <v-col>
            <v-img width="200" :src="logo" class="mx-auto" />
            <h1 class="text-h3 text-center font-weight-bold">New Password</h1>
            <p class="text-lg-subtitle-1 text-center mt-3">
              Try to remember the new password
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
            >
              {{ msg }}
            </v-alert>
            <v-text-field
              rounded
              solo
              height="70"
              placeholder="Password"
              label="Password"
              :type="showpass ? 'text' : 'password'"
              v-model="password"
              :append-icon="
                showpass ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
              "
              @click:append="showpass = !showpass"
            ></v-text-field>
            <v-text-field
              rounded
              solo
              height="70"
              placeholder="Re Enter Password"
              label="Re Enter Password"
              type="password"
              v-model="re_password"
              append-icon="mdi-shield-key-outline"
            ></v-text-field>
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
              >submit
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
  name: "NewPassword",
  data() {
    return {
      logo: logo,
      showpass: false,
      password: "",
      re_password: "",
      msg: "",
      loading: false,
    };
  },
  methods: {
    ...mapActions(["forgotPasswordsubmit", "completePassword"]),
    async submitform() {
      this.loading = true;
      if (this.$route.params.type === "reset") {
        const res = await this.completePassword({
          password: this.password,
          re_password: this.re_password,
        });
        if (res !== undefined) {
          this.msg = res.message;
        }
      } else if (this.$route.params.type === "forgot") {
        const res = await this.forgotPasswordsubmit({
          password: this.password,
          re_password: this.re_password,
        });
        if (res !== undefined) {
          this.msg = res.message;
        }
      }
      this.loading = false;
    },
  },
};
</script>

<style scoped></style>
