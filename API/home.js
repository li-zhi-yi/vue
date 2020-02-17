import $http from 'axios';
import jsonp from '../src/assets/JS/jsonp'
import {SUCC_CODE,TIMEOUT,HOME_RECOMMEND_PAGE_SIZE, jsonpOptions} from './config.js'
export const getJsonp=()=>{
    console.log(jsonp)
};
// 打乱数组顺序
const shuffle = (arr) => {
    const arrLength = arr.length;
    let i = arrLength;
    let rndNum;
  
    while (i--) {
      if (i !== (rndNum = Math.floor(Math.random() * arrLength))) {
        [arr[i], arr[rndNum]] = [arr[rndNum], arr[i]];
      }
    }
  
    return arr;
  };

//获取幻灯片数据 --ajax
export const getHomeSlider=()=>{
return $http.get('http://www.imooc.com/api/home/slider',{
    timeout: TIMEOUT
}).then(res=>{
    if(res.data.code===SUCC_CODE){
        let sliders=res.data.slider;
        const slider = [sliders[Math.floor(Math.random()*sliders.length)]];
        sliders=shuffle(sliders.filter(()=>Math.random()>=0.5));
        if(sliders.length===0){
            sliders=slider;
        }
        return sliders;
    }
    throw new Error('没有成功获取数据');
}).catch(err=>{
    if(err){
        console.log(err);
    }
    return [
        {
            linkUrl: 'https://www.imooc.com',
            picUrl: require('../src/assets/img/404.png')
          } 
    ];
}).then(res=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(res);
        },1000)
    })
})
}

//获取热门的推荐数据 --jsonp
export  const getHomeRecommend=(page=1 ,psize=20)=>{
    const url="https://ju.taobao.com/json/tg/ajaxGetItemsV2.json";
    const params={
        page,
        psize,
        type:0,
        frontCatId:''
    };
    
    return jsonp(url,params,{
        param:'callback'
    }).then(res=>{
        console.log(res)
    })
    };

