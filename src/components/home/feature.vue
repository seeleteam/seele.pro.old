<template>
  <div id="feature" class="feature">
    <div class="box-title feature-title">{{$t('features.features')}}</div>
    <div class="feature-box">
      <div class="wrap">
        <div class="feature-item">
          <div class="feature-item-left" v-bind:style="{backgroundImage:`url(${$t('features.NCA_img')}`}">
          </div>
          <div class="feature-item-content">
            <div class="feature-item-title">
                {{$t('features.NCA')}}
            </div>
            <div class="feature-item-info">
              {{$t('features.NCA_Content')}}
            </div>
            <div class="feature-item-icons">
              <div class="feature-item-icons-icon"><span>{{$t('features.safety')}}</span></div>
              <div class="feature-item-icons-icon"><span>{{$t('features.compatibility')}}</span></div>
              <div class="feature-item-icons-icon"><span>{{$t('features.flexibility')}}</span></div>
              <div class="feature-item-icons-icon"><span>{{$t('features.efficiency')}}</span></div>
              <div class="feature-item-icons-icon"><span>{{$t('features.ES')}}</span></div>
            </div>
          </div>
        </div>
        <div class="feature-item">
          <div class="feature-item-left">
          </div>
          <div class="feature-item-content">
            <div class="feature-item-title">
              {{$t('features.HFN')}}
            </div>
            <div class="feature-item-info">
              {{$t('features.HFN_Content')}}
            </div>
            <div class="feature-item-icons">
              <div class="feature-item-icons-icon"><span>{{$t('features.ESC')}}</span></div>
              <div class="feature-item-icons-icon"><span>{{$t('features.CC')}}</span></div>
              <div class="feature-item-icons-icon"><span>{{$t('features.SE')}}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>
