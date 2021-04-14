<template>
  <v-app>
    <v-main class="auth-background" style="background-size: contain !important">
      <v-container fluid>
        <v-row>
          <v-col cols="4" offset="1" class="py-16">
            <v-img :src="logo" max-width="350px" class="mx-auto mb-10"></v-img>
            <component :is="getAuthState" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Logo from "../assets/images/logo.svg";
import { mapGetters } from "vuex";

export default {
  name: "authLayout",
  data() {
    return {
      logo: Logo,
    };
  },
  computed: {
    ...mapGetters(["getAuthState"]),
    name() {
      return this.data;
    },
  },
};
</script>

<style scoped></style>
