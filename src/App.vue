<template>
  <div id="app">
    <Carousel
            :carouselHeight="carouselHeight">
      <div v-for="(v,k) in itemNum" ref="sss" style="line-height:40px;background: red;float: left;opacity: .5;">{{v}}eeeeeeeeee{{v}}</div>
    </Carousel>
    <button @click="a">减少</button>
    <button @click="b">增加</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
      carouselHeight:0,
      itemNum:2
    }
  },
  methods:{
    a(){this.itemNum--},
    b(){this.itemNum++}
  },
  mounted() {
    // let i = 50;
    // setInterval(()=>{
    //   this.$refs.sss.style.height = i+"px";
    //   this.carouselHeight = i+'px';
    //   i += 50;
    // },1000)
  }
}
</script>

<style>
body{
  background: aquamarine;
}
</style>
