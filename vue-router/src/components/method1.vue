<template>
 <div>
   <p>{{msg}}</p>
 </div>
</template>

<script>
    export default {
        name: "method1",
        data(){
            return{
                msg:this.$route.params.title
            }
        },
        watch:{
            $route(to,from){
                this.msg=to.params.title
            }
        },
        beforeRouteEnter (to, from, next) {
            console.log('进入路由了')
            next();
        },
        //路由修改时调用
        beforeRouteUpdate(to,from,next){
            console.log("路由修改了")
            next();
        },
        //路由离开时调用
        beforeRouteLeave(to,from,next){
            console.log("路由离开了")
            next();
        },
    }
</script>

<style scoped>

</style>
