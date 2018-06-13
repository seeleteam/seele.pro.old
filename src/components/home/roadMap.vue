<template>
  <div class="road-map" id="roadmap">
    <div class="box-title road-map-title">ROAD MAP</div>
    <div class="wrap show-lg">
      <div class="road-line"></div> 
      <div class="step-box">
        <div class="step-one step-before">
          <i></i>
          <div class="step-date">2018 Q1</div>
          <div class="step-info">Minimum feasibility verification</div>
        </div>
        <div class="step-two step-before">
          <i></i>
          <div class="step-date">2018 Q2</div>
          <div class="step-info">Complete the test network</div>
        </div>
        <div class="step-three">
          <i></i>
          <div class="step-date">2018 Q3</div>
          <div class="step-info">Core function test and performance optimization</div>
        </div>
        <div class="step-four">
          <i></i>
          <div class="step-date">2018 Q4</div>
          <div class="step-info">Publish mainnet</div>
        </div>
        <div class="step-five">
          <i></i>
          <div class="step-date">2019 Q1</div>
          <div class="step-info">Build application support tools</div>
        </div>
        <!-- <el-tooltip class="item" effect="light" content="tips" placement="top"> -->
          <div class="step-1"></div>
        <!-- </el-tooltip> -->
        <!-- <el-tooltip class="item" effect="light" content="tips" placement="top"> -->
          <div class="step-2"></div>
        <!-- </el-tooltip> -->
        <!-- <el-tooltip class="item" effect="light" content="1. P2P network foundation, peer detection and discovering
          2. Consensus algorithm framework and baseline implementation (PoW)
          3. Simple transaction module
          4. Miner module
          5. Account module
          6. Encryption, signature, log, local storage
          7. RPC framework  " placement="top">
          <div class="step-3"></div>
        </el-tooltip> -->
        <el-tooltip class="item" effect="light" placement="top">
          <div slot="content" >
            1. P2P network foundation, peer detection and discovering<br/>
            2. Consensus algorithm framework and baseline implementation (PoW)<br/>
            3. Simple transaction module<br/>
            4. Miner module<br/>
            5. Account module<br/>
            6. Encryption, signature, log, local storage<br/>
            7. RPC framework"<br/>
          </div>
          <div class="step-3"></div>
        </el-tooltip>
        <div class="step-4"></div>
        <div class="step-5"></div>
        <div class="step-6"></div>
        <div class="step-7"></div>
        <div class="step-8"></div>
        <div class="step-9"></div>
        <div class="step-10"></div>
        <div class="step-11"></div>
        <div class="step-12"></div>
        <div class="step-13"></div>
        <div class="step-14"></div>
        <div class="step-15"></div>
      </div>
    </div>
    <div class="show-sm">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(item, index) in roadList" :key="index" class="road-item">
            <div>{{item.title}}</div>
            <div class="road-line-sm"></div>
            <div>{{item.info}}</div>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
          <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
          <!-- <div class="swiper-button-next" slot="button-next"></div> -->
          <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>

      <!-- <div class="road-item">
        <div class="step-date">2018 Q1</div>
        <div class="step-info">Minimum feasibility verification</div>
      </div>
      <div class="road-item">
        <div class="step-date">2018 Q2</div>
        <div class="step-info">Completing the test network</div>
      </div>
      <div class="road-item">
        <div class="step-date">2018 Q3</div>
        <div class="step-info">Core function test and performance optimization</div>
      </div>
      <div class="road-item">
        <div class="step-date">2018 Q4</div>
        <div class="step-info">Publishing mainnet</div>
      </div>
      <div class="road-item">
        <div class="step-date">2019 Q1</div>
        <div class="step-info">Building application support tools</div>
      </div> -->
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        roadList: [
          {
            title: '2018 Q1',
            info: 'Minimum feasibility verification'
          },
          {
            title: '2018 Q2',
            info: 'Complete the test network'
          },
          {
            title: '2018 Q3',
            info: 'Core function test and performance optimization'
          },
          {
            title: '2018 Q4',
            info: 'Publish mainnet'
          },
          {
            title: '2019 Q1',
            info: 'Build application support tools'
          },
        ],
        swiperOption: {
          loop : true,
          pagination: {
            el: '.swiper-pagination',
          },
        }
      }
    }
  }
