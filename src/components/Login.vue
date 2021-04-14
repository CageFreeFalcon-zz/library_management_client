<template>
  <div>
    <v-alert
      border="left"
      elevation="12"
      outlined
      text
      color="error"
      v-if="msg"
    >
      {{ this.msg }}
    </v-alert>
    <v-text-field
      height="60"
      rounded
      autofocus
      solo
      label="Username"
      append-icon="fas fa-user"
      type="email"
      v-model="user.email"
    ></v-text-field>
    <v-text-field
      height="60"
      rounded
      solo
      label="Password"
      append-icon="fas fa-key"
      type="password"
      v-model="user.pass"
    ></v-text-field>
    <v-checkbox label="Remember me" class="mt-0 mb-2 ml-6"></v-checkbox>
    <v-btn
      :loading="loading"
      rounded
      color="primary"
      large
      block
      type="submit"
      height="60"
      class="grad-btn"
      @click.prevent="csignup"
      >Sign in</v-btn
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {},
  data: () => ({
    user: {
      email: "",
      pass: "",
    },
    msg: null,
    loading: false,
  }),
  methods: {
    ...mapActions(["signUp"]),
    async csignup() {
      this.loading = true;
      this.signUp(this.user).then((data) => {
        this.msg = data.message;
        this.loading = false;
      });
    },
  },
};
</script>

<style lang="scss"></style>
