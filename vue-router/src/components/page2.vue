<template>
  <div>
    <h1>page2</h1>
    <p>{{msg}}</p>
    <router-link to="/page2/method1/我是传参方式1">传参1</router-link>
    <a @click="fnc">传参2</a>
    <a @click="fnc2">传参3</a>
    <a @click="fnc3">传参4</a>
    <router-view></router-view>
  </div>

</template>

<script>
    export default {
        name: "page2",
        data() {
            return {
                msg: '我是page2组件',
                title:'我是传参方式2'
            }
        },
        methods:{
            fnc:function () {
                this.$router.push(`/page2/method1/${this.title}`)
            },
            fnc2:function () {
                this.$router.push({name:'method2',params:{title:'我是传参方式3'}})
            },
            fnc3:function () {
                // this.$router.push({name:'method3',query:{title:'我是传参方式4'}})
                this.$router.push({path:'method3',query:{title:'我是传参方式4'}})
            }

        }
    }
</script>

<style scoped>

</style>
