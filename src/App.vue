<template>
  <div id="app">
    <h1>Django VueJs Template</h1>
    <div id="nav">
      <router-link :to="{ name: 'home' }">Vue</router-link>|
      <router-link :to="{ name: 'messages' }">Django Rest</router-link>
    </div>
    <main>
      <fade-transition origin="center" mode="out-in" :duration="250">
        <router-view />
      </fade-transition>
    </main>
  </div>
</template>

<script>
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
