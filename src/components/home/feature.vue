<template>
  <div id="feature" class="feature">
    <div class="box-title feature-title">FEATURES</div>
    <div class="feature-box">
      <div class="wrap">
        <div class="feature-item">
          <div class="feature-item-left">
          </div>
          <div class="feature-item-content">
            <div class="feature-item-title">
                Neural Consensus Algorithm
            </div>
            <div class="feature-item-info">
                Seele created "Neural Consensus Algorithm". It transforms the consensus problem into an asynchronous request, 
                processing and sorting data in a large-scale environment based on "micro-real numbers". It will not only ensure 
                safety and low energy consumption, but it will also ensure strong linear augmenting ability. The performance is linearly
                accelerated as the node size increases to satisfy business requirements.
            </div>
            <div class="feature-item-icons">
              <div class="feature-item-icons-icon"></div>
              <div class="feature-item-icons-icon"></div>
              <div class="feature-item-icons-icon"></div>
              <div class="feature-item-icons-icon"></div>
              <div class="feature-item-icons-icon"></div>
            </div>
          </div>
        </div>
        <div class="feature-item">
          <div class="feature-item-left">
          </div>
          <div class="feature-item-content">
            <div class="feature-item-title">
              Heterogeneous Forest Network
            </div>
            <div class="feature-item-info">
                Heterogeneous forest network is made up of different subnets. Each subnet can be seen as a stratified tree, which can handle the different service scenarios independently and interact with each other through cross-chain protocol.
            </div>
            <div class="feature-item-icons">
              <div class="feature-item-icons-icon"></div>
              <div class="feature-item-icons-icon"></div>
              <div class="feature-item-icons-icon"></div>
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
          background: #195eed;
          background: url('../../assets/imgs/startHere/Algorithm.png') no-repeat;
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
              &:nth-child(1) {
                background: url('../../assets/imgs/feature/icon_sprite.png') no-repeat -55px -40px;
                &::before {
                  content: 'Safety';
                  position: absolute;
                  font-size: 14px;
                  color: #333;
                  left: -1px;
                  top: 56px;
                }
              }
              &:nth-child(2) {
                background: url('../../assets/imgs/feature/icon_sprite.png') no-repeat -55px -423px;
                &::before {
                  content: 'Compatibility';
                  position: absolute;
                  font-size: 14px;
                  color: #333;
                  left: -21px;
                  top: 56px;
                }
              }
              &:nth-child(3) {
                background: url('../../assets/imgs/feature/icon_sprite.png') no-repeat -55px -710px;
                &::before {
                  content: 'Flexibility';
                  position: absolute;
                  font-size: 14px;
                  color: #333;
                  left: -4px;
                  top: 56px;
                }
              }
              &:nth-child(4) {
                background: url('../../assets/imgs/feature/icon_sprite.png') no-repeat -55px -326px;
                &::before {
                  content: 'Efficiency';
                  position: absolute;
                  font-size: 14px;
                  color: #333;
                  left: -4px;
                  top: 56px;
                }
              }
              &:nth-child(5) {
                background: url('../../assets/imgs/feature/icon_sprite.png') no-repeat -55px -615px;
                &::before {
                  content: 'Energy-saving';
                  position: absolute;
                  font-size: 14px;
                  color: #333;
                  left: -12px;
                  top: 56px;
                }
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
              &:nth-child(1) {
                background: url('../../assets/imgs/feature/icon_sprite.png') no-repeat 11px -130px;
                &::before {
                  content: 'Extensive Service Coverage';
                  position: absolute;
                  font-size: 14px;
                  color: #333;
                  left: -7px;
                  top: 56px;
                }
              }
              &:nth-child(2) {
                background: url('../../assets/imgs/feature/icon_sprite.png') no-repeat 11px -228px;
                &::before {
                  content: 'Cross-chain & Cross-domain';
                  position: absolute;
                  font-size: 14px;
                  color: #333;
                  left: 7px;
                  top: 56px;
                }
              }
              &:nth-child(3) {
                background: url('../../assets/imgs/feature/icon_sprite.png') no-repeat 11px -518px;
                &::before {
                  content: 'Secure and Efficient';
                  position: absolute;
                  font-size: 14px;
                  color: #333;
                  left: 17px;
                  top: 56px;
                }
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
            background: url('../../assets/imgs/startHere/Network.png') no-repeat;
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
                &:nth-child(1) {
                  &::before {
                    left: 50px;
                    top: 14px;
                  }
                }
                &:nth-child(2) {
                  &::before {
                    left: 50px;
                    top: 14px;
                  }
                }
                &:nth-child(3) {
                  &::before {
                    left: 50px;
                    top: 14px;
                  }
                }
                &:nth-child(4) {
                  &::before {
                    left: 50px;
                    top: 14px;
                  }
                }
                &:nth-child(5) {
                  &::before {
                    left: 50px;
                    top: 10px;
                  }
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