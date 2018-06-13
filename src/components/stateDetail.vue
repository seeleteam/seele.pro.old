<!-- 新闻详情 -->
<template>
    <div>
        <Header></Header>
        <div class="item-wrap">
            <div class="state_detail_main">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">HOME</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/news' }">NEWS</el-breadcrumb-item>
                <el-breadcrumb-item>{{stateDetail.title}}</el-breadcrumb-item>
              </el-breadcrumb>
              <div class="state_detail_header">
                  <h1 class="state_detail_title">{{stateDetail.title}}</h1>
                  <p class="state_detail_time">{{stateDetail.createTime}}</p>
              </div>
              <div class="state_detail_content">
                  <div v-html="stateDetail.content"></div>
              </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from "./header";
import Footer from "./footer";
import { baseUrl } from "../config/port";
export default {
  data() {
    return {
      stateDetail: {
        title:
          "士大夫的ssssssssssssssssssssssssssssssssssssssssssssssssssfad",
        createTime: "2018.1.1",
        content: "<p>963发多少33333afsd</p>"
      }
    };
  },
  components: {
    Header,
    Footer
  },
  mounted() {
    let id = window.location.hash
      ? window.location.hash.split("?")[1]
        ? window.location.hash.split("?")[1].split("=")[1]
        : ""
      : "";
    this.getstateDetail(id);
  },
  methods: {
    getstateDetail(id) {
      this.$ajax
        .get(baseUrl + "state", {
          method: "get",
          params: {
            id: id
          }
        })
        .then(function(response) {
          console.log(response, "response");
          this.stateDetail = {
            title:
              "XXXXafdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssfad",
            createTime: "2018.1.1",
            content: "<p>96333333afsd</p>"
          };
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="less">
.state_detail_main {
  .el-breadcrumb {
    padding: 15px 0 20px 0;
    border-bottom: 1px solid #202020;
    .el-breadcrumb__item {
      .el-breadcrumb__inner {
        font-weight: 500;
        color: #202020;
        font-size: 16px;
        &:hover {
          color: #1346a2;
        }
      }
      .el-breadcrumb__separator {
        color: #1346a2;
      }
    }
  }
  .state_detail_header {
    margin: 90px 0 20px 0;
    border-bottom: 1px solid #f2f2f2;
    .state_detail_title {
      width: 630px;
      font-size: 26px;
      color: #333;
      width: 630px;
      word-break: break-word;
    }
    .state_detail_time {
      padding: 10px 0;
      // text-align: right;
      color: #999;
      font-size: 14px;
    }
  }
  .state_detail_content {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 16px;
    margin-top: 35px;
    margin-bottom: 90px;
  }
}
</style>
      