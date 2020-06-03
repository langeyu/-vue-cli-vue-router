<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/page1">page1</router-link>
      <router-link to="/page2">page2</router-link>
    </div>
    <div>
      <router-link to="/user/小明">动态路由1</router-link>
      <router-link to="/user/小红">动态路由2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'App'
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
