import Vue from "vue";
import App from "@/App.vue";
import store from "@/store";
import router from "@/router";
import MainKit from "@/plugins/main-kit";
import "./registerServiceWorker";

Vue.config.productionTip = false;

// Vue.use(VueRouter)
Vue.use(MainKit);

const vue = new Vue({
  router,
  store,
  render: h => h(App)
});

vue.$mount("#app");
