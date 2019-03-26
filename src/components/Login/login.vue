<template>
<div class="login">
    <Input v-model="account" class="account"></Input>
    <Input v-model="password" class="password"></Input>
    <Button type="primary" @click="login">登录</Button>
</div>
</template>
<script>
    import Vue from 'vue'
    import VueResource from 'vue-resource'
    Vue.use(VueResource)
    export default {
        data() {
            return {
                account: '',
                password: ''
            }
        },
        methods: {
            login() {
                Vue.http.post('/api/login/createAccount', {account: this.account, password: this.password}).then((response) => {
                    if (response.body.code === 200) {
                        this.$router.push('helloworld')
                    } else {
                        this.$Message.error(response.body.message);
                    }
                });
            }
        }
    }
</script>
<style>
.login{
    width: 1000px;
    height: 600px;
    text-align: center;
}
</style>