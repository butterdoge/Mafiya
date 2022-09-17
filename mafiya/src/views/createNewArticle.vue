<template>
  <div style="justify-content: space-between;align-items: center;">
    <el-card style="width:80%;margin:100px auto">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="封面图片:">
            <el-input v-model="temp.coverpage"></el-input>
          </el-form-item>
          <el-form-item label="大标题:">
            <el-input v-model="temp.h1"></el-input>
          </el-form-item>
          <el-form-item label="中标题:">
            <el-input v-model="temp.h2"></el-input>
          </el-form-item>
          <el-form-item label="小标题:">
            <el-input v-model="temp.h3"></el-input>
          </el-form-item>
          <el-form-item label="作者:">
            <el-input v-model="temp.author"></el-input>
          </el-form-item>

          <h1>正文内容</h1>
          <editor v-model="temp.content" ></editor>
        </el-form>

        <el-button @click="create">创建文章</el-button>
    </el-card>
  </div>
</template>

<script>
import { createArticle} from '../kit/api'
import editor from '../components/Editor';
export default {
  name: "createNewArticle",
  data(){
    return{
      temp:{
        h1:"",
        content:"",
        h2:"",
        h3:"",
        author:"",
        coverpage:""
      },
    }
  },
  components:{
    editor
  },
  methods:{
    create(){
      this.$message("创造成功");
      createArticle({
        H1:this.temp.h1,
        Content:JSON.stringify(this.temp.content),
        H2:this.temp.h2,
        H3:this.temp.h3,
        Author:this.temp.author,
        coverpage:this.temp.coverpage,
      });
    }
  }
}
</script>

<style scoped>
#out{
  padding:50px;
  border-width: 2px;
  border-style: solid;
  margin:100px 100px;
  border-radius: 30px;
}
</style>