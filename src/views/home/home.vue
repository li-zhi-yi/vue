<template>
  <div class="home">
    <home-header class="header" >
      <i class="iconfont icon-scan" slot="left"></i>
      <div slot="center">搜索框</div>
      <i class="iconfont icon-msg" slot="right"></i>
    </home-header>
    <div class="home-container">
       <home-scroll 
       :data="recommends"
       ref="scroll"
       >
      <home-slider></home-slider>
      <home-nav></home-nav>
      <home-recommend></home-recommend>
    </home-scroll>
    <router-view></router-view>
    </div>
  
     <!-- pullDown
      pullUp
      @pull-down="pullToRefresh"
      @pull-up="pullToLoadMore"
      @scroll-end="scrollEnd"
      @scroll="scroll"
      @pull-down-transition-end="pullDownTransitionEnd" -->
   
    
  </div>
</template>
<style lang="scss">
.home {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  &-container{
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    
  }
}
</style>
<script>
import HomeHeader from "../../components/header";
import HomeSlider from "./slider";
import HomeNav from './nav';
import HomeScroll from '../../components/scroll';
import HomeRecommend from './recommend';
export default {
  components: { 
    HomeScroll,
    HomeHeader ,
    HomeSlider,
    HomeNav,
    HomeRecommend
    },
  data() {
    return {
      recommends:[],
    };
  },
  methods: {
  getRecommends(recommends){
    this.recommends=recommends;
  },
  pullToRefrsh(end){

  },
  pullToLoadMore(end){

  },
  scroll(translate,scroll,pulling){

  },
  pullDownTransitionEnd(){

  },
  backToTop(){

  },
  changeHeaderStatus(){
  
  }

  }
};
</script>