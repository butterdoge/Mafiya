import { createStore } from 'vuex'
import {getArticles,updateArticle,createArticle} from "../kit/api";
export default createStore({
  state: {
    articles:null,
  },
  mutations: {
  },
  actions: {
    //简单工程感觉不需要写mutations
    injectArticles({state},payload){
      getArticles(payload).then(res=>{
        state.articles=res.data;
        console.log("获取数据成功");
      });
    },
    updateArticle(_,payload){
      updateArticle(payload).then(res=>{
        if(res.status==200){
          console.log("修改文章成功");
        }else{
          console.log("修改文章不太顺利。")
        }
      });
    },
    createArticle({dispatch},payload){
      createArticle(payload).then(res=>{
        if(res.status==200){
          console.log("文章创建成功");
          dispatch("getArticles");
        }
      })
    }
  },
  modules: {
  }
})