<style lang="less">
  .feature {
    .feature-title {
      margin-top: 250px;
    }
    .feature-box {
      box-sizing: border-box;
      height: 1020px;
      width: 100%;
      background: #eef3f5;
      padding: 90px;
      .feature-item {
        width: 100%;
        height: 400px;
        margin-bottom: 40px;
        display: flex;
        background: #fff;
        .feature-item-left {
          width: 400px;
          height: 400px;
          // background: #195eed;
          background-repeat:  no-repeat;
          background-size: 100%;
        }
        .feature-item-content {
          flex: 1;
          height: 400px;
          box-sizing: border-box;
          padding: 60px;
          .feature-item-title {
            font-size: 32px;
            color: #1346a2;
          }
          .feature-item-info {
            font-size: 16px;
            padding: 30px 0;
            line-height: 25px;
            border-bottom: 1px solid #eef3f5;
          }
          .feature-item-icons {
            padding-top: 20px;
            box-sizing: border-box;
            display: flex;
            .feature-item-icons-icon {
              /* width: 50px; */
              flex:1;
              height: 50px;
              position: relative;
              span{
                user-select: none;
                position: absolute;
                display: inline-block;
                font-size: 14px;
                color:#333;
                top:56px;
                left: calc(20px - 50%);
              }
              @media (min-width: 768px) {
                span{
                      width: 100%;
                      text-align: center;
                }
              }
              &:nth-child(1) {
                background: url('../../assets/imgs/feature/icon_sprite.png') no-repeat -55px -40px;
              }
              &:nth-child(2) {
                background: url('../../assets/imgs/feature/icon_sprite.png') no-repeat -55px -423px;
              }
              &:nth-child(3) {
                background: url('../../assets/imgs/feature/icon_sprite.png') no-repeat -55px -710px;
              }
              &:nth-child(4) {
                background: url('../../assets/imgs/feature/icon_sprite.png') no-repeat -55px -326px;
              }
              &:nth-child(5) {
                background: url('../../assets/imgs/feature/icon_sprite.png') no-repeat -55px -615px;
              }
            }
            img {
              margin-right: 40px;
              margin-left: 40px;
              position: relative;
              &::after {
                content:'ENTERPRISE';
                position: absolute;
                left: -20px;
                top: 60px;
                width: 100px;
                font-size: 16px;
                color: #111;
                text-align: center;
              }
            }
          }
          .feature-text {
            span {
              display: inline-block;
              font-size: 15px;
              margin-top: 10px;
            }
            span:nth-child(1) {
              margin-left: 28px;
            }
            span:nth-child(2) {
              margin-left: 62px;
            }
            span:nth-child(3) {
              margin-left: 62px;
            }
            span:nth-child(4) {
              margin-left: 57px;
            }
            span:nth-child(5) {
              margin-left: 68px;
            }
          }
        }
        &:nth-child(2) {
          .feature-item-icons {
            .feature-item-icons-icon {
              span{
                user-select: none;
                position: absolute;
                display: inline-block;
                font-size: 14px;
                color:#333;
                top:56px;
                
                left: calc(20px - 18%);
              }
              @media (min-width: 768px) {
                  width: 100%;
                  text-align: center;
              }
              &:nth-child(1) {
                background: url('../../assets/imgs/feature/icon_sprite.png') no-repeat 11px -130px;
              }
              &:nth-child(2) {
                background: url('../../assets/imgs/feature/icon_sprite.png') no-repeat 11px -228px;
              }
              &:nth-child(3) {
                background: url('../../assets/imgs/feature/icon_sprite.png') no-repeat 11px -518px;
              }
            }
            img { 
              margin-left: 65px;
              &:nth-child(2) {
                margin-left: 154px;
              }
              &:nth-child(3) {
                margin-left: 127px;
              }
            }
          }
          .feature-text {
            span:nth-child(2) {
              margin-left: 52px;
            }
            span:nth-child(3) {
              margin-left: 50px;
            }
            span:nth-child(4) {
              margin-left: 45px;
            }
            span:nth-child(5) {
              margin-left: 55px;
            }
          }
        }
        &:nth-child(2) {
          .feature-item-left {
            background: url('../../assets/imgs/startHere/Network.jpg') no-repeat;
            background-size: 100%;
          }
          .feature-item-icons {
            .feature-item-icons-icon:nth-child(2)::before {
              left: -7px;
            }
          }
          .feature-text {
            span:nth-child(1) {
              margin-left: 0px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px ) {
    .feature {
      .feature-title {
        margin-top: 40px;
      }
      .feature-box {
        padding: 0 20px 20px;
        height: auto;
        background: #fff;
        .feature-item {
          width: 100%;
          height: auto;
          display: block;
          overflow: hidden;
          margin-bottom: auto;
          .feature-item-left {
            width: 300px;
            height: 300px;
            margin: 0 auto;
            margin-top: 20px;
          }
          .feature-item-content {
            padding: 0;
            text-align: center;
            height: auto;
            .feature-item-info {
              padding: 15px 0;
              text-align: left;
              line-height: 24px;
              color: #666;
            }
            .feature-item-title {
              font-size: 20px;
              margin-top: 10px;
              text-align: left;
              color: #000;
              font-weight: 600;
            }
            .feature-item-icons {
              /* width: 280px; */
              display: block;
              .feature-item-icons-icon {
                /* margin-left: 16px; */
                width: 140px;
                margin-top: 9px;
                &:nth-child(odd) {
                  float: left;
                }
                &:nth-child(even) {
                  float: right;
                }
                span{
                  left: 50px;
                  top: 14px
                }
              }
              .feature-item-icons-icon::before {
                font-size: 14px;
              }
            }
            .feature-text {
              display: flex;
              span {
                flex: 1;
                font-size: 14px;
                margin-left: 0;
                &:nth-child(1), &:nth-child(3), &:nth-child(4), &:nth-child(5) {
                  margin-left: 0;
                }
                &:nth-child(2) {
                  margin-left: 10px;
                }
              }
            }
          }
          &:nth-child(2) {
            margin-top: 40px;
            .feature-item-left {
              margin-top: auto;
            }
            .feature-item-icons {
              .feature-item-icons-icon {
                width: 250px;
                margin: 0 auto;
                margin-top: 9px;
                &:nth-child(1) {
                  background-position: -55px -130px;
                }
                &:nth-child(2) {
                  float: left;
                  background-position: -55px -228px;
                }
                &:nth-child(3) {
                  background-position: -55px -518px;
                }
              }
              
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 900px ) {
    .feature {
      min-width: 1160px;
    }
  }
</style>