<template>
  <div class="home">
    <home-header class="header" v-show="visible">
      <i class="iconfont icon-scan" slot="left"></i>
      <div slot="center">搜索框</div>
      <i class="iconfont icon-msg" slot="right"></i>
    </home-header>
    <home-slider></home-slider>
  </div>
</template>
<style lang="scss">
.home {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
</style>
<script>
import HomeHeader from "../../components/header";
import HomeSlider from "./slider";
export default {
  components: { HomeHeader ,HomeSlider},
  data() {
    return {
      visible: true
    };
  },
  methods: {
    //API
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
    goTOsearch() {
      this.$router.push("/search");
    }
  }
};
</script>