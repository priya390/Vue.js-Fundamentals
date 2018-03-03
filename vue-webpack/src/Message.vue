<template>
  <div>
      <h1>Vue.js is awesome!</h1>
      <app-input></app-input> <!-- Using the component of input -->
  </div>
</template>

<script>
    import Input from './Input.vue';

    export default {
        components: { // Making component for contents Input.vue
            'app-input' : Input
        }
    }
</script>