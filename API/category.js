import $http from 'axios';
import {SUCC_CODE,TIMEOUT} from './config';

const CancelToken=$http.CancelToken;
let cancel;
//获取内容数据--ajzx
export const getCategoryContent=(id)=>{
    // cancel&&cancel('取消了前一次的请求');
    // cancel=null;
    return $http.get(`http://www.imooc.com/api/category/content/${id}`, {
        timeout: TIMEOUT,
        cancelToken: new CancelToken(function executor(c) {
          cancel = c;
        })
      }).then(res => {
        if (res.data.code === SUCC_CODE) {
          console.log('ok');
          return res.data.content;
        }
        throw new Error('没有成功获取到数据！');
      }).catch(err => {
        if ($http.isCancel(err)) { // 取消前一次的请求
          console.log(err);
        } else {
          // handle error
          console.log(err);
        }
      });
}