</script>
<style lang="less">
  .road-map {
    height: 340px;
    background: #195eed;
    overflow: hidden;
    position: relative;
    margin: 90px 0;
    .road-map-title {
      color: #fff;
      margin-top: 90px;
    }
    .road-line {
      height: 1px;
      width: 100%;
      background: #759ef4;
      position: absolute;
      left: 0;
      top: 209px;
    }
    .step-box {
      position: relative;
        
      .step-one ,.step-two, .step-three, .step-four, .step-five {
        width: 25px;
        height: 25px;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        top: 32px;
        i {
          position: absolute;
          width: 10px;
          height: 10px;
          background: #195eed;
          border-radius: 50%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%)
        }
        
      }
      .step-before {
        background: #000;
        i {
          background: #fff;
        }
      }
      .step-one {
        left: 66px;
      }
      .step-two {
        left: 259px;
      }
      .step-three {
        left: 490px;
      }
      .step-four {
        left: 724px;
      }
      .step-five {
        left: 954px;
      }
      .step-date {
        width: 100px;
        position: absolute;
        left: -25px;
        top: -40px;
        color: #fff;
        font-size: 20px;
      }
      .step-info {
        width: 200px;
        position: absolute;
        left: -75px;
        top: 40px;
        color: #fff;
        font-size: 14px;
        text-align: center;
      }
      .step-1, .step-2, .step-3, .step-4, .step-5, .step-6, .step-7, .step-8, .step-9, .step-10, .step-11, .step-12, .step-13, .step-14, .step-15 {
        position: absolute;
        width: 10px;
        height: 10px;
        background: #edc819;
        border-radius: 50%;
        top: 40px;
      }
      .step-4, .step-5, .step-6, .step-7, .step-8, .step-9, .step-10, .step-11, .step-12, .step-13, .step-14, .step-15 {
        background: #ccc;
      }
      .step-1 {
        left: 116px;
      }
      .step-2 {
        left: 169px;
      }
      .step-3 {
        left: 220px;
      }
      .step-4 {
        left: 319px;
      }
      .step-5 {
        left: 377px;
      }
      .step-6 {
        left: 441px;
      }
      .step-7 {
        left: 554px;
      }
      .step-8 {
        left: 613px;
      }
      .step-9 {
        left: 676px;
      }
      .step-10 {
        left: 787px;
      }
      .step-11 {
        left: 850px;
      }
      .step-12 {
        left: 908px;
      }
      .step-13 {
        left: 1010px;
      }
      .step-14 {
        left: 1064px;
      }
      .step-15 {
        left: 1120px;
      }
    }
  }
  .el-tooltip__popper.is-light {
    max-width: 420px;
  }
  @media screen and (max-width: 768px ) {
    .road-map {
      height: auto;
      margin: auto;
      background: #1745a3;
      max-height: 300px;
      .road-map-title {
        margin-top: 50px;
      }
      .swiper-container {
        padding-bottom: 60px;
      }
      .road-item {
        text-align: center;
        color: #fff;
        &:nth-child(2), &:nth-last-child(1), &:nth-child(3){
          .road-line-sm {
            &::before {
              background: #0c328e;
            }
            &::after {
              background: #fff;
            }
          }
        }
        .road-line-sm {
          width: 100%;
          height: 1px;
          background: #748fc8;
          box-sizing: border-box;
          margin: 30px 0;
          position: relative;
          &::before {
            content: '';
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            top: 0;
            width: 20px;
            height: 20px;
            background: #fff;
            border-radius: 50%;
          }
          &::after {
            content: '';
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            top: 0;
            width: 10px;
            height: 10px;
            background: #1745a2;
            border-radius: 50%;
          }
        }
      }
      
    }
  }
  @media screen and (min-width: 900px ) {
    .road-map {
      min-width: 1160px;
    }
  }
</style>