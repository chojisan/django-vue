import Vue from "vue";
import Router from "vue-router";
import VueDemo from "@/components/VueDemo";
import Messages from "@/components/Messages";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: VueDemo
    },
    {
      path: "/messages",
      name: "messages",
      component: Messages
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
