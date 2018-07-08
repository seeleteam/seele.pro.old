<!-- ecological 生态 -->
<template>
    <div>
      <Header></Header>
      <Ecosystem></Ecosystem>
      <div class="ecological_main">
        <!-- <div class="wrap">
          <hgroup class="ecological_list">
            <div class="box-title">TECH ECOSYSTEM </div>
          </hgroup>
        </div> -->
        <!-- <div class="tech-none"> -->
          <ECO></ECO>
        <!-- </div> -->
        <div class="wrap">
          <hgroup class="ecological_list" id="EApp">
            <div class="box-title">{{$t('eco.AE')}} </div>
            <div class="tech_box">
              <div class="tech_item tech_box_hover">
                <div class="tech_img">
                  <img src="../assets/imgs/ecological/lot.png" :alt="$t('eco.IOT')">
                </div>
                <div class="tech_title">{{$t('eco.IOT')}}</div>
                <div class="tech_info">
                  <div class="">{{$t('eco.ES')}} 
                    <br/>{{$t('eco.GS')}}</div>
                </div>
              </div>
              <div class="tech_item tech_box_hover">
                <div class="tech_img">
                  <img src="../assets/imgs/ecological/Social Application .png" :alt="$t('eco.SA')">
                </div>
                <div class="tech_title">{{$t('eco.SA')}}</div>
                <div class="tech_info">
                  <div class="">{{$t('eco.MT')}}
                    <br/>{{$t('eco.SB')}}</div>
                </div>
              </div>
              <div class="tech_item tech_box_hover">
                <div class="tech_img">
                  <img src="../assets/imgs/ecological/Blockchain Game.png" :alt="$t('eco.BG')">
                </div>
                <div class="tech_title">{{$t('eco.BG')}}</div>
                <div class="tech_info">
                  <div class="">{{$t('eco.PS')}} 
                    <br/>{{$t('eco.TA')}}</div>
                </div>
              </div>
            </div>
            <div class="tech_box">
              <div class="tech_item tech_box_hover">
                <div class="tech_img">
                  <img src="../assets/imgs/ecological/e-governmet.png" :alt="$t('eco.EG')">
                </div>
                <div class="tech_title">{{$t('eco.EG')}}</div>
                <div class="tech_info">
                  <div class="">{{$t('eco.EN')}}
                    <br/>{{$t('eco.DB')}}</div>
                </div>
              </div>
              <div class="tech_item tech_box_hover">
                <div class="tech_img">
                  <img src="../assets/imgs/ecological/fintech.png" alt="fintech">
                </div>
                <div class="tech_title">{{$t('eco.FIN')}}</div>
                <div class="tech_info">
                  <div class="">{{$t('eco.AT')}}
                    <br/>{{$t('eco.RT')}}</div>
                </div>
              </div>
              <div class="tech_item tech_box_hover">
                <div class="tech_img">
                  <img src="../assets/imgs/ecological/healthcare.png" alt="healthcare">
                </div>
                <div class="tech_title">{{$t('eco.HE')}}</div>
                <div class="tech_info">
                  <div class="">{{$t('eco.EA')}} 
                    <br/>{{$t('eco.SD')}}</div>
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
import Ecosystem from "./itemBanner/Ecosystem";
import ECO from "./home/eco";
import Footer from "./footer";
import { appliedEcology1 } from "../json-data/ecology";
import { appliedEcology2 } from "../json-data/ecology";
export default {
  data() {
    return {
      appliedList1: [],
      appliedList2: []
    };
  },
  components: {
    Header,
    Ecosystem,
    ECO,
    Footer
  },
  mounted() {
    this.appliedList1 = appliedEcology1;
    this.appliedList2 = appliedEcology2;
  }
};
</script>
<style lang="less">
.ecological_main {
  .tech-none {
    .box-title {
      display: none;
    }
  }
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
      height: 320px;
      // cursor: pointer;
      transition: all 0.3s linear 0s;
      &:nth-last-child(1) {
        margin-right: 0px;
      }
      .tech_img {
        width: 100%;
        background: #999999;
        height: 200px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .tech_title {
        color: #333;
        font-size: 20px;
        margin-top: 20px;
        text-align: center;
      }
      .tech_info {
        text-align: center;
        color: #666;
        font-size: 14px;
        margin-top: 20px;
        line-height: 24px;
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
@media screen and (max-width: 768px) {
  .ecological_main {
    .tech-none {
      .box-title {
        display: none;
      }
    }
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
    .ecological_list {
      margin: 0 20px;
      text-align: center;
    }
    .ecological_list_content {
      margin: 30px 0;
    }

    .tech_box {
      display: inline-block;
      margin-bottom: 0px;
      .tech_item {
        flex: 1;
        padding: 0px;
        margin-bottom: 40px;
        margin-right: 0px;
        height: auto;
        transition: all 0.3s linear 0s;
        &:nth-last-child(1) {
          margin-right: 0px;
        }
        .tech_img {
          width: 100%;
          background: #999999;
          height: 200px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .tech_title {
          color: #333;
          font-size: 20px;
          margin: 20px 0 14px 0;
          font-weight: bold;
          text-align: left;
        }
        .tech_info {
          text-align: left;
          color: #666;
          font-size: 14px;
          line-height: 22px;
          margin-top: 0px;
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
}
</style>
