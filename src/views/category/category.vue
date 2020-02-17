
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
    overflow:hidden;
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
        console.log(this.curId)
    }
}
}
</script>
