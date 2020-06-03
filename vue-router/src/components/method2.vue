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
                msg:this.$route.params.title
            }
        },
        watch:{
            $route(to,from){
                this.msg=to.params.title
            }
        }
    }
</script>

<style scoped>

</style>
