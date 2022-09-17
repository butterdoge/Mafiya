
<template>

  <div>
    <div id="wrapper" class="divided">

      <!-- One -->
      <section class="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
        <div class="content">
          <h1>Story</h1>
          <p class="major">故事开始于drrr和iirose 但不止步于此&nbsp;</p>
          <ul class="actions stacked">
            <li><a  class="button big wide smooth-scroll-middle"><router-link :to="{path:'/article',query:{Id: 9}}">GET START</router-link></a></li>
          </ul>
        </div>
        <div class="image">
          <img src="https://s2.loli.net/2022/05/06/zIBnSXpEZbHxqu6.jpg" >
        </div>
      </section>

      <!-- Two -->
      <section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="first">
        <div class="content">
          <h2>&nbsp;Oath</h2>
          <p>创造唯一空间，和世界联系。</p>
          <p>欢迎来到mafiya，属于你的聊天室和创意中心。</p>
          <ul class="actions stacked">
            <li><a class="button big wide smooth-scroll-middle"><router-link :to="{path:'/article',query:{Id: 15}}">Learn More</router-link></a></li>
          </ul>
        </div>
        <div class="image">

          <img src="https://s2.loli.net/2022/05/06/G6ig1xUhHkp87Io.jpg" >
        </div>
      </section>

      <!-- Three -->
      <section class="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
        <div class="content">
          <h2>Enjoy&nbsp;</h2>
          <p>在这里。创造你的人物，你的故事，你的未来。</p>
          <ul class="actions stacked">
            <li><a  class="button"><router-link :to="{path:'/article',query:{Id: 16}}">LEARN MORE</router-link></a></li>
          </ul>
        </div>
        <div class="image">
          <img src="https://s2.loli.net/2022/05/06/fN8iUtyvgWlmJwn.png" >
        </div>
      </section>

      <!-- Four -->
      <section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
        <div class="content">
          <h2>For&nbsp; everyone&nbsp;</h2>
          <p>在这个世界做正确的事，不仅为自己。</p>
          <p>了解更多，连结更多，改变更多。</p>
          <p>mafiya 和你一起。&nbsp;</p>
          <ul class="actions stacked">
            <li><a class="button big wide smooth-scroll-middle"><router-link :to="{path:'/article',query:{Id: 18}}">Join us</router-link></a></li>
          </ul>
        </div>
        <div class="image">
          <img src="https://s2.loli.net/2022/05/06/26k8h5JuWXbYMvq.jpg" >
        </div>
      </section>

      <!-- Five -->
      <section class="wrapper style1 align-center">
        <div class="inner">
          <h2>写给所有人</h2>
          <p>初次见面，这里是mafiya呀。我们是一个很小很小的团队，但是希望做一些改变世界的事情呢~</p>
          <p>一个只属于用户的聊天室，一个我们自己的社交中心，一个写故事的地方。一个喜欢独处，喜欢群居的人都能安放灵魂的家园。</p>
          <p>为了自己，也为了一个所有人由衷欢笑的明天 。</p>
        </div>

        <!-- Gallery -->
        <div class="gallery style2 medium lightbox onscroll-fade-in">
          <article>
            <a href="typed/是球球哦.html" class="image">
              <img src="@/assets/pic/球球主页长条小图.jpg">
            </a>
            <div class="caption">
              <h3>球球</h3>
              <p>是球球哦~喜欢写故事的球球，会想复杂问题的球球，是爱你的球球</p>
              <ul class="actions fixed">
                <li><span class="button small"><router-link :to="{path:'/article',query:{Id: 11}}">Details</router-link></span></li>
              </ul>
            </div>
          </article>
          <article>
            <a href="typed/loti.html" class="image">
              <img src="@/assets/pic/loti主页长条小图.jpg">
            </a>
            <div class="caption">
              <h3>loti</h3>
              <p>成功打败魔王，但同时在魔王殿中沉睡。xxx年后，在风雪交加的夜晚苏醒。是要再起来当勇者哒~</p>
              <ul class="actions fixed">
                <li><span class="button small"><router-link :to="{path:'/article',query:{Id: 8}}">Details</router-link></span></li>
              </ul>
            </div>
          </article>
          <article>
            <a href="typed/夏天.html" class="image">
              <img src="@/assets/pic/白夏.jpg">
            </a>
            <div class="caption">
              <h3>白夏</h3>
              <p>不想上班，但是想努力。大概，希望所有人都能过的更好</p>
              <ul class="actions fixed">
                <li><span class="button small"><router-link :to="{path:'/article',query:{Id: 7}}">Details</router-link></span></li>
              </ul>
            </div>
          </article>
          <article>
            <a href="typed/哥.html" class="image">
              <img src="@/assets/pic/零.jpg">
            </a>
            <div class="caption">
              <h3>时零（乐子人）</h3>
              <p>为乐子而生</p>
              <ul class="actions fixed">
                <li><span class="button small"><router-link :to="{path:'/article',query:{Id: 11}}">Details</router-link></span></li>
              </ul>
            </div>
          </article>

        </div>

      </section>

      <!-- Six -->
      <section class="wrapper style1 align-center">
        <div class="inner">
          <h2>致谢</h2>
          <p>所有参与这个项目的人 还有未来要参与的你们，发自内心的感谢。</p>
          <div class="items style1 medium onscroll-fade-in">
            <section>
              <span class="icon style2 major fa-gem"></span>
              <h3>老板：loti</h3>
              <p>&nbsp;流星般燃烧的恶斗露，生生不息</p>
            </section>
            <section>
              <span class="icon solid style2 major fa-save"></span>
              <h3>经理：球球&nbsp;</h3>
              <p>如果明天更好，我会很高兴的&nbsp;</p>
            </section>
            <section>
              <span class="icon solid style2 major fa-chart-bar"></span>
              <h3>技术总监：白夏&nbsp;</h3>
              <p>来个大佬带带//</p>
            </section>
            <section>
              <span class="icon solid style2 major fa-wifi"></span>
              <h3>乐子人：十零</h3>
              <p>愿乐子忽悠着你&nbsp;</p>
            </section>
            <section>
              <span class="icon solid style2 major fa-cog"></span>
              <h3>甜点师：十月</h3>
              <p>为什么写的代码不能自己做饭&nbsp;</p>
            </section>
            <section>
              <span class="icon style2 major fa-paper-plane"></span>
              <h3>设计组：&nbsp;夜袭若水</h3>
              <p>超高校级的摆烂者&nbsp;</p>
            </section>
            <section>
              <span class="icon solid style2 major fa-desktop"></span>
              <h3>参谋才不是呢：sea&nbsp;</h3>
              <p>喜欢海的sea，永远保持第一次看海时的欢喜&nbsp;</p>
            </section>
            <section>
              <span class="icon solid style2 major fa-sync-alt"></span>
              <h3>执事：joke</h3>
              <p>史上最穷，睡桥洞</p>
            </section>
            <section>
              <span class="icon solid style2 major fa-hashtag"></span>
              <h3>间谍：rux&nbsp;</h3>
              <p>&nbsp;气势汹汹，潜入成功！</p>
            </section>
            <section>
              <span class="icon solid style2 major fa-bolt"></span>
              <h3>百大DJ：废话学</h3>
              <p>这是一句自我介绍</p>
            </section>
            <section>
              <span class="icon solid style2 major fa-envelope"></span>
              <h3>男仆长：&nbsp;辳</h3>
              <p>辳，不会读的话可以查一下字典</p>
            </section>
            <section>
              <span class="icon solid style2 major fa-leaf"></span>
              <h3>&nbsp;技术的神：酥饼</h3>
              <p>是苏丙，不是很想摸鱼，但是鱼在那里。&nbsp;</p>
            </section>
          </div>
        </div>
      </section>

      <!-- Seven -->
      <section class="wrapper style1 align-center">
        <div class="inner medium">
          <h2>加入我们</h2>
          <h2>&nbsp;官方qq群：827546074</h2>
          <form method="post" action="#">
            <div class="fields">
              <div class="field half">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" value="" />
              </div>
              <div class="field half">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" value="" />
              </div>
              <div class="field">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="6"></textarea>
              </div>
            </div>
            <ul class="actions special">
              <li><input type="submit" name="submit" id="submit" value="Send Message" /></li>
            </ul>
          </form>

        </div>
      </section>

      <!-- Footer -->
      <footer class="wrapper style1 align-center">
        <div class="inner">
          <ul class="icons">
            <li><a href="#" class="icon brands style2 fa-twitter"><span class="label">Twitter</span></a></li>
            <li><a href="#" class="icon brands style2 fa-facebook-f"><span class="label">Facebook</span></a></li>
            <li><a href="#" class="icon brands style2 fa-instagram"><span class="label">Instagram</span></a></li>
            <li><a href="#" class="icon brands style2 fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
            <li><a href="#" class="icon style2 fa-envelope"><span class="label">Email</span></a></li>
          </ul>
          <p>&copy; Untitled. Design: 所有人 <a href="https://html5up.net">&nbsp;</a></p>
        </div>
      </footer>

    </div>
  </div>

</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  mounted() {
    this.$store.dispatch("injectArticles");
  }
}
</script>

<style src="../assets/css/cover.css"  scoped>

/*@import '../assets/css/main.css';*/
/*@import '../assets/css/cover.css';*/
/*@import '../assets/css/fontawesome-all.min.css';*/

</style>