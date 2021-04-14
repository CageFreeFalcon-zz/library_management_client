<template>
  <div>
    <v-text-field
      height="60"
      rounded
      autofocus
      solo
      label="New Password"
      append-icon="fas fa-key"
      type="email"
      v-model="pass"
    ></v-text-field>
    <v-btn
      rounded
      color="primary"
      large
      type="submit"
      width="100%"
      v-text="'Create New Password'"
      height="60"
      class="grad-btn"
      @click="createnewpass"
    ></v-btn>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CompleteNewPassword",
  components: {},
  data: () => ({
    pass: "",
  }),
  methods: {
    ...mapActions(["completePassword"]),
    createnewpass() {
      this.completePassword(this.pass);
    },
  },
};
</script>

<style lang="scss"></style>
