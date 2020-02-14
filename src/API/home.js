import axios from 'axios';

//成功
const success=0;

//获取幻灯片事件--ajax
export const getHomeSlider = () =>{
    return axios.get('http://www.imooc.com/api/home/slider').then(res=>{
        if(res.data.code ===success){
            return res.data.slider;
        }
        
        throw new Error('没有成功获取到数据!');
    }).catch(err=>{
        if(err){
            console.log(err)
        }
    })
    }
