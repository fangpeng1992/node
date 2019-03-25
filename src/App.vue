<template>
<div id="app">
  <input class="form-control" id="inputEmail3" placeholder="请输入账号" v-model="account">
  <input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码" v-model="password">
  <button type="submit" class="btn btn-default" @click="login">登录</button>
</div>
</template>

<script>
    import Vue from 'vue';
    import VueResource from 'vue-resource';
    Vue.use(VueResource);
    
    export default {
      data() {
          return {
              account : '',
              password : ''
          }
      },
      methods:{
        login() {
          Vue.http.get('/api/login/getAccount').then((response) => {
              let params = { 
                account : this.account,
                password : this.password
              };
              return Vue.http.post('/api/login/createAccount',params);
            }).then((response) => {
              console.log(response)
            }).catch((reject) => {
              console.log(reject)
            });
        }
      }
    }
</script>