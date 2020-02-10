<template>
    <div class="slider-wapper">
      <!-- <me-loading v-if="!sliders.length"></me-loading> -->
  <me-slider 
  :data="sliders"
  :direction="direction"
  :loop='loop'
  :interval="interval"
  :pagination="pagination"
  v-if="sliders.length"
  >
<swiper-slide v-for="(item,index) in sliders" :key='index'>
  <a href="item.linkUrl" alt="" class="slider-link">
    <img :src="item.picUrl" alt="" class="slider-img">
  </a>
</swiper-slide>
  </me-slider>
    </div>
</template>
<script>
//引入swiper 轮播图插件
import {swiperSlide} from 'vue-awesome-swiper';
import MeSlider from '../../components/swiper.vue';
import {sliderOptions} from './config';
// import {getHomeSlider} from '../../API/home.js'
// require styles
import 'swiper/dist/css/swiper.css'
  export default {
    components:{MeSlider,swiperSlide},
    data() {
      return {
        direction:sliderOptions.direction,
        loop:sliderOptions.loop,
        interval:sliderOptions.interval,
        pagination:sliderOptions.pagination,
        sliders:[
          {
         'linkUrl':'https://www.imooc.com',
         'picUrl':require('./1.jpg')
        },
        {
         'linkUrl':'https://www.imooc.com',
         'picUrl':require('./2.jpg')
        },
        {
         'linkUrl':'https://www.imooc.com',
         'picUrl':require('./3.jpg')
        },{
         'linkUrl':'https://www.imooc.com',
         'picUrl':require('./4.jpg')
        }
        ]
      }
    },
    created(){
      // this.getSliders()
    },
    methods:{
      //    update() {
      //   return this.getSliders();
      // },
      // getSliders(){
      //   getHomeSlider().then(data=>{
      //     console.log(data)
      //   })
      // }
    }
  }
</script>
<style lang="scss">
.slider-wapper{
  width: 100%;
  height: 183px;
}
.slider-link{
  display: block;
}
.slider-link,
.slider-img{
overflow: hidden;
width: 100%;
height: 100%;
}
</style>