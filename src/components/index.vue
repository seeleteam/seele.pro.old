<template>
  <div class="home">
    <Header></Header>
    <Banner></Banner>
    <News></News>
    <Development></Development>
    <Feature></Feature>
    <Eco></Eco>
    <Team></Team>
    <Global></Global>
    <RoadMap></RoadMap>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './header.vue'
  import Banner from './home/banner.vue'
  import News from './home/news.vue'
  import Development from './home/development.vue'
  import Feature from './home/feature.vue'
  import Eco from './home/eco.vue'
  import Team from './home/team.vue'
  import RoadMap from './home/roadMap.vue'
  import Global from './home/global.vue'
  import Footer from './footer.vue'
  export default {
    data() {
      return {

      }
    },
    components: {
      Header,
      Banner,
      News,
      Development,
      Feature,
      Eco,
      Team,
      RoadMap,
      Global,
      Footer
    }
  }
</script>
<style lang="less">

</style>