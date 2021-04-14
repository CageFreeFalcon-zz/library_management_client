<template>
  <v-app>
    <v-app-bar
      v-if="below_md"
      color="transparent"
      app
      floating
      absolute
      elevation="0"
      class="d-print-none"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      app
      floating
      :temporary="below_md"
      v-model="drawer"
      width="315px"
      class="d-print-none"
    >
      <template v-slot:prepend>
        <v-img
          alt="Vuetify logo"
          class="mx-12 mt-6 mb-3"
          :src="logo"
          transition="scale-transition"
        />
        <div
          class="text-h5 text--lighten-3 text-center"
          v-text="'Username'"
        ></div>
        <v-divider />
      </template>

      <template>
        <v-list shaped>
          <v-list-item to="/" color="primary">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>Home</v-list-item-content>
          </v-list-item>

          <v-list-group no-action>
            <template v-slot:activator>
              <v-list-item-icon>
                <v-icon>mdi-book</v-icon>
              </v-list-item-icon>
              <v-list-item-content>Books</v-list-item-content>
            </template>

            <v-list-item to="/books/list">
              <v-list-item-icon>
                <v-icon>mdi-book-search</v-icon>
              </v-list-item-icon>
              <v-list-item-content>List</v-list-item-content>
            </v-list-item>

            <v-list-item to="/books/addnew">
              <v-list-item-icon>
                <v-icon>mdi-book-plus</v-icon>
              </v-list-item-icon>
              <v-list-item-content>Add New</v-list-item-content>
            </v-list-item>

            <v-list-item to="/books/issue">
              <v-list-item-icon>
                <v-icon>mdi-book-play</v-icon>
              </v-list-item-icon>
              <v-list-item-content>Issue</v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-item to="/users" color="primary">
            <v-list-item-icon>
              <v-icon>mdi-account-supervisor</v-icon>
            </v-list-item-icon>
            <v-list-item-content>Users</v-list-item-content>
          </v-list-item>

          <v-list-item to="/barcode/generate" color="primary">
            <v-list-item-icon>
              <v-icon>mdi-barcode</v-icon>
            </v-list-item-icon>
            <v-list-item-content>Generate Labels</v-list-item-content>
          </v-list-item>
        </v-list>
      </template>

      <template v-slot:append>
        <div class="pb-4 px-2">
          <v-btn
            block
            color="primary"
            :loading="loading"
            rounded
            @click="componentLogOut"
            class="grad-btn elevation-0"
          >
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-main
      app
      class="main-background"
      style="background-size: contain !important"
    >
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import logo from "./../assets/images/logo.svg";
import { mapActions } from "vuex";

export default {
  name: "main",
  data() {
    return {
      logo: logo,
      drawer: true,
      loading: false,
    };
  },
  methods: {
    ...mapActions(["logOut"]),
    async componentLogOut() {
      this.loading = true;
      try {
        await this.logOut();
      } catch (e) {
        alert("Something is not correct");
        this.loading = false;
      }
    },
  },
  computed: {
    below_md() {
      return this.$vuetify.breakpoint.mdAndDown;
    },
  },
  watch: {
    below_md(newValue) {
      this.drawer = !newValue;
    },
  },
  mounted() {
    console.log(this.$vuetify);
  },
};
</script>

<style scoped lang="scss"></style>
