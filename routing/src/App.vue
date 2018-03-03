<template>
  <div id="app">
    <h1>Let's go somewhere!</h1>
    <hr/>
    <router-link to="/home">Home</router-link>
    <router-link to="/users/10">Users of team 10</router-link> <!-- Using routing component -->
    <router-link to="/users/12">Users of team 12</router-link>
    <hr/>
    <router-view></router-view> <!-- View of the called router -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
