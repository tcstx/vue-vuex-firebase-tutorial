<template>
  <div id="app">
    <button @click="toggleMe">Toggle Me</button>
    <hr/>
    <img v-if="isTrue" src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
  import firebase from "./firebase"

  export default {

    name: 'app',
    computed: {
      isTrue: function () {
        return this.$store.getters.isTrue;
      }
    },
    methods: {
      toggleMe: function () {
        this.$store.dispatch('toggle');
      }
    },
    created: function () {
      this.$store.dispatch('getFirebaseData');
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
