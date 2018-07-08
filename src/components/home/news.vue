<template>
  <div class="home-news">
    <div class="wrap">
      <div class="box-title">{{$t('news.news')}}</div>
      <div class="news-box">
        <div class="news-item box-hover" v-for="(item, index) in newsList" :key="index" @click="clickNews(item.id)">
          <img class="news-img" :src="item.image">
          <div class="news-text">
            <div class="news-title">{{item.title}}</div>
            <div class="news-info">
            <div class="fl news-date">{{item.published_at}}</div>
            <div class="fr news-read iconfont icon-jiantouyou-copy show-lg"></div>
            </div>
          </div>
        </div>
      </div>
      <a v-if="ready" class="button show-lg" v-bind:data-title="$t('news.more')" @click="readMore">
          <span><span >{{$t('news.more')}}</span></span>
      </a>
      <div v-if="ready" class="news-btn-sm show-sm" @click="readMore">{{$t('news.more')}}</div>
    </div>
  </div>
</template>
<script>
  import { baseUrl } from "../../config/port";
  export default {
    data() {
      return {
        newsList: [],
        ready: false,
      }
    },
    methods: {
      getNews(formName) {
        this.$ajax.get(baseUrl + "/news", {
          method: "get"
        })
        .then((response) => {
          const result = response.data.data;
          this.newsList = [];
          const _this = this;
          result.forEach(item => {
            _this.newsList.push(item);
          })
          this.ready = true;
        })
        .catch(function(error) {
          console.log(error);
        });
      },
      clickNews(id) {
        sessionStorage.setItem("newsId", id)
        this.$router.push(`/newsDetail?id=${id}`);
      },
      readMore() {
        this.$router.push('/news');
      }
    },
    created() {
      this.getNews();
    },
  }
</script>
<style lang="less">
  .home-news {
    margin-bottom: 30px;
    min-height: 400px;
    text-align: center;
    .news-box {
      display: flex;
      .news-item {
        flex: 1;
        padding-bottom: 30px;
        margin-right: 40px;
        height: 305px;
        cursor: pointer;
        transition:all .3s linear 0s;
        &:nth-last-child(1) {
          margin-right: 0px;
        }
        .news-img {
          width: 100%;
          /* background: #999999; */
          height: 200px;
        }
        .news-title {
          color: #000;
          font-size: 20px;
          margin-top: 20px;
          padding-right: 20px;
          text-align: left;
        }
        .news-date, .news-title, .news-read {
          transition: all .3s linear;
        }
        .news-info {
          color: #c6c6c6;
          font-size: 16px;
          margin-top: 20px;
          .news-read {
            width: 30px;
            height: 30px;
            border: 1px solid #999;
            text-align: center;
            line-height: 30px;
            font-size: 20px;
            margin-top: -10px;
          }
        }
      }
    }
    
    @media screen and (min-width: 900px ) {
      .news-item:hover {
          box-shadow: 0 0 10px #ccc;
          .news-read {
            border-color: #1346a2;
            color: #1346a2;
          }
          .news-title, .news-date {
            transition:all .3s linear 0s;
            -webkit-transition:all .3s linear 0s;
            -moz-transition:all .3s linear 0s;
            transform: translate(30px);
          }
          .news-read {
            transition:all .3s linear 0s;
            -webkit-transition:all .3s linear 0s;
            -moz-transition:all .3s linear 0s;
            transform: translate(-20px);
          }
        }
    }
  }
  @media screen and (min-width: 1024px ) {
    .button {
        display: inline-block;
        position: relative;
        width: 240px;
        height: 50px;
        margin: 0 20px;
        font-size: 16px;
        border-radius: 3px;
        z-index: 2;
        margin-top: 20px;
        border: 2px solid #1346a2;
        cursor: pointer;
        color: #000}
    .button:hover {
        border: 2px solid #1346a2;
    }
    .button > span {
        display: block;
        position: absolute;
        overflow: hidden;
        left: 0;
        top: 0;
        width: 0%;
        height: 100%;
        border-radius: 3px;
        -webkit-transition: .7s ease-in-out;
        -moz-transition: .7s ease-in-out;
        -o-transition: .7s ease-in-out;
        transition: .7s ease-in-out; }
    .button:after, .button > span > span {
        display: block;
        text-align: center;
        border-radius: 3px;
        padding: 1em 0; }
    .button:after {
        content: attr(data-title);
        width: 100%;
        color: #000; }
    .button > span > span {
        width: 244px;
        background: #1346a2;
        color: #fff; }
    .button:hover > span {
        border-radius: 3px;
        margin-left: -2px;
        width: 102%; }
  }
  @media screen and (max-width: 768px ) {
    .home-news {
      margin-bottom: 0;
      .news-box {
        display: block;
        padding: 0 20px;
        overflow: hidden;
        .news-item {
          height: auto;
          margin-right: 0;
          overflow: hidden;
          padding-bottom: 40px;
          .news-img {
            width: 100%;
            float: left;
            height: 200px;
          }
          .news-text {
            width: 100%;
            float: left;
            box-sizing: border-box;
          }
          .news-title {
            font-size: 16px;
            line-height: 24px;
          }
          .news-date {
            font-size: 12px;
          }
        }
      }
      .news-btn-sm {
        display: inline-block;
        width: 240px;
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
        font-size: 16px;
        z-index: 2;
        margin-top: 20px;
        cursor: pointer;
        color: #000;
        border: 1px solid #1346a2;
        border-radius: 3px
      }
    }
  }
  @media screen and (min-width:600px) and (max-width:900px){
    .home-news {
      .news-box {
        .news-item {
          width: 340px;
          margin: 20px auto 0;
          &:nth-last-child(1) {
            margin-right: auto;
          }
          .news-img {
            width: 340px;
            height: 200px;
          }
        }
      }
    }
  }
</style>