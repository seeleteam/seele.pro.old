<!-- announcement -->
<template>
  <div>
      <Header></Header>
      <div class="item-wrap">
          <div class="announcement-main">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">HOME</el-breadcrumb-item>
                <!-- <el-breadcrumb-item :to="{ path: '/community' }">COMMUNITY</el-breadcrumb-item> -->
                <el-breadcrumb-item>ANNOUNCEMENT</el-breadcrumb-item>
              </el-breadcrumb>
              <div class="box-title announcement-title">Announcing the Launch of Our New Official Website</div>

              <div class="news_detail_header">
                <p class="news_detail_time">As Seele keeps growing, our team decided to launch an updated official website. With this new and refreshed site, we aim to enable every user to get more information from a quick read. Specific modifications are listed below.</p>
              </div>
              <div class="announcement-box" v-for="item in announcementList" id="item.id" :key="item.id">
                  <p class="announcement-box-title">{{item.question}}</p>
                  <p class="announcement-box-info" v-html="item.answer"></p>
              </div>
          </div>
      </div>
      <Footer></Footer>
  </div>
</template>
<script>
import Header from "./header";
import Footer from "./footer";
import { announcement } from "../json-data/announcement";
export default {
  data() {
    return {
      announcementList: []
    };
  },
  components: {
    Header,
    Footer
  },
  mounted() {
    this.announcementList = announcement;
  }
};
</script>
<style lang="less">
.announcement-main {
  padding-bottom: 30px;
  .news_detail_header {
    border-bottom: 1px solid #f2f2f2;
    margin-bottom: 30px;
    .news_detail_time {
      padding: 0 0 10px 0;
      color: #666;
      font-size: 18px;
    }
  }
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
  .announcement-header {
    display: flex;
    padding: 90px 0 40px 0;
    border-bottom: 1px solid #f2f2f2;
    margin-bottom: 60px;
    line-height: 120px;
    .announcement-header-left {
      width: 120px;
      height: 120px;
      border-radius: 100px;
      background: #1346a2;
    }
    .announcement-header-content {
      margin-left: 90px;
      .announcement-header-content-title {
        display: flex;
        .announcement-header-title {
          font-size: 30px;
          color: #202020;
        }
        .announcement-header-website {
          font-size: 18px;
          line-height: 30px;
          padding-left: 20px;
          color: #666;
        }
      }
      .announcement-header-name {
        font-size: 24px;
        color: #1346a2;
      }
      .announcement-header-time {
        font-size: 24px;
        color: #666;
      }
    }
  }
  .announcement-box-title {
    font-size: 24px;
    color: #333;
  }
  .announcement-box-info {
    font-size: 18px;
    color: #666;
    line-height: 30px;
    margin: 30px 0 60px 0;
  }
}
@media screen and (max-width: 768px) {
  .announcement-main {
    padding: 0 20px;
    .announcement-title {
      text-align: left;
      line-height: 30px;
      margin: 40px 0 20px 0;
      color: #202020;
      font-size: 22px;
    }
    .news_detail_header {
      .news_detail_time {
        line-height: 25px;
        padding: 0 0 20px 0;
        font-size: 16px;
      }
    }
    .el-breadcrumb {
      padding: 14px 0 14px 0;
      .el-breadcrumb__item {
        .el-breadcrumb__inner {
          font-weight: 200;
          color: #333;
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
    .announcement-box {
      padding: 0 5px;
    }
    .announcement-box-title {
      font-size: 18px;
      line-height: 30px;
    }
    .announcement-box-info {
      font-size: 14px;
      line-height: 24px;
      margin: 15px 0 30px 0;
    }
  }
}
</style>
      