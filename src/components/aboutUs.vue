<!-- 关于我们 -->
<template>
    <div>
        <Header></Header>
        <aboutUs></aboutUs>
        <div class="aboutUs">
          <Team></Team>
          <div  id="Aglobal">
            <Global></Global>
          </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from "./header";
import aboutUs from "./itemBanner/aboutUs";
import Team from "./home/team";
import Global from "./home/global";
import Footer from "./footer";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    aboutUs,
    Team,
    Global,
    Footer
  }
};
</script>
<style lang="less">
.aboutUs{
}
</style>
      