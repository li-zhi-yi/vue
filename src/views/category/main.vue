<template>
    <div>
        <div class="loading-wrapper">
            <me-loading></me-loading>
        </div>
            <div class="content">
                    <div class="pic" v-if="content.banner">
                        <a :href="content.banner">
                            <img src="" alt="">
                        </a>
                    </div>
                    <div class="section" v-for="(section,index) in content.data" :key="index">
                        <h4 class="section-title">{{section.name}}</h4>
                        <ul class="section-list">
                            <li class="section-item" v-for="(item,i) in section.itemList" :key="i">
                                <a href="" class="section-link">
                                    <p class="section-pic" v-if="item.picUrl">
                                        <img src="item.picUrl" alt="" class="section-img">
                                    </p>
                                    <p class="section-name">{{item.name}}</p>
                                </a>
                            </li>
                        </ul>
                    </div>
            </div>
        <!-- <div class="loading" v-if="isLoading"></div> -->
    </div>
</template>
<script>
import MeLoading from '../../components/loading';
import {getCategoryContent} from '../../API/category';
import { categoryNames } from './config';
export default{
    components:{MeLoading},
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
            let contents=storage.get(CATEGORY_CONTENT_KEY);
            let updateTime;
            const curTime=new Date().getTime();
        }
    }
}
</script>
<style long="scss">
  
</style>