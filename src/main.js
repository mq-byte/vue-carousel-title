import Vue from 'vue'
import App from './App.vue'
import Carousel from "./index"
// import Carousel from "../dist/carousel.umd"
// import Carousel from "vue-carousel-title";

Vue.config.productionTip = false

Vue.use(Carousel)


new Vue({
  render: h => h(App),
}).$mount('#app')
