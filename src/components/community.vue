<!-- community -->
<template>
    <div>
      <Header></Header>
      <community></community>
      <div class="community_main">
        <hgroup class="community_list wrap">
          <p class="box-title community-title">{{$t('community.SN')}}</p>
          <div class="social_icons">
            <a href="https://medium.com/seeletech" target="_blank">
              <span class="community-micon"></span>
            </a>
            <a href="https://facebook.com/seeletech" target="_blank">
              <span class="community-facebook"></span>
            </a>
            <a href="https://www.instagram.com/seeletech/" target="_blank">
              <span class="community-instagram"></span>
            </a>
            <a href="https://www.linkedin.com/company/seeletech" target="_blank">
              <span class="community-in"></span>
            </a>
            <a v-bind:href="$t('community.telegram')" target="_blank">
              <span class="community-telegram"></span>
            </a>
          </div>
          <div class="social_icons">
            <a href="https://twitter.com/SeeleTech" target="_blank">
              <span class="community-twitter"></span>
            </a>
            <a href="https://bitcointalk.org/index.php?topic=2820292.new#new" target="_blank">
              <span class="community-bitcoin"></span>
            </a>
            <a href="https://www.reddit.com/r/IAmA/comments/7wb5no/this_is_seeleteam_block_chain_40_technologyask_us/" target="_blank">
              <span class="community-reddit"></span>
            </a>
            <a href="https://github.com/seeleteam" target="_blank">
              <span class="community-github"></span>
            </a>
            <a href="https://weibo.com/u/6561132287" target="_blank">
              <span class="community-xinlang"></span>
            </a>

          </div>
          <div class="social_icons">
            <a href="https://open.kakao.com/o/gzCv6HT" target="_blank">
                <span class="community-talk"></span>
              </a>
          </div>
          <div class="faq_button_wrap">
            <router-link :to="{path: 'faq'}">
              <a class="community-button show-lg whitepaper_download" :data-title="$t('community.FAQ')">
                <span><span >{{$t('community.FAQ')}}</span></span>
              </a>
            </router-link>
            
            <router-link :to="{path: 'faq'}">
              <a  class="show-sm faq_button">{{$t('community.FAQ')}}</a>
            </router-link>
          </div>
        </hgroup>
        <div class="meetups-wrap">
          <div class="meetups-masker-wrap">
              <div class="mask-wrap"></div>
              <div class="wrap">
                  <div class="mask-info-mask">
                    <div class="mask-meetups-title">{{$t('community.meet')}}</div>
                      <router-link :to="{path: 'meetups'}">
                        <div class="mask-meetups-info">{{$t('community.event')}}</div>
                      </router-link>
                  </div>
              </div>
          </div>
        </div>
        <hgroup class="community_list wrap">
          <div class="box-title">
            <div>{{$t('community.subscribe')}}</div>
            <div class="subscribe_subhead">{{$t('community.subsc')}}</div>
          </div>
          <div class="community_subscribe_content">
            <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" class="demo-dynamic">
              <el-form-item
                prop="email"
                :rules="[
                  { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                  { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                ]"
              >
                <span class="form_label">{{$t('community.email')}}:</span>
                <el-input v-model="dynamicValidateForm.email"></el-input>
              </el-form-item>
              <div class="button_wrap">
                <a class="community-button show-lg" :data-title="$t('community.submit')" @click="submitForm('dynamicValidateForm')">
                  <span><span >{{$t('community.submit')}}</span></span>
                </a>
                <a  class="show-sm faq_button" @click="submitForm('dynamicValidateForm')">{{$t('community.submit')}}</a>
              </div>
            </el-form>
          </div>
        </hgroup>
      </div>
      <Footer></Footer>
    </div>
</template>
<script>
import Header from "./header";
import community from "./itemBanner/community";
import Footer from "./footer";
import { baseUrl } from "../config/port";
export default {
  data() {
    return {
      dynamicValidateForm: {
        email: ""
      }
    };
  },
  components: {
    Header,
    community,
    Footer
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let _this = this;
          _this
            .$ajax({
              method: "post",
              url: baseUrl + "/subscribe",
              data: {
                email: this.dynamicValidateForm.email
              }
            })
            .then(function(response) {
              if (response.data.code == 200) {
                _this.dynamicValidateForm.email = ''
                _this.$notify({
                  title: "Success",
                  message: response.data.msg,
                  type: "success"
                });
              } else {
                _this.$notify({
                  title: "Warning",
                  message: response.data.msg,
                  type: "warning"
                });
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          this.$notify({
            title: "Warning",
            message: "Please enter the correct email address.",
            type: "warning"
          });
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less">
.community_main {
  .meetups-wrap {
    height: 655px;
    margin: 90px 0;
    background-image: url("../assets/imgs/community/meetups.jpg");
    @media (max-width: 768px) {
        background-image: url("../assets/imgs/community/Pmeetups.jpg");
    }
    background-size: 100% 100%;
  }
  .meetups-masker-wrap {
    position: relative;
  }
  .mask-wrap {
    text-align: center;
    width: 100%;
    height: 655px;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .mask-info-mask {
    text-align: center;
    color: #fff;
    width: 1160px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .mask-meetups-title {
    font-size: 30px;
    margin-bottom: 60px;
  }
  .mask-meetups-info {
    font-size: 48px;
    color: #fff;
    &:hover {
      color: #1346a2;
    }
  }
  .social_icons {
    padding-bottom: 50px;
    margin: 0 auto;
    width: 1120px;
    a {
      width: 180px;
      height: 180px;
      display: inline-block;
      text-align: center;
      margin: 0 20px;
      &:hover {
        box-shadow: 0 0 10px #ccc;
        transition: 0.3s all linear;
      }
      span {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        display: inline-block;
        width: 82px;
        height: 82px;
      }
    }
    .community-micon {
      background-image: url(../assets/imgs/social/micon.png);
      background-size: 100% 100%;
    }
    .community-facebook {
      background-image: url(../assets/imgs/social/Facebook-2.png);
      background-size: 100% 100%;
    }
    .community-instagram {
      background-image: url(../assets/imgs/social/instagram.png);
      background-size: 100% 100%;
    }
    .community-in {
      background-image: url(../assets/imgs/social/in.png);
      background-size: 100% 100%;
    }
    .community-telegram {
      background-image: url(../assets/imgs/social/telegram.png);
      background-size: 100% 100%;
    }
    .community-twitter {
      background-image: url(../assets/imgs/social/twitter.png);
      background-size: 100% 100%;
    }
    .community-bitcoin {
      background-image: url(../assets/imgs/social/bitcoin.png);
      background-size: 100% 100%;
    }
    .community-reddit {
      background-image: url(../assets/imgs/social/reddit.png);
      background-size: 100% 100%;
    }
    .community-github {
      background-image: url(../assets/imgs/social/github.png);
      background-size: 100% 100%;
    }
    .community-xinlang {
      background-image: url(../assets/imgs/social/xinlang.png);
      background-size: 100% 100%;
    }
    .community-talk {
      background-image: url(../assets/imgs/social/talk.png);
      background-size: 100% 100%;
    }
  }
  .faq_button_wrap {
    text-align: center;
  }
  .subscribe_subhead {
    margin-top: 20px;
    font-size: 14px;
    color: #666;
    letter-spacing: 1px;
  }
  .community_subscribe_content {
    text-align: center;
    .el-form {
      padding: 20px 0;
      text-align: center;
      .form_label {
        font-size: 24px;
        color: #1346a2;
      }
      .el-input {
        display: inline;
        font-size: 16px;
        input {
          width: 440px;
          height: 62px;
          border: 1px solid #1346a2;
          margin-left: 15px;
        }
      }
      .el-form-item__error {
        display: none;
      }
      .el-form-item__content {
        line-height: 0px;
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .community-button {
    display: inline-block;
    position: relative;
    width: 240px;
    height: 50px;
    font-size: 16px;
    z-index: 2;
    border: 2px solid #1346a2;
    cursor: pointer;
    color: #202020;
  }
  .community-button:hover {
    border: 2px solid #1346a2;
  }
  .community-button > span {
    display: block;
    position: absolute;
    overflow: hidden;
    left: 0;
    top: 0;
    width: 0%;
    height: 100%;
    /* border-radius: 30px; */
    -webkit-transition: 0.7s ease-in-out;
    -moz-transition: 0.7s ease-in-out;
    -o-transition: 0.7s ease-in-out;
    transition: 0.7s ease-in-out;
  }
  .community-button:after,
  .community-button > span > span {
    display: block;
    text-align: center;
    /* border-radius: 30px; */
    padding: 1em 0;
  }
  .community-button:after {
    content: attr(data-title);
    width: 100%;
    color: #202020;
  }
  .community-button > span > span {
    width: 244px;
    background: #1346a2;
    color: #fff;
  }
  .community-button:hover > span {
    /* border-radius: 30px; */
    margin-left: -2px;
    width: 102%;
  }
}
@media screen and (min-width: 600px) and (max-width: 900px) {
  .community_main {
    .meetups-wrap {
      height: 400px;
      margin: 40px 0;
    }
    .mask-wrap {
      width: auto;
      height: 400px;
      background-color: rgba(0, 0, 0, 0.3);
    }
    .mask-info-mask {
      text-align: center;
      width: 100%;
    }
    .mask-meetups-title {
      font-size: 30px;
      margin-bottom: 20px;
    }
    .mask-meetups-info {
      font-size: 22px;
      color: #fff;
      &:hover {
        color: #1346a2;
      }
    }
    .social_icons {
      padding-bottom: 20px;
      width: calc(85% + 20px);
     
      a {
        width: calc(20% - 4px);
        height: 60px;
        display: inline-block;
        text-align: center;
        margin: 0;

        &:hover {
          box-shadow: 0 0 10px #ccc;
          transition: 0.3s all linear;
        }
        span {
          position: relative;
          top: 50%;
          transform: translateY(-50%);
          display: inline-block;
          width: 38px;
          height: 38px;
        }
      }
      .community-micon {
        background-image: url(../assets/imgs/socialP/micon.png);
        background-size: 100% 100%;
      }
      .community-facebook {
        background-image: url(../assets/imgs/socialP/Facebook-2.png);
        background-size: 100% 100%;
      }
      .community-instagram {
        background-image: url(../assets/imgs/socialP/instagram.png);
        background-size: 100% 100%;
      }
      .community-in {
        background-image: url(../assets/imgs/socialP/in.png);
        background-size: 100% 100%;
      }
      .community-telegram {
        background-image: url(../assets/imgs/socialP/telegram.png);
        background-size: 100% 100%;
      }
      .community-twitter {
        background-image: url(../assets/imgs/socialP/twitter.png);
        background-size: 100% 100%;
      }
      .community-bitcoin {
        background-image: url(../assets/imgs/socialP/bitcoin.png);
        background-size: 100% 100%;
      }
      .community-reddit {
        background-image: url(../assets/imgs/socialP/reddit.png);
        background-size: 100% 100%;
      }
      .community-github {
        background-image: url(../assets/imgs/socialP/github.png);
        background-size: 100% 100%;
      }
      .community-xinlang {
        background-image: url(../assets/imgs/socialP/xinlang.png);
        background-size: 100% 100%;
      }
    }
    .faq_button_wrap {
      margin: 30px 0 40px 0;
    }
    .faq_button {
      display: inline-block;
      width: 240px;
      height: 50px;
      line-height: 50px;
      background: #1346a2;
      color: #fff;
      &:hover {
        cursor: pointer;
      }
    }
    .subscribe_subhead {
      margin-top: 20px;
      font-size: 14px;
      line-height: 20px;
      color: #666;
    }
    .community_subscribe_content {
      text-align: center;
      .el-form {
        padding: 10px 0 20px 0;
        text-align: center;
        .form_label {
          font-size: 20px;
        }
        .el-input {
          display: inline;
          font-size: 16px;
          input {
            width: 220px;
            height: 40px;
            margin-left: 15px;
          }
        }
        .button_wrap {
          margin-top: 50px;
        }
        .el-form-item__error {
          display: none;
        }
      }
    }
  }
  .community-title {
    margin: 40px 0 30px 0;
  }
  .el-form-item {
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 600px) {
  .community_main {
    .meetups-wrap {
      height: 200px;
      margin: 40px 0;
    }
    .mask-wrap {
      width: auto;
      height: 200px;
      background-color: rgba(0, 0, 0, 0.3);
    }
    .mask-info-mask {
      text-align: center;
      width: 100%;
    }
    .mask-meetups-title {
      font-size: 30px;
      margin-bottom: 20px;
    }
    .mask-meetups-info {
      font-size: 16px;
      color: #fff;
      &:hover {
        color: #1346a2;
      }
    }
    .social_icons {
      padding-bottom: 10px;
       width: calc(85% + 20px);
       margin: 0 auto;
      a {
        width: calc(20% - 4px);
        height: 60px;
        display: inline-block;
        text-align: center;
        margin: 0;
        &:hover {
          box-shadow: 0 0 10px #ccc;
          transition: 0.3s all linear;
        }
        span {
          position: relative;
          top: 50%;
          transform: translateY(-50%);
          display: inline-block;
          width: 38px;
          height: 38px;
        }
      }
      .community-micon {
        background-image: url(../assets/imgs/socialP/micon.png);
        background-size: 100% 100%;
      }
      .community-facebook {
        background-image: url(../assets/imgs/socialP/Facebook-2.png);
        background-size: 100% 100%;
      }
      .community-instagram {
        background-image: url(../assets/imgs/socialP/instagram.png);
        background-size: 100% 100%;
      }
      .community-in {
        background-image: url(../assets/imgs/socialP/in.png);
        background-size: 100% 100%;
      }
      .community-telegram {
        background-image: url(../assets/imgs/socialP/telegram.png);
        background-size: 100% 100%;
      }
      .community-twitter {
        background-image: url(../assets/imgs/socialP/twitter.png);
        background-size: 100% 100%;
      }
      .community-bitcoin {
        background-image: url(../assets/imgs/socialP/bitcoin.png);
        background-size: 100% 100%;
      }
      .community-reddit {
        background-image: url(../assets/imgs/socialP/reddit.png);
        background-size: 100% 100%;
      }
      .community-github {
        background-image: url(../assets/imgs/socialP/github.png);
        background-size: 100% 100%;
      }
      .community-xinlang {
        background-image: url(../assets/imgs/socialP/xinlang.png);
        background-size: 100% 100%;
      }
    }
    .faq_button_wrap {
      margin: 30px 0 40px 0;
    }
    .faq_button {
      display: inline-block;
      width: 240px;
      height: 50px;
      line-height: 50px;
      background: #1346a2;
      color: #fff;
      &:hover {
        cursor: pointer;
      }
    }
    .subscribe_subhead {
      margin-top: 20px;
      font-size: 14px;
      line-height: 20px;
      color: #666;
    }
    .community_subscribe_content {
      text-align: center;
      .el-form {
        padding: 20px 0;
        text-align: center;
        .form_label {
          font-size: 20px;
        }
        .el-input {
          display: inline;
          font-size: 16px;
          input {
            width: 220px;
            height: 40px;
            margin-left: 15px;
          }
        }
        .button_wrap {
          margin-top: 50px;
        }
        .el-form-item__error {
          display: none;
        }
      }
    }
  }
  .community-title {
    margin: 40px 0 30px 0;
  }
  .el-form-item {
    margin-bottom: 20px;
  }
}
  .el-notification.right {
    .el-notification__group.is-with-icon {
      .el-notification__content {
        p {
          text-align: left;
        }
      }
    }
  }
</style>
