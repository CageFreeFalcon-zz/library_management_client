<template>
  <v-app-bar
    app
    color="#E0ECDE"
    elevate-on-scroll
    height="60px"
    class="rounded-b-xl"
  >
    <v-img
      :src="logo"
      contain
      height="75%"
      class="flex-shrink-1"
      position="left"
    />

    <v-btn icon color="primary" to="/search">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-menu bottom left offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-badge
            :content="items.length"
            :value="items.length"
            color="white primary--text"
            overlap
          >
            <v-icon color="primary">mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-list elevation="0" outlined>
        <v-list-item v-for="item in items" :key="item.title">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    <Menu />
  </v-app-bar>
</template>

<script>
import logo from "@/assets/images/logo.svg";
import Menu from "@/components/Menu";

export default {
  name: "AppBar",
  components: {
    Menu,
  },
  data() {
    return {
      logo: logo,
      count: 5,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", to: "/dashboard" },
        { title: "Profile", icon: "mdi-account-box", to: "/profile" },
        { title: "Change Password", icon: "mdi-account-box", to: "/profile" },
      ],
    };
  },
};
</script>

<style scoped></style>
