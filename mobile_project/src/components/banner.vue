<template>
  <div class="banner">
    <div class="swiper-container b-box">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="v in imgList">
          <img :src="v" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  export default {
    name:'app_banner',
    data(){
      return {
        imgList:[
          'static/img/b1.jpg',
          'static/img/b2.jpg',
          'static/img/b3.jpg',
          'static/img/b4.jpg',
          'static/img/b5.jpg'
        ]
      }
    },
    mounted(){
      let mySwiper = new Swiper('.swiper-container',{
        effect : 'coverflow',
        autoplay:{
          delay:3000,
          disableOnInteraction:false,
        },
        scrollbar: {
          el: '.swiper-scrollbar'
        },
        pagination :{
          el: '.swiper-pagination',
          clickable :true
        }

      });
    }
  }
</script>
<style lang="less">
  @rem : 75rem;
  .banner{
    height:350/@rem;
  }
  img{
    border:none;
    vertical-align: top;
  }
  .banner img {
    width: 100%;
    height: 350/@rem;
  }
</style>
