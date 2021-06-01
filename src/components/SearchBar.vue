<template>
  <v-app-bar app color="#E0ECDE" elevate-on-scroll>
    <v-btn icon color="primary" to="/dashboard">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-text-field
      rounded
      solo
      dense
      placeholder="Search"
      label="Search"
      type="text"
      append-icon="mdi-magnify"
      hide-details
    />
    <Menu />
  </v-app-bar>
</template>

<script>
import Menu from "@/components/Menu";

export default {
  name: "AppBar",
  components: {
    Menu,
  },
};
</script>

<style scoped></style>
