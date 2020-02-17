<template>
    <div class="nav-content">
        <ul>
            <li v-for="(item,index) in items" :key="index">
                <a :href="item.linkUrl">
                    <img :src="item.picUrl" alt="photo">
                    <span>{{item.text}}</span>
                </a>
            </li>
                
        </ul>
    </div>
</template>
<style lang="scss">
.nav-content{
    ul{
        margin-top:0;
        margin-bottom:0;
        width: 100%;
        height: 150px;
        padding-left:0;
        display:flex;
        flex-wrap: wrap;
        text-align:center;
        justify-content: space-evenly;
        li{
            width: 75px;
            display:flex;
            flex-direction: column;
            align-items:center;
            display: flex;
            flex-direction:column;
            align-items:center;
            justify-content: center;
            font-size: 14px;
            color:black;
            img{
                display: block;
                width: 40px;
                height:40px
            }
        }
    }
}
</style>
<script>
    export default{
        data(){
            return {
                items:[
         {
    linkUrl: 'https://www.imooc.com',
    picUrl: require('./img/nav-item-1.png'),
    text: '拍卖'
    },
    {
    linkUrl: 'https://www.imooc.com',
    picUrl: require('./img/nav-item-2.png'),
    text: '拍卖'
    },
    {
    linkUrl: 'https://www.taobao.com',
    picUrl: require('./img/nav-item-3.png'),
    text: '拍卖'
    },
    {
    linkUrl:'https://www.taobao.com',
    picUrl: require('./img/nav-item-4.png'),
    text: '拍卖'
    },
    {
    linkUrl: 'https://www.taobao.com',
    picUrl: require('./img/nav-item-5.png'),
    text: '拍卖'
    },
    {
    linkUrl: 'https://www.taobao.com',
    picUrl: require('./img/nav-item-6.png'),
    text: '拍卖'
    },
    {
    linkUrl:'https://www.taobao.com',
    picUrl: require('./img/nav-item-7.png'),
    text: '拍卖'
    },
    {
    linkUrl: 'https://www.taobao.com',
    picUrl: require('./img/nav-item-8.png'),
    text: '拍卖'
    },
    {
    linkUrl: 'https://www.taobao.com',
    picUrl: require('./img/nav-item-9.png'),
    text: '拍卖'
    },
    {
    linkUrl: 'https://www.taobao.com',
    picUrl: require('./img/nav-item-10.png'),
    text: '拍卖'
    }
        ]
            }
        },
        methods:{

        }
    }
</script>