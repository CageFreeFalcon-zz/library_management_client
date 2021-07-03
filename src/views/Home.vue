<template>
  <v-container class="d-flex flex-column h-100-p">
    <v-row>
      <v-col class="d-none d-md-flex align-center">
        <v-carousel
          height="350"
          :show-arrows="false"
          interval="3000"
          delimiter-icon="mdi-circle-small"
          hide-delimiter-background
          hide-delimiters
          cycle
        >
          <v-carousel-item v-for="img in carouselItem" :key="img">
            <v-sheet width="400" light class="ma-auto">
              <v-img :src="img" contain />
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col class="d-flex flex-column justify-center">
        <v-row class="flex-grow-0 my-9">
          <v-col>
            <v-img width="300" :src="logo" class="mx-auto" />
            <h1 class="text-h2 text-center">Library</h1>
          </v-col>
        </v-row>
        <v-row class="d-md-none">
          <v-col>
            <v-carousel
              height="350"
              :show-arrows="false"
              interval="3000"
              delimiter-icon="mdi-circle-small"
              hide-delimiter-background
              hide-delimiters
              cycle
            >
              <v-carousel-item v-for="img in carouselItem" :key="img">
                <v-sheet width="400" light class="ma-auto">
                  <v-img :src="img" contain />
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
        <v-row class="flex-grow-0">
          <v-col>
            <router-link to="register" class="text-decoration-none">
              <v-btn
                width="100%"
                color="primary"
                rounded
                elevation="3"
                class="grad-btn text--white font-weight-bold"
                large
                >Get started
              </v-btn>
            </router-link>
            <p class="text-lg-subtitle-1 text-center mt-3">
              Already ave an account
              <router-link to="login" class="text-decoration-none">
                <span class="text--secondary font-weight-bold">Sign In</span>
              </router-link>
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import logo from "../assets/images/logo.svg";
import home1 from "../assets/images/home1.svg";
import home2 from "../assets/images/home2.svg";
import home3 from "../assets/images/home3.svg";

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
  mounted() {
    if (this.$route.query.msg) {
      this.$swal("Success", this.$route.query.msg, "success");
    }
  },
};
</script>

<style scoped></style>
