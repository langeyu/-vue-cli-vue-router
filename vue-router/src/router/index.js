import Vue from 'vue'
import Router from 'vue-router'
import page1 from "../components/page1"
import page2 from "../components/page2"
import notFound from "../components/notFound"
import user from "../components/user"
import first from "../components/first"
import second from "../components/second"
import method1 from "../components/method1"
import method2 from "../components/method2"
import method3 from "../components/method3"
import login from "../components/login"


Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/page1',
      name: 'page1',
      component: page1,
      children: [
        {
          path: 'first',
          name: 'first',
          component: first
        },
        {
          path: 'second',
          name: 'second',
          component: second
        }
      ],
      beforeEnter: (to, from, next) => {
        console.log(to);
        console.log(from);
        next(false)
      }
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2,
      children: [
        {
          path: 'method1/:title',
          name: 'method1',
          component: method1
        },
        {
          path: 'method2',
          name: 'method2',
          component: method2
        },
        {
          path: 'method3',
          name: 'method3',
          component: method3
        }
      ]
    }, {
      //配置路径未找到的路由
      path: '*',
      name: 'notFound',
      component: notFound
    },
    {
      //使用冒号标记，当匹配到的时候，参数值会被设置到this.$route.params中
      path: '/user/:name',
      name: user,
      component: user
    }, {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
