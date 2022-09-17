import Axios from "axios";
import qs from "qs";
// 首先对axios进行封装，涉及到路由操作。

if (window.localStorage.getItem("token")) {
    Axios.defaults.headers.common["Authorization"] =
        `Bearer ` + window.localStorage.getItem("token");
}
// 如果本地已经有了登入记录的token，则将它保存在请求头内部。

//配置基础的api地址。
export let instance = Axios.create({
    baseURL:
        process.env.NODE_ENV === "production"
            ? "http://sayhub.me/api"
            : "http://localhost:3000/users",
});
// 根据生产环境的差异设置不同的baseURL。

export const createArticle=(info)=>{
    console.log("创建一篇文章。")
    return instance.post("/addArticle",qs.stringify(info));
}

export const getArticles=()=>{
    console.log("获取文章记录");
    return instance.get("/articles");
}

export const updateArticle=(payload)=>{
    console.log("修改文章记录");
    return instance.post("/changeArticle",qs.stringify(payload));
    //payload的内容由页面使用的时候自己控制。
}