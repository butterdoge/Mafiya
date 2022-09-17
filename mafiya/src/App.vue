<template>
  <div>
    <router-view/>
  </div>

</template>
<script>
// this.$router.push("Home")
export default{
  mounted() {
    this.$router.push('/Home');
  }
}
</script>
<style lang="scss" >
@import url("assets/css/fontawesome-all.min.css");
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i");
//@import 'assets/css/main.css';
//@import 'assets/css/noscript.css';

#app {
  font-family: 'Source Sans Pro';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
