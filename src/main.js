import Vue from 'vue'
import App from './App.vue'
import axios from "axios"
import Router from './router'
import VueAxios from "vue-axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
    el: '#app',
    router: Router,
    render: h => h(App),
}).$mount('#app');
