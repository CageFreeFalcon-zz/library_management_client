<template>
  <v-container class="d-flex flex-column h-100-p">
    <v-row class="flex-grow-0">
      <v-col class="pb-0 flex-grow-0">
        <v-btn icon rounded @click="goback">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-none d-md-flex flex-column justify-center">
        <v-img :src="logo" class="mx-auto flex-grow-0" max-width="400px" />
        <h1 class="text-h3 text-center font-weight-bold">Register</h1>
        <p class="text-lg-subtitle-1 text-center mt-3">
          Enter your details to register
        </p>
      </v-col>
      <v-col>
        <template v-if="step === 1">
          <v-row class="flex-grow-0 d-md-none">
            <v-col>
              <v-img width="200" :src="logo" class="mx-auto" />
              <h1 class="text-h3 text-center font-weight-bold">Register</h1>
              <p class="text-lg-subtitle-1 text-center mt-3">
                Enter your details to register
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="px-11">
              <v-alert
                border="left"
                color="red"
                dense
                text
                type="error"
                v-if="msg"
              >
                {{ msg }}
              </v-alert>
              <v-text-field
                rounded
                solo
                height="70"
                label="Full Name"
                placeholder="Full Name"
                type="text"
                v-model="userdata.name"
                append-icon="mdi-account"
              ></v-text-field>
              <v-text-field
                rounded
                solo
                height="70"
                placeholder="E-mail"
                label="E-mail"
                type="email"
                v-model="userdata.email"
                append-icon="mdi-email"
              ></v-text-field>
              <v-text-field
                rounded
                solo
                height="70"
                placeholder="Password"
                label="Password"
                v-model="userdata.password"
                :type="showpass ? 'text' : 'password'"
                :append-icon="
                  showpass ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
                "
                @click:append="showpass = !showpass"
              ></v-text-field>
              <v-text-field
                rounded
                solo
                height="70"
                placeholder="Re Enter Password"
                label="Re Enter Password"
                type="password"
                v-model="userdata.re_password"
                append-icon="mdi-shield-key-outline"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="flex-grow-0">
            <v-col class="px-11">
              <v-btn
                block
                color="primary"
                rounded
                elevation="3"
                class="grad-btn text--white font-weight-bold mx-auto"
                large
                @click="nextstep"
                >Next
              </v-btn>
            </v-col>
          </v-row>
        </template>
        <template v-if="step !== 1">
          <v-row class="flex-grow-0">
            <v-col class="pb-0 text-center">
              <span v-if="step === 2" class="mb-0">Academic Details</span>
              <span v-if="step === 3" class="mb-0">Personal Details</span>
              <span v-if="step === 4" class="mb-0">Notification</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="py-0">
              <v-stepper v-model="step">
                <v-stepper-header class="elevation-0">
                  <v-stepper-step :complete="step > 1" :step="1" />
                  <v-divider />
                  <v-stepper-step :complete="step > 2" :step="2" />
                  <v-divider />
                  <v-stepper-step :complete="step > 3" :step="3" />
                  <v-divider />
                  <v-stepper-step :step="4" />
                </v-stepper-header>

                <v-stepper-items>
                  <v-stepper-content :step="2">
                    <v-row>
                      <v-col>
                        <v-select
                          rounded
                          solo
                          height="70"
                          label="Course"
                          placeholder="Course"
                          :items="courses"
                          v-model="userdata.course"
                        />
                        <v-select
                          rounded
                          solo
                          height="70"
                          label="Department"
                          placeholder="Department"
                          :items="departments"
                          v-model="userdata.department"
                        />
                        <v-text-field
                          height="70"
                          rounded
                          solo
                          placeholder="Year of Admission"
                          label="Year of Admission"
                          append-icon="mdi-calendar"
                          type="number"
                          v-model="userdata.yoa"
                        />
                        <v-checkbox
                          v-if="userdata.course === 'B.Tech'"
                          color="primary"
                          v-model="userdata.islateral"
                          value="Islateral"
                          label="Lateral entry"
                          class="mt-0 ml-5"
                          hide-details
                        />
                      </v-col>
                    </v-row>
                  </v-stepper-content>
                  <v-stepper-content :step="3">
                    <v-row>
                      <v-col>
                        <div class="d-flex justify-center">
                          <div class="p-relative">
                            <v-avatar
                              width="200"
                              size="200"
                              @click="uploadimage"
                              class="mb-9 elevation-4"
                            >
                              <v-img
                                :src="image || placeholder"
                                position="center"
                                :max-width="image ? '200px' : '150px'"
                                :contain="!image"
                              />
                              <div class="picture_bottom">
                                <v-icon color="white">mdi-camera</v-icon>
                              </div>
                            </v-avatar>
                            <v-file-input
                              v-model="userdata.dp"
                              hide-input
                              @change="imagechanged"
                              ref="dp"
                              class="d-none"
                            />
                            <v-btn
                              fab
                              dark
                              small
                              elevation="0"
                              color="error"
                              class="close_btn"
                              v-if="image"
                              @click="clearimage"
                            >
                              <v-icon dark>mdi-close</v-icon>
                            </v-btn>
                          </div>
                        </div>
                        <v-text-field
                          rounded
                          solo
                          height="70"
                          label="Father's Name"
                          placeholder="Father's Name"
                          type="text"
                          v-model="userdata.fathername"
                          append-icon="mdi-human-male-boy"
                        />
                        <v-menu
                          v-model="menu2"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              rounded
                              solo
                              height="70"
                              label="Date of Birth"
                              placeholder="Date of Birth"
                              append-icon="mdi-calendar"
                              type="text"
                              v-model="userdata.dob"
                              v-bind="attrs"
                              v-on="on"
                            />
                          </template>
                          <v-date-picker
                            v-model="userdata.dob"
                            @input="menu2 = false"
                            no-title
                            scrollable
                            elevation="5"
                          />
                        </v-menu>
                        <v-text-field
                          rounded
                          solo
                          height="70"
                          label="Phone"
                          placeholder="Phone"
                          type="number"
                          v-model="userdata.phone"
                          append-icon="mdi-phone"
                        />
                        <v-text-field
                          rounded
                          solo
                          height="70"
                          label="Address"
                          placeholder="Address"
                          type="text"
                          v-model="userdata.address"
                          append-icon="mdi-crosshairs-gps"
                        />
                        <v-text-field
                          rounded
                          solo
                          height="70"
                          label="City"
                          placeholder="City"
                          type="text"
                          v-model="userdata.city"
                          append-icon="mdi-city"
                        />
                        <v-text-field
                          rounded
                          solo
                          height="70"
                          label="PIN Code"
                          placeholder="PIN Code"
                          type="number"
                          v-model="userdata.pin"
                          append-icon="mdi-map-marker-radius"
                        />
                      </v-col>
                    </v-row>
                  </v-stepper-content>
                  <v-stepper-content :step="4">
                    <v-row>
                      <v-col class="pa-0">
                        <v-img :src="notification" />
                      </v-col>
                    </v-row>
                    <v-row class="mt-n11" style="z-index: 1">
                      <v-col cols="12">
                        <span class="primary v-stepper__step__step mr-3">
                          <v-icon>mdi-check</v-icon>
                        </span>
                        <span>Notify when due date is comming</span>
                      </v-col>
                      <v-col>
                        <v-divider />
                      </v-col>
                      <v-col cols="12">
                        <span class="primary v-stepper__step__step mr-3">
                          <v-icon>mdi-check</v-icon>
                        </span>
                        <span>Updates regarding library</span>
                      </v-col>
                      <v-col>
                        <v-divider />
                      </v-col>
                      <v-col cols="12">
                        <span class="primary v-stepper__step__step mr-3">
                          <v-icon>mdi-check</v-icon>
                        </span>
                        <span>Sed ut perspiciatis unde omnis iste</span>
                      </v-col>
                    </v-row>
                  </v-stepper-content>
                </v-stepper-items>
              </v-stepper>
            </v-col>
          </v-row>
          <v-row class="flex-grow-0">
            <v-col cols="6">
              <v-btn
                width="100%"
                color="primary"
                rounded
                elevation="3"
                class="font-weight-bold"
                large
                outlined
                :disabled="loading"
                @click="step--"
                >Previous
              </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn
                width="100%"
                color="primary"
                rounded
                elevation="3"
                class="grad-btn text--white font-weight-bold"
                large
                @click="nextstep"
                :disabled="loading"
                :loading="loading"
                >{{ step === 4 ? "Submit" : "Next" }}
              </v-btn>
            </v-col>
          </v-row>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import logo from "@/assets/images/logo.svg";
