<template>
    <div class="g-tabbar">
        <router-link class="g-tabbar-item" to='/home'>
            <i class="iconfont icon-home"></i>
            <span>首页</span>
        </router-link>
         <router-link class="g-tabbar-item" to='/category'>
            <i class="iconfont icon-category"></i>
            <span>分类页</span>
        </router-link>
         <router-link class="g-tabbar-item" to='/cart'>
            <i class="iconfont icon-cart"></i>
            <span>购物车</span>
        </router-link>
         <router-link class="g-tabbar-item" to='/personal'>
            <i class="iconfont icon-personal"></i>
            <span>个人中心</span>
        </router-link>
    </div>
</template>
<style lang="scss">
@import '../assets/scss/variables';
@import '../assets/scss/mixins';
.g-tabbar{
    display:flex;
    width: 100%;
    height:50px;
    background-color: #fff;
    align-items:center;
    &-item{
        text-align:center;
        flex:1;
        display:flex;
        flex-direction: column;
        align-items:center;
        text-align:center;
    }
}
.router-link-active{
    color:$link-active-color;
}
</style>