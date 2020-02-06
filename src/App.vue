<template>
  <div id="app">
    <Carousel
            :carouselHeight="carouselHeight">
      <div v-for="(v,k) in 20" ref="sss" style="line-height:40px;background: red;float: left">eeeeeeeeee{{v}}</div>
    </Carousel>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
      carouselHeight:0
    }
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
