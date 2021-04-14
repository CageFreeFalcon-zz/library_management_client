<template>
  <v-container class="dashboard d-flex flex-column flex-grow-0 h-100-p">
    <v-row class="flex-grow-0">
      <v-col cols="4">
        <v-card rounded="xl" elevation="5">
          <v-card-text class="p-relative text-body-1" style="color: #205072">
            <h4>Books</h4>
            <h1>Counts</h1>
            <h1 class="text-right mt-3">3346</h1>
            <router-link
              to="/books/list"
              class="p-absolute quarter_icon text-decoration-none"
            >
              <v-icon dark size="sm">mdi-plus</v-icon>
            </router-link>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card rounded="xl" elevation="5">
          <v-card-text class="p-relative text-body-1" style="color: #205072">
            <h4>Books</h4>
            <h1>Issued</h1>
            <h1 class="text-right mt-3">3346</h1>
            <router-link
              to="/books/issue"
              class="p-absolute quarter_icon text-decoration-none"
            >
              <v-icon dark size="sm">mdi-plus</v-icon>
            </router-link>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card rounded="xl" elevation="5">
          <v-card-text class="p-relative text-body-1" style="color: #205072">
            <h4>Users</h4>
            <h1>Registered</h1>
            <h1 class="text-right mt-3">3346</h1>
            <router-link
              to="/users"
              class="p-absolute quarter_icon text-decoration-none"
            >
              <v-icon dark size="sm">mdi-account-search-outline</v-icon>
            </router-link>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" class="align-self-stretch d-flex overflow-hidden"></v-col>
      <v-col cols="6" class="align-self-stretch">
        <v-card rounded="xl" elevation="5" class="h-100-p">
          <v-card-text class="p-relative text-body-1" style="color: #205072">
            <h1>Notifications</h1>
            <div class="p-absolute quarter_icon">
              <v-icon dark size="sm">mdi-plus</v-icon>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  data: () => ({}),
};
</script>

<style lang="scss"></style>
