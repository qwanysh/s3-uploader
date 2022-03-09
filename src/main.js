import Vue from "vue";
import Buefy from "buefy";
import App from "./App.vue";
import "buefy/dist/buefy.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

Vue.config.productionTip = false;
Vue.use(Buefy, {
  defaultIconPack: "fas",
  defaultContainerElement: "#content",
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
