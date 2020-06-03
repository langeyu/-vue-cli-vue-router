// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {

  if (true) {
    // 假设未登录
    next();
  } else {
    if(to.path=='/login'){ //如果是登录页面路径，就直接next()
      next();
    } else { //不然就跳转到登录；
      next('/login');
    }
  }
})
//全局路由改变后钩子
router.afterEach((to, from) => {
  //将滚动条恢复到最顶端
  window.scrollTo(0, 0)
  console.log(11111111111)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
