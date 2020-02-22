<template>
  <div ref="carousel" class="carousel" :class="{normal:normal}" :style="{maxWidth:maxWidth+'px',width:width+'px'}">
    <div
            :style="{lineHeight: carouselHeight?carouselHeight:arrowHeight}"
            @click="pre"
            class="pre arrow">
      &lt;
    </div>
      <div class="content-box" :style="{padding:`0 ${padding}px`}">
        <div style="overflow: hidden">
          <div class="content" ref="content" :style="{transform:`translateX(${positionX})`}">
            <slot></slot>
          </div>
        </div>
      </div>
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
      positionNum:0,
      normal:false,
      width:0
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
    },
    padding:{
      default:20,
    }
  },
  mounted() {
    this.arrowHeight = this.$refs.carousel.clientHeight + 'px';
    this.normal = this.$refs.content.clientWidth < this.maxWidth;
    this.width = this.$refs.content.clientWidth;

    let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

    console.log(MutationObserver);

    let observer = new MutationObserver(()=>{
      this.normal = this.$refs.content.clientWidth < this.maxWidth;
      this.width = this.$refs.content.clientWidth;
    });
    console.log(this.$refs.content);
    observer.observe(this.$refs.content,{attributes:true,subtree: true,childList:true});
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
      if(this.positionNum<maxNum-this.padding*2){
        this.positionNum = maxNum-this.padding*2;
      }
      console.log(maxNum,this.positionNum);
      this.positionX = this.positionNum+"px"
    },
    resize(e){
      console.log(e)
    }
  }
}
</script>

<style scoped>
  .carousel{
    padding: 0 20px;
    position: relative;
    overflow: hidden;
  }
  .carousel.normal{
    padding: 0;
  }
  .carousel.normal>.arrow{
    display: none;
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
    direction: rtl;
  }
  .content{
    width: max-content;
    overflow: hidden;
    transition: .5s;
  }
  .content-box{
    overflow: hidden;
    /*background: white;*/
  }
</style>
