<template>
  <div>
    <div id="page-wrapper">

      <!-- Header -->
      <section id="header">
        <div class="container">
          <!-- Logo -->
          <h1 id="logo"><a href>{{form.H1}}</a></h1>
          <p>{{form.H2}}</p>
          <!-- Nav 导航栏部分选取API-->
          <nav id="nav">
            <ul>
<!--              这边的部分需要调取API后然后渲染。-->
              <li><a class="icon solid fa-home" href="../index.html"><span>欢迎回家</span></a></li>
              <li><a class="icon solid fa-home" @click="drawer=true"><span>店长书信</span></a></li>
<!--              分界线-->
              <li><a class="icon solid fa-cog" @click="art1"><span>交换or创造&nbsp;</span></a></li>
              <li><a class="icon solid fa-retweet" @click="art2"><span>玻璃花园&nbsp;&nbsp;</span></a></li>
              <li><a class="icon solid fa-sitemap" @click="art3"><span>加入我们&nbsp;</span></a></li>
<!--              分界线-->
            </ul>
          </nav>
        </div>
      </section>


<!--     侧边栏的文章菜单-->
      <el-drawer
          v-model="drawer"
          direction="ltr"
          :before-close="handleClose"
      >
        <el-card v-for="article in articles" :key="article.ArticleID">
          <el-button @click="read(article)">
            {{article.H1}}
          </el-button>
        </el-card>
        <el-button type="info"> <router-link to="/createNewArticle">创建新文章</router-link></el-button>
      </el-drawer>

      <!-- Main 这边是文章-->
      <section id="main">
        <div class="container">
          <div id="content">
            <!-- Post -->
            <article class="box post">
              <header>
                <h2>{{form.H3}}</h2>
              </header>
              <span class="image featured"><img :src="form.coverpage" ></span>

<!--              文章的正式渲染区域。-->
              <editor v-model="form.Content" :edit="false">

              </editor>

              <p></p>
            </article>
          </div>
        </div>

        <el-button  @click="dialogVisible = true"
        >文章修改</el-button
        >

<!--        修改窗口-->
        <el-dialog
            v-model="dialogVisible"
            title="文章修改"
            width="70%"
            :before-close="handleClose"
        >
          <el-form ref="edit" :model="edit" label-width="80px">

            <el-form-item label="封面图片:">
              <el-input v-model="edit.temp.coverpage"></el-input>
            </el-form-item>
            <el-form-item label="大标题:">
              <el-input v-model="edit.temp.H1"></el-input>
            </el-form-item>
            <el-form-item label="中标题:">
              <el-input v-model="edit.temp.H2"></el-input>
            </el-form-item>
            <el-form-item label="小标题:">
              <el-input v-model="edit.temp.H3"></el-input>
            </el-form-item>
            <el-form-item label="作者:">
              <el-input v-model="edit.temp.Author"></el-input>
            </el-form-item>
            <el-form-item label="编辑者:">
              <el-input v-model="edit.editor"></el-input>
            </el-form-item>
            <h1>正文内容</h1>
            <editor v-model="edit.temp.Content" ></editor>
          </el-form>
          <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="confirm"
        >提交修改</el-button
        >
      </span>
          </template>
        </el-dialog>
      </section>



      <!-- Footer 底部信息栏-->
      <section id="footer">
        <div class="container">
          <header>
            <h2>了解更多 或者 加入我们&nbsp;&nbsp;</h2>
          </header>
          <div class="row">
            <div class="col-6 col-12-medium">
              <section>
                <form method="post" action="#">
                  <div class="row gtr-50">
                    <div class="col-6 col-12-small">
                      <input name="name" placeholder="Name" type="text" />
                    </div>
                    <div class="col-6 col-12-small">
                      <input name="email" placeholder="Email" type="text" />
                    </div>
                    <div class="col-12">
                      <textarea name="message" placeholder="Message"></textarea>
                    </div>
                    <div class="col-12">
                      <a href="#" class="form-button-submit button icon solid fa-envelope">Send Message</a>
                    </div>
                  </div>
                </form>
              </section>
            </div>
            <div class="col-6 col-12-medium">
              <section>
                <p>mafiya的团队可能很小，但是欢迎每一个愿意加入我们的朋友。</p>
                <p>期待//&nbsp;</p>
                <div class="row">
                  <div class="col-6 col-12-small">
                    <ul class="icons">
                      <li class="icon solid fa-home">
                        &nbsp; 官方qq群：827546074</li>
                      <li class="icon solid fa-phone">
                        13871976836
                      </li>
                      <li class="icon solid fa-envelope">
                        <a href="#">3254993429@qq.com&nbsp;</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-6 col-12-small">
                    <ul class="icons">
                      <li class="icon brands fa-twitter">
                        <a href="#">@untitled</a>
                      </li>
                      <li class="icon brands fa-instagram">
                        <a href="#">instagram.com/untitled</a>
                      </li>
                      <li class="icon brands fa-dribbble">
                        <a href="#">dribbble.com/untitled</a>
                      </li>
                      <li class="icon brands fa-facebook-f">
                        <a href="#">facebook.com/untitled</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div id="copyright" class="container">
          <ul class="links">
            <li>&copy; Untitled</li>
            <li>Design: <a href="http://html5up.net">所有人</a></li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import editor from '../components/Editor';
