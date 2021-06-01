<template>
  <v-app>
    <router-view name="appBar" />
    <v-main app>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({}),
};
</script>
