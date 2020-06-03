<template>
  <div>
    <h1>user</h1>
    <p>欢迎{{msg}}</p>
  </div>


</template>

<script>
    export default {
        name: "user",
        data(){
            return{
                msg:this.$route.params.name
            }
        },
        watch:{
            $route(to,from){
                this.msg=this.$route.params.name
            }
        }
    }
</script>

<style scoped>

</style>