import male from "@/assets/images/male.svg";
import notification from "@/assets/images/notification.svg";
import { mapActions } from "vuex";
import router from "@/router";

export default {
  name: "Register",
  data() {
    return {
      logo: logo,
      placeholder: male,
      image: undefined,
      notification: notification,
      step: 1,
      showpass: false,
      menu2: false,
      courses: ["B.Tech", "Diploma"],
      departments: ["CSE", "ME", "ECE", "CE", "EE"],
      userdata: {
        dp: undefined,
        name: "",
        email: "",
        password: "",
        course: "",
        department: "",
        yoa: "",
        fathername: "",
        dob: "",
        phone: "",
        address: "",
        city: "",
        pin: "",
        re_password: "",
        islateral: false,
      },
      msg: "",
      loading: false,
    };
  },
  methods: {
    ...mapActions(["signUp"]),
    async nextstep() {
      if (this.step === 4) {
        this.loading = true;
        const res = await this.signUp(this.userdata);
        console.log(res);
        if (res !== undefined) {
          this.msg = res.message;
          this.step = 0;
        }
        this.loading = false;
      }
      this.step++;
    },
    goback() {
      if (this.step === 1) {
        router.push("/");
      } else {
        this.step--;
      }
    },
    imagechanged(file) {
      this.image = URL.createObjectURL(file);
    },
    uploadimage() {
      this.$refs["dp"].$refs["input"].click();
    },
    clearimage() {
      this.image = undefined;
      this.userdata.dp = undefined;
    },
  },
};
</script>

<style scoped></style>
