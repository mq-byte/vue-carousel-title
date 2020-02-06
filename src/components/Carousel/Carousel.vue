<template>
  <div ref="carousel" class="carousel" :style="{maxWidth:maxWidth+'px'}">
    <div
            :style="{lineHeight: carouselHeight?carouselHeight:arrowHeight}"
            @click="pre"
            class="pre arrow">
      &lt;
    </div>
      <div class="content" ref="content" :style="{transform:`translateX(${positionX})`}"><slot></slot></div>
    <div @click="next" :style="{lineHeight: carouselHeight?carouselHeight:arrowHeight}" class="next arrow">&lt;</div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data(){
    return {
      arrowHeight:'0px',
      positionX:'0px',
      positionNum:0
    }
  },
  props:{
    maxWidth:{
      default:700,
    },
    carouselHeight:{
      default: null
    },
    step:{
      default: 350
    }
  },
  mounted() {
    this.arrowHeight = this.$refs.carousel.clientHeight + 'px';
  },
  methods:{
    pre(){
      this.positionNum += this.step;
      if(this.positionNum>0){
        this.positionNum = 0;
      }
      this.positionX = this.positionNum+"px"
    },
    next(){
      let maxNum = this.maxWidth - this.$refs.content.clientWidth;
      this.positionNum -= this.step;
      if(this.positionNum<maxNum){
        this.positionNum = maxNum;
      }
      this.positionX = this.positionNum+"px"
    }
  }
}
</script>

<style scoped>
  .carousel{
    padding: 0 20px;
    position: relative;
    background: yellow;
    overflow: hidden;
  }
  .arrow{
    position: absolute;
    top: 0;
    cursor: pointer;
    width: 20px;
    background: white;
    user-select: none;
    z-index: 10;
  }
  .pre{
    left: 0;
  }
  .next{
    right: 0;
    direction: rtl
  }
  .content{
    width: max-content
  }
</style>
