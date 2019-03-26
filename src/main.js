// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

Vue.use(iView);
Vue.http.interceptors.push((request, next) => {
  request.headers.set('Pragma', 'no-cache');
  next((response) => {
    if (request.url === '/api/login/createAccount') {
      if (response.body.code !== 200) {
        router.replace('/workbench');
      }
    }
  });
});
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    next();
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
