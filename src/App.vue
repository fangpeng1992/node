<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default {
  data() {
      return {
          account : '',
          password : ''
      }
  },
  methods:{
    
  }
}
</script>
<style lang="scss">
#app {
  .account {
    width: 200px;
  }
  .password {
    width: 200px;
  }
}
</style>