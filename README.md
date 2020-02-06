# vue-carousel-title

### Get Started
 1. 安装`vue-carousel-title`
 ```bash
    npm i --save  vue-carousel-title
 ```

 2. 如何使用

 ```js
 import Carousel from 'vue-carousel-title'

 Vue.use(Carousel)
 ```

 ```html
 <Carousel
             :carouselHeight="组件高度，默认为子元素高度"
             :maxWidth="最长宽度，默认为700"
             :step="点击移动距离，默认为350"
     >
       <div v-for="(v,k) in 20" ref="sss" style="line-height:40px;background: red;float: left">eeeeeeeeee{{v}}</div>
     </Carousel>
 ```

### 演示
![演示地址](https://raw.githubusercontent.com/QiuyangQ/vue-track-navigation-bar/master/navigation.gif)

