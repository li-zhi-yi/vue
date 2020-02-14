
<template>
    <div>
        <category-header></category-header>
        <div class="content">
            <div class="aside">
                <tab @switch-tab="getCurrentId"></tab>
            </div>
            <div class="main">
                <cmain :curId='curId'></cmain>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .content{
    width: 100%;
    height:667px;
    display:flex;
    box-sizing:border-box;
    padding:50px 0;
.aside{
    width:100px;
    height:100%;
    
}
.main{
    flex:1;
    height: 100%;
}
}

</style>
<script>
import CategoryHeader from './header';
import Tab from './tab';
import Cmain from './main';
export default{
    components:{CategoryHeader,Tab,Cmain},
    data(){
        return {
            curId:''
        }
    },
    methods:{
    getCurrentId(id){
        this.curId=id;
    }
}
}
</script>
<!--

<template>
    <div class="category">
        <category-header>
            <input type="text" slot="center" class="search">
            <i class="iconfont icon-msg" slot="right"></i>
        </category-header>
        <div class="g-content-container">
            <div class="sidebar">
                <tab></tab>
            </div>
            <div class="main">
                <content></content>
            </div>
        </div>
    </div>
</template>
<script>
import CategoryHeader from '../../components/header';
import Tab from './tab';
export default{
components:{CategoryHeader,Tab},
data(){
    return {
        items:[]
    }
}
}
</script>
<style lang="scss">
html,body{
    width: 100%;
    height: 100%;
}
.category{
    width: 100%;
    height:100%;
    padding-bottom:50px;
    overflow: hidden;
}
.search{
    width: 100%;
    border-radius:14px;
    box-shadow:none;
    border:1px solid gray;
}
.g-content-container{
    display:flex;
}
.sidebar{
    flex:2;
     background-color: #fff;
     overflow:scroll;

}
.main{
    flex:3;
}
</style>
-->