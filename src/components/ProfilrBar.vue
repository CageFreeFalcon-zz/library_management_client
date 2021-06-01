<template>
  <v-app-bar app color="#E0ECDE" elevate-on-scroll>
    <v-btn icon color="primary">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-app-bar-title>Profile</v-app-bar-title>
    <v-spacer />
    <Menu />
  </v-app-bar>
</template>

<script>
import logo from "@/assets/images/logo.svg";
import Menu from "@/components/Menu";

export default {
  name: "AppBar",
  components: { Menu },
  data() {
    return {
      logo: logo,
    };
  },
};
</script>

<style scoped></style>
