import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

const MY_ICONS = {
  // complete: "...",
  // cancel: "...",
  // close: "...",
  // delete: "...",
  // clear: "fas fa-times",
  // success: "...",
  // info: "...",
  // warning: "...",
  // error: "...",
  // prev: "...",
  // next: "...",
  // checkboxOn: "...",
  // checkboxOff: "...",
  // checkboxIndeterminate: "...",
  // delimiter: "...",
  // sort: "...",
  // expand: "...",
  // menu: "...",
  // subgroup: "...",
  // dropdown: "...",
  // radioOn: "...",
  // radioOff: "...",
  // edit: "fas fa-pen",
  // ratingEmpty: "...",
  // ratingFull: "...",
  // ratingHalf: "...",
  // loading: "...",
  // first: "...",
  // last: "...",
  // unfold: "...",
  // file: "..."
};

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#56c596",
        secondary: "#205072",
        accent: "#2c6975",
        error: "#f75010",
        info: "#47cacc",
        success: "#7be495",
        warning: "#ffcf5c",
        // est: "#82ba90",
      },
    },
  },
  icons: {
    iconfont: "mdi",
    values: MY_ICONS,
  },
});
