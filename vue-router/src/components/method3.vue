<template>
  <div>
    <p>{{msg}}</p>
  </div>
</template>

<script>
    export default {
        name: "method2",
        data(){
            return{
                msg:this.$route.query.title
            }
        },
        watch:{
            $route(to,from){
                this.msg=to.query.title
            }
        }
    }
</script>

<style scoped>

</style>
