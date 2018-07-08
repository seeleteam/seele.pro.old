<!-- 新闻详情 -->
<template>
    <div>
        <Header></Header>
        <div class="item-wrap">
            <div class="news_detail_main">
              <el-breadcrumb separator-class="el-icon-arrow-right" class="el-breadcrumb-wrap">
                <el-breadcrumb-item :to="{ path: '/' }">{{$t('news.home')}}</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/news' }">{{$t('news.news')}}</el-breadcrumb-item>
                <el-breadcrumb-item class="news-detail-breadcrumb-title">{{newsDetail.title}}</el-breadcrumb-item>
              </el-breadcrumb>
              <div class="news_detail_header">
                  <h1 class="news_detail_title">{{newsDetail.title}}</h1>
                  <p class="news_detail_time">{{newsDetail.published_at}}</p>
              </div>
              <div class="news_detail_content">
                  <div v-html="newsDetail.body"></div>
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
      newsDetail: {}
    };
  },
  components: {
    Header,
    Footer
  },
  mounted() {
    let id = sessionStorage.getItem("newsId")
    if(id == null || id == "")
    id = window.location.hash
      ? window.location.hash.split("?")[1]
        ? window.location.hash.split("?")[1].split("=")[1]
        : ""
      : "";
     
    this.getNewsDetail(id);
    window.scroll(0, 0);
  },
  updated() {
    window.scroll(0, 0);
  },
  methods: {
    getNewsDetail(id) {
      let _this = this;
      this.$ajax
        .get(baseUrl + "/news/" + id,{params:{lang:_this.$i18n.locale==='en'?'en_US':'zh_CN'}})
        .then(function(response) {
          _this.newsDetail = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="less">
.news_detail_main {
  .el-breadcrumb {
    padding: 15px 0 20px 0;
    border-bottom: 1px solid #cecece;
    .el-breadcrumb__item {
      .el-breadcrumb__inner {
        font-weight: 500;
        color: #333;
        font-size: 16px;
        &:hover {
          color: #1346a2;
        }
      }
      .el-breadcrumb__separator {
        color: #666;
      }
    }
  }
  .news_detail_header {
    margin: 60px 0 20px 0;
    border-bottom: 1px solid #f2f2f2;
    .news_detail_title {
      width: 630px;
      font-size: 26px;
      color: #333;
      word-break: break-word;
    }
    .news_detail_time {
      padding: 20px 0 10px 0;
      // text-align: right;
      color: #999;
      font-size: 14px;
    }
  }
  .news_detail_content {
    margin-top: 35px;
    margin-bottom: 60px;
    span,
    p {
      font-family: "Avenir", Helvetica, Arial, sans-serif !important;
    }
  }
}
@media screen and (max-width: 768px) {
  .news_detail_main {
    .el-breadcrumb {
      padding: 14px 0 14px 0;
      margin: 0 20px 20px 20px;
      border-bottom: 1px solid #e2e2e2;
      .el-breadcrumb__item {
        .el-breadcrumb__inner {
          font-weight: 200;
          color: #333;
          font-size: 14px;
          line-height: 20px;
          &:hover {
            color: #1346a2;
          }
        }
      }
      .news-detail-breadcrumb-title {
        display: inline-block;
        width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .news_detail_header {
      margin: 40px 20px 20px 20px;
      border-bottom: 1px solid #f2f2f2;
      .news_detail_title {
        width: 100%;
        font-size: 18px;
        color: #333;
        word-break: break-word;
      }
      .news_detail_time {
        padding: 30px 0 10px 0;
        color: #999;
        font-size: 14px;
      }
    }
    .news_detail_content {
      margin-top: 35px;
      margin-bottom: 60px;
      padding: 0 20px;
      span,
      p {
        font-size: 14px !important;
        font-family: "Avenir", Helvetica, Arial, sans-serif !important;
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>
      