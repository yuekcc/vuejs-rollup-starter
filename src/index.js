import Vue from "vue/dist/vue.runtime.esm";

import TPL from "./index.template.html";

new Vue({
  el: "#app",
  data: {
    name: "Tom"
  },
  ...TPL
});
