<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-avatar width="200" size="200" class="elevation-4">
          <v-img :src="dp" position="center" />
        </v-avatar>
      </v-col>
      <v-col cols="12">
        <h1>{{ userdata.name }}</h1>
        <h3>
          <v-icon left color="secondary">mdi-human-male-boy</v-icon>
          {{ userdata.family_name }}
        </h3>
        <h4>
          <v-icon left color="secondary">mdi-email</v-icon>
          {{ userdata.email }}
          <v-icon v-if="userdata.email_verified" color="info">
            mdi-check-decagram
          </v-icon>
          <v-btn v-else color="success" rounded small @click="verify('email')">
            verify
          </v-btn>
        </h4>
        <h4>
          <v-icon left color="secondary">mdi-phone</v-icon>
          {{ userdata.phone_number }}
          <v-icon v-if="userdata.phone_number_verified" color="info">
            mdi-check-decagram
          </v-icon>
          <v-btn v-else color="success" rounded small @click="verify('phone')">
            verify
          </v-btn>
        </h4>
        <h4>
          <v-icon left color="secondary">mdi-cake-variant</v-icon>
          {{ userdata.birthdate }}
        </h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2>
          <v-icon color="secondary" left>mdi-school</v-icon>
          Academic Details
        </h2>
        <div class="pl-12">
          <h4>
            Course
            <v-icon left color="secondary">mdi-chevron-right</v-icon>
            {{ userdata["custom:course"] }}
            {{ userdata["custom:islateral"] === "true" ? "(Lateral)" : "" }}
          </h4>
          <h4>
            Department
            <v-icon left color="secondary">mdi-chevron-right</v-icon>
            {{ userdata["custom:department"] }}
          </h4>
          <h4>
            Batch
            <v-icon left color="secondary">mdi-chevron-right</v-icon>
            {{ userdata["custom:yoa"] }}
          </h4>
        </div>
      </v-col>
      <v-col cols="12">
        <h2>
          <v-icon color="secondary" left>mdi-map-marker</v-icon>
          Address Details
        </h2>
        <div class="pl-12">
          <h4>
            Street
            <v-icon left color="secondary">mdi-chevron-right</v-icon>
            {{ userdata.address }}
          </h4>
          <h4>
            City
            <v-icon left color="secondary">mdi-chevron-right</v-icon>
            {{ userdata["custom:city"] }}
          </h4>
          <h4>
            PIN
            <v-icon left color="secondary">mdi-chevron-right</v-icon>
            {{ userdata["custom:pin"] }}
          </h4>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Auth, Storage } from "aws-amplify";

export default {
  name: "Profile",
  data() {
    return {
      userdata: {
        sub: "",
        name: "",
        family_name: "",
        email: "",
        email_verified: false,
        phone_number: "",
        phone_number_verified: false,
        picture: "",
        birthdate: "",
        address: "",
        "custom:pin": "",
        "custom:department": "",
        "custom:yoa": "",
        "custom:city": "",
        "custom:course": "",
      },
      dp: "",
    };
  },
  methods: {
    verify(field) {
      this.$swal("Verification", field + " under verification", "success");
    },
  },
  async mounted() {
    const { attributes } = await Auth.currentAuthenticatedUser();
    this.userdata = attributes;
    this.dp = await Storage.get(attributes.picture);
  },
};
</script>

<style scoped></style>
