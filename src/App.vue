<template>
  <div id="app" class="g-container">
    <div class="g-view-container">
      <router-view></router-view>
    </div>
    <div class="footer">
      <tabbar></tabbar>
    </div>
  </div>
</template>

<style lang="scss">
html,
body{
  width: 100%;
  height: 100%;
  margin:0 auto;
}
.g-container {
  width: 100%;
  height: 100%;
  min-width: 320px;
  max-width: 640px;
  position:relative;
  overflow: hidden;
  // margin:0 auto;
}
.g-view-container{
  width:100%;
  height: 100%;
  padding-bottom:50px;
  overflow: hidden;
}
.footer {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 1000;
}
</style>
<script>
import Tabbar from './components/tabbar';
export default {
  //注册组件
  components: {
    Tabbar
  },
  mounted() {
   
  }
};
</script>
