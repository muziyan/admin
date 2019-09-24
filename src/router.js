import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Home from "./views/Home";
import UserEdit from "./views/UserEdit";
import UserList from "./views/UserList";
import ColumnEdit from "./views/ColumnEdit";
import ColumnList from "./views/ColumnList";
import ArticleEdit from "./views/ArticleEdit";
import ArticleLIst from "./views/ArticleLIst";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children:[
        {path:"/",component:Home},
        {path:"/user/add",name:"userAdd",component: UserEdit},
        {path:"/user/list",name:"userList",component: UserList},
        {path:"/user/edit/:id",name:"userEdit",component: UserEdit,props:true},

        {path:"/column/add",name:"columnAdd",component: ColumnEdit},
        {path:"/column/list",name:"columnList",component: ColumnList},
        {path:"/column/edit/:id",name:"columnEdit",component: ColumnEdit,props:true},

        {path:"/article/add",name:"articleAdd",component: ArticleEdit},
        {path:"/article/list",name:"articleList",component: ArticleLIst},
        {path:"/article/edit/:id",name:"articleEdit",component: ArticleEdit,props:true}
      ]
    },
  ]
})
