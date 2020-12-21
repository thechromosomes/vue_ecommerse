import Vue from 'vue'
import App from './App.vue'
import Element from "element-ui";
import axios from "axios";



Vue.config.productionTip = false
Vue.use(Element);


// window.Bus = new Vue();
const axiosConfig = axios.create();
window.axios = axiosConfig;



new Vue({
  render: h => h(App),
}).$mount('#app')


