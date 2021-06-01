<template>
  <v-container class="d-flex flex-column h-100-p">
    <v-row align-content="center">
      <v-col>
        <v-sheet>
          <v-img
            :src="nosearch"
            width="80%"
            max-width="500px"
            class="mx-auto"
          />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import nosearch from "@/assets/images/nosearch.svg";

export default {
  name: "Search",
  data() {
    return {
      nosearch: nosearch,
    };
  },
};
</script>

<style scoped></style>
