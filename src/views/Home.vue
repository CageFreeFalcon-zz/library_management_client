<template>
  <v-container class="h-100-p">
    <v-row>
      <v-col cols="12" md="6">
        <v-img width="300" :src="logo" class="ma-auto" />
        <h1 class="text-h2 text-center">Library</h1>
      </v-col>
      <v-col cols="12" md="6">
        <v-carousel
          height="300"
          :show-arrows="false"
          active-class="test"
          cycle
          interval="3000"
        >
          <v-carousel-item v-for="img in carouselItem" :key="img">
            <v-sheet width="400" light class="ma-auto">
              <v-img :src="img" contain />
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
        <v-btn
          width="100%"
          color="primary"
          rounded
          elevation="3"
          class="grad-btn text--white mt-9"
          large
          >Get started</v-btn
        >
        <p class="text-lg-subtitle-1 text-center mt-3">
          Already ave an account <span>Sign In</span>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import logo from "@/assets/images/logo.svg";
import home1 from "@/assets/images/home1.svg";
import home2 from "@/assets/images/home2.svg";
import home3 from "@/assets/images/home3.svg";

export default {
  name: "Home",
  data() {
    return {
      logo: logo,
      carouselItem: {
        home1,
        home2,
        home3,
      },
    };
  },
};
</script>

<style scoped></style>
