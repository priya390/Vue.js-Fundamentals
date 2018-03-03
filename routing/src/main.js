import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Users from './Users.vue';
import Home from './Home.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/users/:teamId' ,component: Users }, // Users route
  { path: '/home', component: Home} // Home route
];

const router = new VueRouter({
  routes, // routes: routes
  mode: 'history'
});
new Vue({
  el: '#app',
  router, // router: router
  render: h => h(App)
});
