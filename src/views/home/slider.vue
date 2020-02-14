<template>
  <div class="slider-wapper">
    <me-loading v-if="!sliders.length" class=""></me-loading>
      <me-slider
     :direction="direction"
     :loop="loop"
     :interval="interval"
     :pagination="pagination"
     v-else
     >
        <swiper-slide
                v-for="(item, index) in sliders"
                :key="index"
              >
              <a :href="item.linkUrl" alt="" class='slider-link'>
                <img :src="item.picUrl" alt="" class='slider-img'>
              </a>
        </swiper-slide>
    </me-slider>

  </div>
</template>
<style lang="scss">
.slider-wapper{
  width: 100%;
  height: 183px;
  .slider-link{
    display:block;
    .slider-img{
      overflow:hidden;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
<script>
import MeSlider from '../../components/swiper';
import {swiperSlide} from 'vue-awesome-swiper';
import {sliderOptions} from './config';
import {getHomeSlider} from '../../API/home'
import MeLoading from '../../components/loading'
  export default{
    components:{
      MeSlider,
      swiperSlide,
      MeLoading
    },
    data(){
      return {
        direction: sliderOptions.direction,
        loop: sliderOptions.loop,
        interval: sliderOptions.interval,
        pagination: sliderOptions.pagination,
        sliders:[
        //    {
        //  'linkUrl':'https://www.imooc.com',
        //  'picUrl':require('./1.jpg')
        // },
        // {
        //  'linkUrl':'https://www.imooc.com',
        //  'picUrl':require('./2.jpg')
        // },
        // {
        //  'linkUrl':'https://www.imooc.com',
        //  'picUrl':require('./3.jpg')
        // },{
        //  'linkUrl':'https://www.imooc.com',
        //  'picUrl':require('./4.jpg')
        // }
        ]
      }
    },
    created(){
      // console.log(sliderOptions)
      this.getSliders();
    },
    methods:{
      // update(){
      //   return this.getSliders()
      // },
      getSliders(){
        return getHomeSlider().then(data=>{
          console.log(data)
          this.sliders=data;
        })
      }
    }
  }
</script>