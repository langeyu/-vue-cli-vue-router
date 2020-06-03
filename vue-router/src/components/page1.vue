<template>
  <div>
    <h3>page1</h3>
    <p>{{msg}}</p>
    <router-link to="/page1/first">first</router-link>
    <router-link to="/page1/second">second</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "page1",
        data() {
            return {
                msg: "我是page1组件"
            }
        }
    }
</script>

<style scoped>

</style>
