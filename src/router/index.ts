//在vue-router引入createRouter和createWebHashHistory
import {createRouter,createWebHashHistory} from "vue-router";

//定义路由，每个路由都需要映射到一个组件。
const routes = [
  { 
    name:'father',
    path: '/father', 
    component: () => import("../components/father.vue") 
  },
  {
    name:'son',
    path:'/son',
    component: () => import("../components/son.vue")
  },
  {
    name:'home',
    path:'/',
    component: () => import("../view/showSelectComponent.vue")
  },
]

//创建路由实例并传递routes配置
const router = createRouter({
  //内部提供了history模式的实现。
  history: createWebHashHistory(),
  routes, //'routes: routes' 的缩写
})

//暴露出router实例。方便在其他组件更改路由
//这样可以在任意组件中以 this.$router的形式访问它，并且以this.$route的形式访问当前路由
export default router;