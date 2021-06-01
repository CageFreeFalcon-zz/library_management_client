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
          :type="showoldpass ? 'text' : 'password'"
          v-model="oldpass"
          :append-icon="showoldpass ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
          @click:append="showoldpass = !showoldpass"
        ></v-text-field>
        <v-text-field
          rounded
          solo
          height="70"
          placeholder="Password"
          label="Password"
          :type="shownewpass ? 'text' : 'password'"
          v-model="newpass"
          :append-icon="shownewpass ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
          @click:append="shownewpass = !shownewpass"
        ></v-text-field>
        <v-text-field
          rounded
          solo
          height="70"
          placeholder="Re Enter New Password"
          label="Re Enter New Password"
          type="password"
          v-model="re_newpass"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ChangePassword",
  data() {
    return {
      showoldpass: false,
      shownewpass: false,
      oldpass: "",
      newpass: "",
      re_newpass: "",
    };
  },
};
</script>

<style scoped></style>
