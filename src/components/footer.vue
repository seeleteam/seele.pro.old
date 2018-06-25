<!-- start here -->
<template>
  <div class="footer">
    <div class="wrap">
      <div class="footer-email">
        <div class="footer-email-item">contact@seele.pro</div>
        <div class="footer-email-item">media@seele.pro</div>
      </div>
      <div class="footer-icons">
          <a href="https://medium.com/seeletech" target="_blank">
            <div class="footer-icons-icon"></div>
            <!-- <img src="../assets/imgs/footer/micon.png" alt="micon"> -->
          </a>
          <a href="https://facebook.com/seeletech" target="_blank">
            <div class="footer-icons-icon"></div>
            <!-- <img src="../assets/imgs/footer/facebook.png" alt="facebook"> -->
          </a>
          <a href="https://www.instagram.com/seeletech/" target="_blank">
            <div class="footer-icons-icon"></div>
            <!-- <img src="../assets/imgs/footer/instagram.png" alt="instagram"> -->
          </a>
          <a href="https://www.linkedin.com/company/seeletech" target="_blank">
            <div class="footer-icons-icon"></div>
            <!-- <img src="../assets/imgs/footer/in.png" alt="in"> -->
          </a>
          <a href="https://t.me/seeletech" target="_blank">
            <div class="footer-icons-icon"></div>
            <!-- <img src="../assets/imgs/footer/telegram.png" alt="telegram"> -->
          </a>
          <a href="https://twitter.com/SeeleTech" target="_blank">
            <div class="footer-icons-icon"></div>
            <!-- <img src="../assets/imgs/footer/twitter.png" alt="twitter"> -->
          </a>
          <a href="https://bitcointalk.org/index.php?topic=2820292.new#new" target="_blank">
            <div class="footer-icons-icon"></div>
            <!-- <img src="../assets/imgs/footer/bitcoin.png" alt="bitcoin"> -->
          </a>
          <a href="https://reddit.com/r/seelenetwork" target="_blank">
            <div class="footer-icons-icon"></div>
            <!-- <img src="../assets/imgs/footer/reddit.png" alt="reddit"> -->
          </a>
          <a href="https://github.com/seeleteam" target="_blank">
            <div class="footer-icons-icon"></div>
            <!-- <img src="../assets/imgs/footer/github.png" alt="github"> -->
          </a>
          <a href="https://weibo.com/u/6561132287" target="_blank">
            <div class="footer-icons-icon"></div>
            <!-- <img src="../assets/imgs/footer/xinlang.png" alt="xinlang"> -->
          </a>
      </div>
    </div>
    <div class="footer-copyright">
      Copyright © 2018 Seele Foundation
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },
};
</script>
<style lang="less">
  .footer {
    background: #202020;
    .footer-email {
      display: flex;
      padding: 30px 0;
      color: #5c5c5c;
      font-size: 20px;
      text-align: center;
      border-bottom: 1px solid #5c5c5c;
      .footer-email-item {
        flex: 1;
        &:nth-child(1) {
          margin-right: -650px;
        }
      }
    }
    .footer-icons {
      padding: 40px 0;
      text-align: center;
      .footer-icons-icon {
        width: 30px;
        height: 30px;
      }
      
      a {
        display: inline-block;
        margin: 0 20px;
        &:nth-child(1) {
          .footer-icons-icon {
            background: url('../assets/imgs/footer/footer_icons.png') no-repeat 3px -45px;
            background-size: 40px;
          }
        }
        &:nth-child(2) {
          .footer-icons-icon {
            background: url('../assets/imgs/footer/footer_icons.png') no-repeat 3px -428px;
            background-size: 40px;
          }
        }
        &:nth-child(3) {
          .footer-icons-icon {
            background: url('../assets/imgs/footer/footer_icons.png') no-repeat 3px -380px;
            background-size: 40px;
          }
        }
        &:nth-child(3) {
          .footer-icons-icon {
            background: url('../assets/imgs/footer/footer_icons.png') no-repeat 3px -380px;
            background-size: 40px;
          }
        }
        &:nth-child(4) {
          .footer-icons-icon {
            background: url('../assets/imgs/footer/footer_icons.png') no-repeat 3px -285px;
            background-size: 40px;
          }
        }
        &:nth-child(5) {
          .footer-icons-icon {
            background: url('../assets/imgs/footer/footer_icons.png') no-repeat 3px 7px;
            background-size: 40px;
          }
        }
        &:nth-child(6) {
          .footer-icons-icon {
            background: url('../assets/imgs/footer/footer_icons.png') no-repeat 3px -183px;
            background-size: 40px;
          }
        }
        &:nth-child(7) {
          .footer-icons-icon {
            background: url('../assets/imgs/footer/footer_icons.png') no-repeat 3px -473px;
            background-size: 40px;
          }
        }
        &:nth-child(8) {
          .footer-icons-icon {
            background: url('../assets/imgs/footer/footer_icons.png') no-repeat 3px -90px;
            background-size: 40px;
          }
        }
        &:nth-child(9) {
          .footer-icons-icon {
            background: url('../assets/imgs/footer/footer_icons.png') no-repeat 3px -328px;
            background-size: 40px;
          }
        }
        &:nth-child(10) {
          .footer-icons-icon {
            background: url('../assets/imgs/footer/footer_icons.png') no-repeat 3px -235px;
            background-size: 40px;
          }
        }
      }
    }
    .footer-copyright {
      height: 50px;
      line-height: 50px;
      color: #6d6d6d;
      font-size: 16px;
      background: #282828;
      text-align: center;
    }
  }
  @media screen and (max-width: 768px ) {
    .footer {
      .footer-email {
        display: block;
        padding: 10px 0;
        font-size: 16px;
        .footer-email-item:nth-child(1) {
          margin-right: 0;
          margin-bottom: 10px;
        }
      }
      .footer-icons {
        padding: 10px 0;
        img {
          width: 20px;
          height: 20px;
          margin-bottom: 20px;
        }
      }
      .footer-copyright {
        height: 30px;
        font-size: 16px;
        line-height: 30px;
      }
    }
  }
  @media screen and (min-width: 900px ) {
    .footer {
      min-width: 1160px;
    }
  }
</style>
      
