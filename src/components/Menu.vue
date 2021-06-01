<template>
  <v-menu bottom left offset-y class="white">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon color="primary">mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <v-list elevation="2">
      <v-list-item to="/dashboard">
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="profile">
        <v-list-item-icon>
          <v-icon>mdi-account-box</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/changepassword">
        <v-list-item-icon>
          <v-icon>mdi-account-box</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Change Password</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-btn color="primary" block rounded class="grad-btn" @click="signout"
          >Logout
        </v-btn>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Menu",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["signOut"]),
    async signout() {
      console.log("signing out");
      const res = await this.signOut();
      if (res !== undefined) {
        console.log(res.message);
      }
    },
  },
};
</script>

<style scoped></style>
