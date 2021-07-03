import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Amplify from "aws-amplify";
import VueSweetalert2 from "vue-sweetalert2";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import "sweetalert2/dist/sweetalert2.min.css";
import vuetify from "./plugins/vuetify";

import aws_exports from "./aws-exports";
import "./scss/main.scss";

import "./registerServiceWorker";

Amplify.configure(aws_exports);
// window.LOG_LEVEL = "DEBUG";

Vue.use(VueSweetalert2);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
