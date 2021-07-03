<template>
  <v-app>
    <router-view name="appBar" />
    <v-main app>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import { API } from "aws-amplify";
// import { onCreateTransaction } from "./graphql/subscriptions";

export default {
  name: "App",
  // data: () => ({
  //   sub: null,
  // }),
  // async created() {
  //   this.sub = await API.graphql({
  //     query: onCreateTransaction,
  //   }).subscribe({
  //     next(value) {
  //       console.log(value);
  //     },
  //     error(errorValue) {
  //       console.log(errorValue);
  //     },
  //     start(subscription) {
  //       console.log(subscription);
  //     },
  //     complete() {
  //       console.log("completed");
  //     },
  //   });
  // },
  // beforeDestroy() {
  //   this.sub.unsubscribe();
  // },
};
</script>
