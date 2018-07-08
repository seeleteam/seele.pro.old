<!-- FAQ -->
<template>
  <div>
      <Header></Header>
      <div class="item-wrap">
          <div class="faq-main">
              <!-- <div class="faq-header">
                  <div class="faq-header-left"></div>
                  <div class="faq-header-content">
                      <div class="faq-header-content-title">
                          <div class="faq-header-title">Seele-FAQ</div>
                          <div class="faq-header-website">(self.seeletech)</div>
                      </div>
                      <div>
                          <span class="faq-header-name">seeletech</span>
                          <span class="faq-header-time">于28天前*投稿</span>
                      </div>
                  </div>
              </div> -->
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">{{$t('community.home')}}</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/community' }">{{$t('community.community')}}</el-breadcrumb-item>
                <el-breadcrumb-item>{{$t('community.FAQ')}}</el-breadcrumb-item>
              </el-breadcrumb>
              <div class="box-title faq-title">{{$t('FAQ.FAQ')}}</div>
              <div class="faq-box" v-for="item in faqList" id="item.id" :key="item.id">
                  <p class="faq-box-title">{{$t(item.question)}}</p>
                  <p class="faq-box-info" v-html="$t(item.answer)"></p>
              </div>
          </div>
      </div>
      <Footer></Footer>
  </div>
</template>
<script>
import Header from "./header";
import Footer from "./footer";
import faq from "../json-data/faq";
export default {
  data() {
    return {
      faqList: []
    };
  },
  components: {
    Header,
    Footer
  },
  mounted() {
    this.faqList = faq;
    window.scroll(0, 0);
  },
  updated() {
    window.scroll(0, 0);
  }
};
</script>
<style lang="less">
.faq-main {
  padding-bottom: 30px;
  .el-breadcrumb {
    padding: 15px 0 20px 0;
    border-bottom: 1px solid #cecece;
    .el-breadcrumb__item {
      .el-breadcrumb__inner {
        font-weight: 500;
        color: #666;
        font-size: 16px;
        &:hover {
          color: #1346a2;
        }
      }
      .el-breadcrumb__separator {
        // color: #1346a2;
        color: #666;
      }
    }
  }
  .faq-header {
    display: flex;
    padding: 90px 0 40px 0;
    border-bottom: 1px solid #f2f2f2;
    margin-bottom: 60px;
    line-height: 120px;
    .faq-header-left {
      width: 120px;
      height: 120px;
      border-radius: 100px;
      background: #1346a2;
    }
    .faq-header-content {
      margin-left: 90px;
      .faq-header-content-title {
        display: flex;
        .faq-header-title {
          font-size: 30px;
          color: #202020;
        }
        .faq-header-website {
          font-size: 18px;
          line-height: 30px;
          padding-left: 20px;
          color: #666;
        }
      }
      .faq-header-name {
        font-size: 24px;
        color: #1346a2;
      }
      .faq-header-time {
        font-size: 24px;
        color: #666;
      }
    }
  }
  .faq-box-title {
    font-size: 24px;
    color: #333;
  }
  .faq-box-info {
    font-size: 18px;
    color: #666;
    line-height: 30px;
    margin: 30px 0 60px 0;
  }
}
@media screen and (max-width: 768px) {
  .faq-main {
    padding: 0 20px;
    .el-breadcrumb {
      padding: 14px 0px 14px 0px;
      .el-breadcrumb__item {
        .el-breadcrumb__inner {
          font-weight: 200;
          color: #333;
          font-size: 14px;
          &:hover {
            color: #1346a2;
          }
        }
      }
    }
    .faq-header {
      display: flex;
      padding: 90px 0 40px 0;
      border-bottom: 1px solid #f2f2f2;
      margin-bottom: 60px;
      line-height: 120px;
      .faq-header-left {
        width: 120px;
        height: 120px;
        border-radius: 100px;
        background: #1346a2;
      }
      .faq-header-content {
        margin-left: 90px;
        .faq-header-content-title {
          display: flex;
          .faq-header-title {
            font-size: 30px;
            color: #202020;
          }
          .faq-header-website {
            font-size: 18px;
            line-height: 30px;
            padding-left: 20px;
            color: #666;
          }
        }
        .faq-header-name {
          font-size: 24px;
          color: #1346a2;
        }
        .faq-header-time {
          font-size: 24px;
          color: #666;
        }
      }
    }
    .faq-box-title {
      font-size: 18px;
      line-height: 30px;
    }
    .faq-box-info {
      font-size: 14px;
      line-height: 24px;
      margin: 15px 0 30px 0;
    }
  }
  .faq-title {
    text-align: left;
    line-height: 30px;
    margin: 40px 0 20px 0;
    color: #202020;
    font-size: 22px;
    font-weight: bold;
  }
}
</style>
      