import {onMounted, ref} from 'vue'
import { ElMessageBox } from 'element-plus'
import {useStore} from "vuex";
import {updateArticle} from "../kit/api";
export default {
  setup() {
    const store=useStore();
    const dialogVisible = ref(false);
    const drawer = ref(false);
    const handleClose = (done) => {
      ElMessageBox.confirm('Are you sure to close this dialog?')
          .then(() => {
            done()
          })
          .catch(() => {
            // catch error
          })
    }
    const that = this;
    console.log(that);
    onMounted(()=>{
      store.dispatch("injectArticles");

    })
    // 暴露给 template
    return {
      dialogVisible,
      handleClose,
      drawer
    }
  },
  components:{
    editor
  },
  name: "ArticleView.vue",
  data(){
    return{
      currentID:"",
      edit:{
        temp:{
          Author:"",
          ArticleID:"",
          H1:"测试标题",
          Content:"<p>测试</p>",
          H2:"测试副标题",
          H3:"测试小小标题",
          coverpage:"https://iwisspicgo.oss-cn-shanghai.aliyuncs.com/%E5%A4%A7%E7%90%86%E7%9F%B3%E5%BA%95%E7%BA%B9.jpg",
        },
        editor:"editorName"
      },
      form: {
        Author:"",
        ArticleID:"",
        H1:"测试标题",
        Content:"<p>测试</p>",
        H2:"测试副标题",
        H3:"测试小小标题",
        coverpage:"https://iwisspicgo.oss-cn-shanghai.aliyuncs.com/%E5%A4%A7%E7%90%86%E7%9F%B3%E5%BA%95%E7%BA%B9.jpg",
      },



      //我写这个干嘛来着。
      set:{
        context:{
          type: String,
          default: '',
        },
        editable:false
      }
    }
  },
  computed:{
    articles(){
      return this.$store.state.articles;
    }
  },
  methods:{
    art1(){
      console.log("trigger");
      for(var article of this.articles){
        console.log(article);
        if(article.ArticleID==15){
          this.form=JSON.parse(JSON.stringify(article));
          this.form.Content=JSON.parse(article.Content);
          this.edit.temp=JSON.parse(JSON.stringify(this.form));
        }
      }
    },
    art2(){
      console.log("trigger");
      for(var article of this.articles){
        console.log(article);
        if(article.ArticleID==16){
          this.form=JSON.parse(JSON.stringify(article));
          this.form.Content=JSON.parse(article.Content);
          this.edit.temp=JSON.parse(JSON.stringify(this.form));
        }
      }
    },
    art3(){
      for(var article of this.articles){
        console.log(article);
        if(article.ArticleID==18){
          this.form=JSON.parse(JSON.stringify(article));
          this.form.Content=JSON.parse(article.Content);
          this.edit.temp=JSON.parse(JSON.stringify(this.form));
        }
      }
    },
    changeContent(id){
      for(var article of this.articles){
        console.log(article);
        if(article.ArticleID==id){
          this.form=JSON.parse(JSON.stringify(article));
          this.form.Content=JSON.parse(article.Content);
          this.edit.temp=JSON.parse(JSON.stringify(this.form));
        }
      }
    },
    confirm(){
      this.dialogVisible=false;
      var payload;
      payload=JSON.parse(JSON.stringify(this.edit.temp));
      payload.editor=this.edit.editor;
      payload.Content=JSON.stringify(this.edit.temp.Content)
      console.log("发送报文样式：")
      console.log(payload);
      this.form=JSON.parse(JSON.stringify(this.edit.temp));
      updateArticle(payload).then(res=>{
        if(res.status!=200){
          console.log("update error");
        }
      });
      this.$message({
        message:'修改文章内容成功。',
        duration:1000
      });
      this.$store.dispatch("injectArticles");
      return;
    },
    read(payload){
      console.log(payload);
      this.form=JSON.parse(JSON.stringify(payload));
      this.form.Content=JSON.parse(payload.Content);

      //值拷贝。
      this.edit.temp=JSON.parse(JSON.stringify(this.form));

      //保存全局文章ID。
      this.currentID=payload.ArticleID;
    }
  },
  mounted(){
    this.edit.temp=JSON.parse(JSON.stringify(this.form));
    var Id = this.$route.query.Id;
    this.changeContent(Id);
  }
}
</script>

<style scoped>
@import '../assets/css/main.css';
</style>