<template>
  <div>
      <input type="text" v-model="message">
      <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            message: ''
        }
    }
}
</script>