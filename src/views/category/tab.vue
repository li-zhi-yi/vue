<template>
            <ul class="tab">
             <!-- <happy-scroll color="rgba(0,0,0,0.5)" > -->
            <li class="tab-item" v-for="(item ,index) in items" :key="index"
            :class="{'tab-item-active':item.id===curId}"
            @click="switchTab(item.id)"
         >{{item.name,}}</li>
         <!-- </happy-scroll> -->
        </ul>
</template>
<script>
import {categoryNames} from './config';
export default{
    data(){
        return {
            curId:''
        }
    },
    created(){
        this.init();
        this.switchTab(this.items[0].id)
    },
    methods:{
        init(){
            this.items=categoryNames
        },
        switchTab(id){
            // console.log(id);
            if(this.curId===id){
                return;
            }
            this.curId=id;
            // console.log(this.curId);
            this.$emit('switch-tab',this.curId);
        }
    },
    watch:{
        // curId(){
        //     this.$emit('switch-tab',id);
        // }
    }
}
</script>

<style lang="scss">
.tab{
    width: 100%;
    height:567px;
    padding-left:0;
    // padding-toop
    overflow-y:auto;
    margin-top:0;
    &-item{
        margin:0;
        height:46px;
        background-color: #fff;
        border-right:1px solid #e5e5e5;
        border-bottom:1px solid #e5e5e5;
        color:#080808;
        font-size: 14px;
        font-weight: blod;
        text-align:center;
        line-height:46px;
        //文字溢出省略号显示
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        &:last-child{
            border-bottom:none;
        }

    }
}
.tab-item-active{
     background: none;
     border-right:none;
     color:#f23030;
}
</style>