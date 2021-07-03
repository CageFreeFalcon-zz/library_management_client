<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field
          rounded
          solo
          height="70"
          placeholder="Password"
          label="Password"
          :type="showOldPassword ? 'text' : 'password'"
          v-model="oldPassword"
          :append-icon="
            showOldPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
          "
          @click:append="showOldPassword = !showOldPassword"
        ></v-text-field>
        <v-text-field
          rounded
          solo
          height="70"
          placeholder="New Password"
          label="New Password"
          :type="showNewPassword ? 'text' : 'password'"
          v-model="newPassword"
          :append-icon="
            showNewPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
          "
          @click:append="showNewPassword = !showNewPassword"
        ></v-text-field>
        <v-text-field
          rounded
          solo
          height="70"
          placeholder="Re Enter New Password"
          label="Re Enter New Password"
          type="password"
          v-model="reNewPassword"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          color="primary"
          block
          rounded
          elevation="3"
          class="grad-btn text--white font-weight-bold"
          large
          @click="changePass"
          >Change Password
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ChangePassword",
  data() {
    return {
      showOldPassword: false,
      showNewPassword: false,
      oldPassword: "",
      newPassword: "",
      reNewPassword: "",
    };
  },
  methods: {
    ...mapActions(["changePassword"]),
    async changePass() {
      try {
        await this.changePassword({
          oldPassword: this.oldPassword,
          newPassword: this.newPassword,
          reNewPassword: this.reNewPassword,
        });
        this.$swal("Success", "Password Changed Successfully", "success");
      } catch (e) {
        this.$swal("Error", e.message, "error");
      }
    },
  },
};
</script>

<style scoped></style>
