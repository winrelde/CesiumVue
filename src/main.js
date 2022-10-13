import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as Cesium from 'cesium/Cesium'
import * as widgets from 'cesium/Widgets/widgets.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Element)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.prototype.Cesium = Cesium
Vue.prototype.widgets = widgets

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')