<template>
      <!-- swiper -->
      <swiper :options="swiperOption" >
        <slot></slot>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
</template>

<script>
 import {swiper} from 'vue-awesome-swiper';
  export default {
    components:{swiper},
    data() {
      return {
        swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>
