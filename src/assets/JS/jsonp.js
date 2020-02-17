import jsonp from 'jsonp';
/*
 param{
        page:1,
        psize:20
    }
    page=1&psize:20
*/ 
const parseParam= param =>{
    let params=[];
    
    for (const key in param){
        params.push([[key],param[key]]);
    }
    return params.map(value=>value.join('=')).join('&');
    //[ [page,1], [pszie:20]]
    //[page=1,psize=20]
    //page=1&psize=20
};

export default (url,data,options)=>{
    url+=(url.indexOf('?')<0? "?" : "&")+parseParam(data);

    return new Promise((resolve,reject)=>{
        jsonp(url,options,(err,data)=>{
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })
    })
}
