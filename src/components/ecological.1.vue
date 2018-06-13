<!-- ecological 生态 -->
<template>
    <div>
      <Header></Header>
      <Ecological></Ecological>
      <div class="ecological_main">
        <ECO></ECO>
        <div class="wrap">
          <hgroup class="ecological_list">
            <div class="box-title">APPLIED ECOLOGY </div>
            <div class="tech_box">
              <div class="tech_item tech_box_hover" v-for="item in appliedList1" id="tiem.id">
                <div class="tech_img"></div>
                <div class="tech_title">{{item.title}}</div>
                <div class="tech_info">
                  <div class="fl">{{item.info}}</div>
                </div>
              </div>
            </div>
            <div class="tech_box">
              <div class="tech_item tech_box_hover" v-for="item in appliedList2" id="tiem.id">
                <div class="tech_img"></div>
                <div class="tech_title">{{item.title}}</div>
                <div class="tech_info">
                  <div class="fl">{{item.info}}</div>
                </div>
              </div>
            </div>
          </hgroup>
        </div>
      </div>
      <Footer></Footer>
    </div>
</template>
<script>
import Header from "./header";
import Ecological from "./itemBanner/ecological";
import ECO from "./home/eco";
import Footer from "./footer";
import {appliedEcology1} from "../json-data/ecology";
import {appliedEcology2} from "../json-data/ecology";
export default {
  data() {
    return {
      appliedList1: [],
      appliedList2: []
    };
  },
  components: {
    Header,
    Ecological,
    ECO,
    Footer
  },
  mounted(){
    this.appliedList1 = appliedEcology1
    this.appliedList2 = appliedEcology2
  }
};
</script>
<style lang="less">
.ecological_main {
  padding: 20px 0;
  background: #f9f9f9;
  .ecological_title {
    position: relative;
    margin: 50px 0 50px 0;
    &:before {
      content: "";
      position: absolute;
      width: 70px;
      height: 4px;
      left: 0;
      top: 50px;
      background: #0383dd;
    }
  }
  .ecological_list_content {
    margin: 30px 0;
  }

  .tech_box {
    display: flex;
    margin-bottom: 40px;
    .tech_item {
      flex: 1;
      padding: 20px;
      margin-right: 40px;
      height: 305px;
      cursor: pointer;
      transition: all 0.3s linear 0s;
      &:nth-last-child(1) {
        margin-right: 0px;
      }
      .tech_img {
        width: 100%;
        background: #999999;
        height: 200px;
      }
      .tech_title {
        color: #333;
        font-size: 20px;
        margin-top: 20px;
        text-align: center;
      }
      .tech_info {
        color: #666;
        font-size: 14px;
        margin-top: 20px;
        .tech_read {
          width: 30px;
          height: 30px;
          border: 1px solid #999;
          text-align: center;
          line-height: 30px;
          font-size: 20px;
          margin-top: -10px;
        }
      }
      &:hover {
        box-shadow: 0 0 10px #ccc;
        background: #fff;
        .tech_read {
          border-color: #1346a2;
          color: #1346a2;
        }
      }
    }
  }
}
</style>
