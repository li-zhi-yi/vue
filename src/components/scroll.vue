<template>
    <swiper :options="swiperOption" ref="swiper">
        <swiper-slide>
            <slot></slot>
        </swiper-slide>
        <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
    </swiper>
</template>
<style lang="scss">
.swiper-container{
    overflow:hidden;
    width: 100%;
    height: 100%;
}

.swiper-slide{
    height:auto;
}
</style>
<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper';
import {
    PULL_DOWN_HEIGHT,
    PULL_DOWN_TEXT_INIT,
    PULL_DOWN_TEXT_START,
    PULL_DOWN_TEXT_ING,
    PULL_DOWN_TEXT_END,
    PULL_UP_HEIGHT,
    PULL_UP_TEXT_INIT,
    PULL_UP_TEXT_START,
    PULL_UP_TEXT_ING,
    PULL_UP_TEXT_END
} from '../assets/JS/scroll';
export default{
components:{
    swiper,
    swiperSlide
},
props:{
    scrollbar:{
        type: Boolean,
        default: true
    },
    data:{
        type:[Array,Object]
    }
},
data(){
    return {
         pulling: false,
        pullDownText: PULL_DOWN_TEXT_INIT,
        pullUpText: PULL_DOWN_TEXT_INIT,//没有
        swiperOption: {
          direction: 'vertical',//滚动条的位置  垂直
          slidesPerView: 'auto',//页面看到几张图片
          freeMode: true,//自由模式 随便滚动  false只能滚动固定的距离
          setWrapperSize: true,
          scrollbar: {
            el: this.scrollbar ? '.swiper-scrollbar' : null,
            hide: true
          },
          on: {
            sliderMove: this.scroll,
            touchEnd: this.touchEnd,
            // transitionEnd: this.scrollEnd
          }
        }
    }
}
}
</script>