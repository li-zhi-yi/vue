<template>
    <div class="mine-loading" :class="{'mine-loading-inline':inline}">
        <span class="mine-loading-indicator" v-if="indicator==='on'">
            <img src="./loading.gif" alt="loading">
            <span class="mine-loading-text" v-if='loadingText'>{{loadingText}}</span>
        </span>
    </div>
</template>
<style lang="scss">
.mine-loading{
    overflow: hidden;
    width: 100%;
    height: 100%;
      display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
     &.mine-loading-inline {
      flex-direction: row;
      .mine-loading-indicator ~ .mine-loading-text {
        margin-top: 0;
        margin-left: 6px;
      }
    }
}
.mine-loading-indicator ~ .mine-loading-text{
    margin-top:6px;
}
</style>
<script>
export default{
    props:{
        indicator:{
            type:String,
            default:'on',
            validator(value){
                return ['on','off'].indexOf(value)>-1;
            },
        },
        text:{
            type:String,
            default:'加载中...'
        },
        inline:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            loadingText:this.text
        }
    },
    watch:{
        text(text){
            this.loadingText=text
        }
    }

}
</script>