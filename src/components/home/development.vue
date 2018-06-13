<template>
  <div class="development">
    <div class="dev-bg" ref="devBg"></div>
    <div class="wrap">
      <div class="show-lg development-line">
        <div class="point-left"></div>
        <div class="point-right"></div>
      </div>
      <div class="circle show-lg" v-for="(item, index) in developList" :key="index" :class="{'circle-active': index === step}" @click="clickCircle(index)">
        <span class="index">{{index + 1}}</span>.0
      </div>
      <div class="development-box clear show-lg">
        <div class="development-box-name">EVOLUTION</div>
        <div class="highlights">
          <div class="highlights-text">Highlights</div>
          <div class="highlights-item" v-for="(highlightsItem, index) in developList[step].highLight"  :key="index">
            {{highlightsItem}}
          </div>
        </div>
        <div class="representative">
          <div class="highlights-text">Representative</div>
          <div v-if="step === 0">
            <img class="representative-img" src="../../assets/imgs/logo/bitc_logo.jpg" alt="image">
          </div>
          <div v-if="step === 1">
            <img class="representative-img" src="../../assets/imgs/logo/et_logo.jpg" alt="image">
          </div>
          <div v-if="step === 2">
            <img class="representative-img" src="../../assets/imgs/logo/eos_logo.jpg" alt="image">
            <img class="representative-img" src="../../assets/imgs/logo/df_logo.jpg" alt="image">
            <img class="representative-img" src="../../assets/imgs/logo/cos_logo.jpg" alt="image">
          </div>
          <div v-if="step === 3">
            <img class="representative-img" src="../../assets/imgs/logo/seele_logo.jpg" alt="image">
          </div>
        </div>
      </div>

      
      <div class="box-title show-sm box-title-sm">EVOLUTION</div>
      <div class="show-sm dev-box-sm">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(item, index) in developList" :key="index">
            <div class="dev-box-item">
              <div class="dev-box-item-index">
                  <span class="index">{{index + 1}}</span>.0
              </div>
              <div class="dev-box-item-content">
                <div class="highlights">Highlights</div>
                <div class="dev-box-item-text" v-for="highLight in item.highLight">
                  {{highLight}}
                </div>
              </div>
              <div class="representative">Representative</div>
              <div class="representative-logo">
                <div v-if="index === 0">
                  <img class="representative-img" src="../../assets/imgs/logo/bitc_logo.jpg" alt="image">
                </div>
                <div v-if="index === 1">
                  <img class="representative-img" src="../../assets/imgs/logo/et_logo.jpg" alt="image">
                </div>
                <div v-if="index === 2">
                  <img class="representative-img" src="../../assets/imgs/logo/eos_logo.jpg" alt="image">
                  <img class="representative-img" src="../../assets/imgs/logo/df_logo.jpg" alt="image">
                  <img class="representative-img" src="../../assets/imgs/logo/cos_logo.jpg" alt="image">
                </div>
                <div v-if="index === 3">
                  <img class="representative-img" src="../../assets/imgs/logo/seele_logo.jpg" alt="image">
                </div>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
          <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
          <!-- <div class="swiper-button-next" slot="button-next"></div> -->
          <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
        <!-- <div class="dev-line-sm"></div> -->
        <!-- <div class="dev-circle-box-sm"> -->
          <!-- <div class="circle circle-sm" v-for="(item, index) in developList" :key="index" :class="{'circle-active': index === step}" @click="clickCircle(index)">
            <span class="index">{{index + 1}}</span>.0
          </div> -->
        <!-- </div> -->
        <!-- <div class="dev-content-sm">
          <div class="highlight-sm">Highlights</div>
          <div class="highlights-box-sm">
            <div class="highlights-item-sm" v-for="(highlightsItem, index) in developList[step].highLight"  :key="index">
              {{highlightsItem}}
            </div>
          </div>
          <div class="representative">
            <div class="highlights-text">Representative</div>
            <template v-if="step === 0">
              <img class="representative-img" src="../../assets/imgs/logo/bitc_logo.jpg" alt="image">
            </template>
            <template v-if="step === 1">
              <img class="representative-img" src="../../assets/imgs/logo/et_logo.jpg" alt="image">
            </template>
            <template v-if="step === 2">
              <img class="representative-img" src="../../assets/imgs/logo/eos_logo.jpg" alt="image">
              <img class="representative-img" src="../../assets/imgs/logo/df_logo.jpg" alt="image">
              <img class="representative-img" src="../../assets/imgs/logo/cos_logo.jpg" alt="image">
            </template>
            <template v-if="step === 3">
              <img class="representative-img" src="../../assets/imgs/logo/seele_logo.jpg" alt="image">
            </template>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        developList: [
          {
            id: 0,
            highLight: [
              'Transaction ledger'
            ]
          },
          {
            id: 1,
            highLight: [
              'Smart contract'
            ]
          },
          {
            id: 2,
            highLight: [
              'High performance',
              'Advanced governance',
              'Better consensus',
              'Large scale business',
              'Fundamental chain',
              'Cross chain',
            ]
          },
          {
            id: 3,
            highLight: [
            'Heterogeneous Forest Network',
            'Neural Consensus Algorithm',
            'Computing sharing between on-chain and off-chain',
            'Million TPS',
            ]
          },
        ],
        step: 3,
        timer: null,
        swiperOption: {
          loop : true,
          initialSlide: 3,
          pagination: {
            el: '.swiper-pagination',
          },
          scrollbar: {
            // el: '.swiper-scrollbar',
            // dragSize: 80,
          },
        }
      }
    },
    methods: {
      clickCircle(index) {
        this.step = index;
        // console.log(this.$refs.devBg.style);
        // this.$refs.devBg.style.backgroundImage = 'url("static/imgs/development/3.0.jpg")';
        // this.highLightList = [];
        // this.developList[index].highLight.forEach(item => {
        //   this.highLightList.push(item);
        // })
        // clearInterval(this.timer);
        // this.timer = setInterval(() => {
        //   if (this.step === 0) {
        //     this.step = 3;
        //   } else {
        //     this.step--;
        //   }
        // }, 5000);
      },
      slideEnd() {
        const index = this.$refs.mySwiper.swiper.activeIndex;
        if (index === 5) {
          this.step = 0;
        } else if (index === 0) {
          this.step = 3;
        } else {
          this.step = index - 1;
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    // created() {
    //   this.timer = setInterval(() => {
    //     if (this.step === 0) {
    //       this.step = 3;
    //     } else {
    //       this.step--;
    //     }
    //   }, 5000);
    // },
  }
</script>

<style lang="less">
  .development {
    height: 475px;
    position: relative;
    .dev-bg {
      z-index: -1;
      width: 100%;
      height: 475px;
      position: absolute;
      left: 0;
      top: 0;
    }
    .circle {
      width: 100px;
      height: 100px;
      border: 1px solid #fff;
      color: #fff;
      border-radius: 50%;
      float: left;
      text-align: center;
      line-height: 100px;
      font-size: 22px;
      margin-top: 90px;
      margin-left: 145px;
      background: #1346a2;
      cursor: pointer;
      position: relative;
      .index {
        font-size: 40px;
      }
    }
    .circle-active {
      background: #fff;
      color: #1346a2;
      box-shadow: 0 0 30px #c9dafb;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: -20px;
        top: -20px;
        width: 140px;
        height: 140px;
        background: #fff;
        box-shadow: 0 0 30px #fff;
        border-radius: 50%;
        z-index: -1;
      }
    }
   
    .development-line {
      height: 1px;
      width: 1160px;
      background: #4d83f3;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 142px;
      z-index: -1;
      .point-left, .point-right {
        position: absolute;
        width: 20px;
        height: 20px;
        background: #4d83f3;
        border-radius: 50%;
        &::before {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          left: 50%;
          top: 50%;
          background: #1346a2;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .point-left {
        left: 0;
        top: -8px;
      }
      .point-right {
        right: 0;
        top: -8px;
      }
    }
    
    .development-box {
      position: absolute;
      width: 1160px;
      height: 400px;
      box-shadow: 0 0 10px #ccc;
      background: #fff;
      left: 50%;
      top: 272px;
      transform: translateX(-50%);
      .development-box-name {
        width: 400px;
        float: left;
        margin-left: 90px;
        margin-top: 115px;
        font-size: 32px;
        color: #000;
        font-weight: 600;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          width: 70px;
          height: 4px;
          left: 0;
          top: 50px;
          background: #0383dd;
        }
      }
      .highlights-text {
        font-size: 20px;
        font-weight: 600;
        color: #1346a2;
        margin-top: 50px;
        margin-bottom: 10px;
      }
      .highlights {
        width: 420px;
        float: left;
        .highlights-item {
          margin-top: 30px;
        }
      }
      .representative {
        width: 200px;
        float: left;
        .representative-img {
          margin-top: 30px;
          box-shadow: 0 0 10px #ccc;
        }
      }
    }
  }
  @media screen and (min-width: 1000px ) {
    .development {
      .dev-bg {
        background: url(../../assets/imgs/development/5.png) no-repeat;
        /* background: -webkit-gradient(linear, 0% 0%, 0% 100%,from(#0044a8), to(#0050cb)); */
        background-size: 100% 100%;
      }
    }
  }
  @media screen and (max-width: 768px ) {
    .development {
      overflow: hidden;
      /* height: auto; */
      height: 650px;
      background: #1346a2;
      margin-top: 40px;
      .box-title-sm {
        color: #fff;
      }
      .dev-box-sm {
        background: #1346a2;
        padding: 0 20px;
        .dev-box-item {
          background: #fff;
          padding: 15px 20px;
          height: 470px;
          border-radius: 3px;
          .dev-box-item-index {
            padding-bottom: 15px;
            border-bottom: 1px solid #f2f2f2;
            color: #004eee;
            font-size: 20px;
            .index {
              font-weight: 600;
              font-size: 30px;
            }
          }
          .dev-box-item-content {
            padding: 15px 0;
            border-bottom: 1px solid #f2f2f2;
            height: 200px;
            .highlights {
              color: #000;
              font-size: 20px;
              font-weight: 600;
              margin-bottom: 10px;
            }
            .dev-box-item-text {
              margin-top: 6px;
              color: #666;
              line-height: 24px;
              font-size: 13px;
            }
           
          }
          .representative {
            color: #000;
            font-size: 20px;
            margin: 15px 0;
            font-weight: 600;
          }
          .representative-logo {
              img {
                box-shadow: 0 0 10px #ccc;
                margin-bottom: 20px;
                margin-right: 20px;
                width: 110px;
                margin-right: 6px;
              }
            }
        }



        .dev-circle-box-sm {
          width: 100px;
          height: 600px;
          border-right: 1px solid #fff;
          position: relative;
          .circle-sm {
            width: 40px;
            height: 40px;
            line-height: 40px;
            margin: auto;
            position: absolute;
            left: 0;
            top: 0;
            font-size: 16px;
            .index {
              font-size: 16px;
            }
            &:nth-child(4) {
              left: 80px;
              top: 46px;
            }
            &:nth-child(3) {
              left: 80px;
              top: 175px;
            }
            &:nth-child(2) {
              left: 80px;
              top: 320px;
            }
            &:nth-child(1) {
              left: 80px;
              top: 470px;
            }
          }
        }
        .dev-content-sm {
          flex: 1;
          height: 600px;
          padding-left: 80px;
          .highlight-sm {
            font-size: 20px;
            margin-top: 50px;
            color: #fff;
          }
          .highlights-box-sm {
            height: 200px;
            .highlights-item-sm {
              font-size: 14px;
              margin-top: 20px;
              color: #fff;
            }
          }
          .representative {
            .highlights-text {
              color: #fff;
              font-size: 20px;
              margin-top: 20px;
            }
            .representative-img {
              margin-top: 15px;
            }
          }
        }
      }
    }
  }
</style>