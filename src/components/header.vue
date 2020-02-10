<template>
    <div class="mine-navbar">
            <div class="mine-navbar-left" v-if="$slots.left">
            <slot name="left"></slot>
        </div>
        <div class="mine-navbar-center" v-if="$slots.center" >
            <slot name="center"></slot>
        </div>
        <div class="mine-navbar-right"  v-if="$slots.right">
            <slot name="right"></slot>
        </div>
        <h1 class="mine-navbar-title" v-if='title'>
            <span class="mine-navbar-text" v-text="title"></span>
        </h1>
    </div>
</template>
<script>
export default{
    props:{
        title:{
            type:String,
            default:''
        }
    }
}
</script>
<style lang="scss">
.mine-navbar{
   position:relative;
   display: flex;
   justify-content: space-between;
   align-items:center;
   height:50px;
   z-index: 1000;
   text-align:center;
   background-color:#fff;
    &-left{
    margin-left:10px;

    ~ .mine-navbar-right{
        position:static;
    };
    }
    &-center{
        flex:1;
        margin:0 10px;

        ~ .mine-navbar-right{
            position:static;
        }
    }
    &-right{
        position:absolute;
        right:10px;
        display:flex;
        align-items:center;
        justify-content: center;
        margin-right:10px;
    }
    &-text{
        width: 100%;
        font-size: 18px;
        text-align:center;
        line-height:1.5;
        //字体溢出省略号处理
        overflow: hidden;
        text-overflow: ellipsis;
        white-space:nowrap;
    }
    }

</style>