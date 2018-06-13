<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  
import './assets/iconfont/iconfont.css';
export default {
  name: 'App',
}
</script>

<style lang="less">
  @import './assets/css/main.less';
  *{
    padding: 0;
    margin: 0;
  }
  html, body{
    /* webkit-overflow-scrolling : touch; */
    /* height: 100%; */
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }

</style>
