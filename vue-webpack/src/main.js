import Vue from 'vue';
import App from './App.vue';
import Message from './Message.vue';

Vue.component('app-message', Message) // Making component for displaying content of Message.vue 

new Vue({
  el: '#app',
  render: h => h(App)
})
