<template>
    <div class="content-wrapper">
        <div class="loading-container" v-if="isLoading">
          <div class="loading-wrapper">
            <me-loading class="me-loading"></me-loading>
          </div>
        </div>
        <me-scroll ref="scroll">
           <div class="main-content">
                    <div class="pic" v-if="content.banner">
                        <a :href="content.banner.linkUrl">
                            <img @load=updateScroll :src="content.banner.picUrl" alt="" class="pic-img">
                        </a>
                    </div>
                    <div 
                    class="section" 
                    v-for="(section,index) in content.data" 
                    :key="index">
                        <h4 class="section-title">{{section.name}}</h4>
                        <ul class="section-list">
                            <li class="section-item" v-for="(item,i) in section.itemList" :key="i">
                                <a href="" class="section-link">
                                    <p class="section-pic" v-if="item.picUrl">
                                        <img :src="item.picUrl" alt="" class="section-img">
                                    </p>
                                    <p class="section-name">{{item.name}}</p>
                                </a>
                            </li>
                        </ul>
                    </div>
            </div>
        </me-scroll>
           
        <!-- <div class="loading" v-if="isLoading"></div> -->
    </div>
</template>
<script>
import MeLoading from '../../components/loading';
import MeScroll from '../../components/scroll';
import {getCategoryContent} from '../../API/category';
import { categoryNames } from './config';
export default{
    components:{MeLoading,MeScroll},
    props:{
        curId:{
            type:String,
            default:''
        }
    },
    data(){
        return {
            content:{},
            isBacktopVisible:false,
            isLoading:false
        }
    },
    methods:{
      getContent(id){
        getCategoryContent(id).then(data=>{
          if(data){
            this.content=data;
            console.log(data);
          }
        })
      },
      updateScroll(){

      }
    },
    watch:{
        curId(id) {
          this.getContent(id).then(()=>{this.isLoading=false;})
      }
    }
}
</script>
<style lang="scss">
  .content-wrapper{
    position:relative;
    height: 100%;
    overflow-y:scroll;
  }
  li{
      list-style:none;
    }
  .loading-container{
    width: 100%;
    height: 100%;
    position:absolute;
    top:0;
    left: 0;
    z-index:1000;
    display:flex;
    flex-direction: column;
    align-items:center;
    text-align:center;
      .me-loading {
      color: #fff;
      font-size: 14px;
   } 
  }
  .loading-wrapper{
    width:50%;
    padding:30px 0;
    background-color: #fff;
    border-radius:4px;
  }
  .main-content{
  padding:10px;
  }
  .pic{
    margin-bottom:12px;
    &-img{
       width: 100%;
    }
    &-link{
      display:block;
    }
  }
    .section{
      margin-bottom:12px;
      &:last-child{
        margin-bottom:0;
      }

      &-title{
        height: 28px;
        color:#080808;
        font-weight: bold;
      }

      &-item{
        width: (100%3)px;
      }
      &-link{
        display:block;
      }
      &-pic{
        position:relative;
        width: 80%;
        padding-bottom:80%;
        margin:0 auto;
      }

      &-img{
        position:absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
      }

      &-name{
        height: 36px;
        line-height:36px;
        text-align:center;
        //文字超出省略
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
      }
    }
    .g-backtop-container{
      bottom:10px;
    }
</style>