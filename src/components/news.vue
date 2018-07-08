<!-- 新闻列表 -->
<template>
  <div>
    <Header></Header>
    <News></News>
    <div class="wrap">
      <div class="news_main">
        <ul class="wrap">
          <!-- <router-link :to="{path: 'newsDetail', query:{id: item.id}}" v-for="item in newsList.data" tag='li' :key="item.id" class="news_list" @click="saveId(item.id)"> -->
          <li  v-for="item in newsList.data" :key="item.id" class="news_list" @click="saveId(item.id)">
            <div class="news_list_left">
              <img :src= "item.image" alt="">
            </div>
            <div class="news_list_content">
              <div class="news_list_title">
                  {{item.title}}
              </div>
              <div class="news_list_info">
                  {{item.description}}
              </div>
              <div class="news-list-bottom">
                <span class="news_list_time">{{item.published_at}}</span>
                <span class="fr news_list_read iconfont icon-jiantouyou-copy"></span>
              </div>
              
            </div>
          <!-- </router-link> -->
          </li>
        </ul>
        <div v-if="newsList.total" class="news_pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="newsList.current_page"
            :page-size="newsList.per_page"
            layout="prev, pager, next"
            :total="newsList.total">
          </el-pagination>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Vue from "vue";
import { Pagination } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(Pagination);
import Header from "./header";
import News from "./itemBanner/news";
import Footer from "./footer";
import { baseUrl } from "../config/port";
export default {
  data() {
    return {
      newsList: {
        current_page: 1,
        per_page: 10,
        total: 0,
        data: []
      }
    };
  },
  components: {
    Header,
    News,
    Footer
  },
  mounted() {
    this.initData(this.newsList.current_page);
    window.scroll(0, 0);
  },
  updated() {
    window.scroll(0, 0);
  },
  methods: {
    //获取新闻列表数据
    initData(current_page) {
      let _this = this;
      _this.$ajax
        .get(baseUrl + "/newsList", {
          method: "get",
          params: {
            page: current_page,
            limit: 10,
            lang:_this.$i18n.locale==='en'?'en_US':'zh_CN'

          }
        })
        .then(function(response) {
          _this.newsList = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    handleSizeChange(val) {
      this.initData(val);
    },
    handleCurrentChange(val) {
      this.initData(val);
    },
    saveId(id){
      sessionStorage.setItem('newsId',id);
      this.$router.push(`/newsDetail?id=${id}`);
    }
  }
};
</script>
<style lang="less">
.news_main {
  padding: 50px 0;
  .news_list {
    width: 100%;
    height: 200px;
    background: #fff;
    // display: flex;
    border-bottom: 1px solid #eef3f5;
    padding: 40px 0;
    .news_list_left {
      float: left;
      width: 360px;
      height: 200px;
      // background: #195eed;
      img {
        display: inline-block;
        width: 360px;
        height: 200px;
      }
    }
    .news_list_left,
    .news_list_content,
    .news_list_read {
      transition: 0.3s all linear;
    }
    .news_list_content {
      position: relative;
      float: right;
      width: 800px;
      height: 200px;
      color: #333;
      box-sizing: border-box;
      padding: 20px 40px 20px 40px;
      .news_list_info,
      .news_list_title {
        width: 630px;
      }
      .news_list_title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 24px;
      }
      .news_list_info {
        color: #666;
        font-size: 14px;
        padding-top: 30px;
        line-height: 25px;
        word-wrap: break-word;
      }
      .news_list_time {
        font-size: 14px;
        color: #999;
        position: absolute;
        bottom: 20px;
      }
      .news_list_read {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 30px;
        height: 30px;
        border: 1px solid #999;
        text-align: center;
        line-height: 30px;
        font-size: 20px;
      }
    }
    &:hover {
      cursor: pointer;
      /* box-shadow: 0 0 10px #ccc; */
      /* .news_list_left, */
      /* .news_list_content {
        transition: 0.3s all linear;
        transform: translate(30px);
      }
      .news_list_read {
        transition: 0.3s all linear;
        transform: translate(-60px);
      } */
      
      .news_list_title {
        color: #1346a2;
      }
      .news_list_read {
        border-color: #1346a2;
        color: #1346a2;
      }
    }
  }
  .news_pagination {
    padding: 20px 0;
    text-align: center;
    .el-pagination {
      background: none;
      .el-pager {
        li {
          border: 1px solid #333;
          padding: 0;
          margin: 0 4px;
        }
      }
      .btn-prev,
      .btn-next {
        padding: 0;
        border: 1px solid #333;
        margin: 0 4px;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .news_list {
    &:hover {
      box-shadow: 0 0 10px #ccc;
      border: none;
      z-index: 999;
      margin-bottom: 5px;
      .news_list_left,
      .news_list_content {
        transition: 0.3s all linear;
        transform: translate(40px);
      }
      .news_list_read {
        transition: 0.3s all linear;
        transform: translate(-80px);
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .news_main {
    padding: 20px 20px 0 20px;
    .news_list {
      width: auto;
      height: auto;
      // margin: 20px 5px;
      padding: 30px 0 0 0;
      border-bottom: none;
      .news_list_left {
        float: none;
        width: 100%;
        height: 200px;
        img {
          display: inline-block;
          width: 100%;
          height: 200px;
          background-size: 100% 100%;
        }
      }
      .news_list_left,
      .news_list_content,
      .news_list_read {
        transition: 0.3s all linear;
      }
      .news_list_content {
        position: static;
        float: none;
        width: auto;
        height: auto;
        color: #333;
        box-sizing: border-box;
        padding: 0;
        .news_list_info,
        .news_list_title {
          width: 100%;
        }
        .news_list_title {
          font-weight: bold;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 20px;
          margin: 20px 0 10px 0;
        }
        .news_list_info {
          position: relative;
          font-size: 12px;
          padding-top: 0;
          line-height: 24px;
          height: 50px;
          overflow: hidden;
        }
        .news_list_info:after {
          content: "...";
          font-weight: bold;
          position: absolute;
          bottom: 0;
          right: 0;
          padding: 0 30px 1px 5px;
          background: #fff;
        }
        .news-list-bottom {
          padding: 20px 0 30px 0;
        }
        .news_list_time {
          font-size: 12px;
          color: #999;
          position: static;
        }
        .news_list_read {
          display: none;
          text-align: center;
          line-height: 25px;
          font-size: 20px;
          margin-right: 10px;
        }
      }
      &:hover {
        cursor: pointer;
        /* box-shadow: 0 0 10px #ccc; */
        /* .news_list_left,
        .news_list_content {
          transition: 0.3s all linear;
          transform: translate(30px);
        }
        .news_list_read {
          transition: 0.3s all linear;
          transform: translate(-60px);
        } */
        .news_list_title {
          color: #1346a2;
        }
        .news_list_read {
          border-color: #1346a2;
          color: #1346a2;
        }
      }
    }
    .news_pagination {
      padding: 20px 0;
      text-align: center;
      .el-pagination {
        background: none;
        .el-pager {
          li {
            border: 1px solid #333;
            padding: 0;
            margin: 0 4px;
          }
        }
        .btn-prev,
        .btn-next {
          padding: 0;
          border: 1px solid #333;
          margin: 0 4px;
        }
      }
    }
  }
}
</style>