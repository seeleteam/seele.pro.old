<template>
  <div class="header">
    <div class="wrap clear">
      <img src="../assets/imgs/logo.png" alt="logo" class="fl header-logo" @click="goHome">
      <!-- <img src="../assets/imgs/logo_phone.png" alt="logo" class="fl header-logo show-sm" @click="goHome"> -->
      <div class="fl">
        <ul class="clear">
          <li class='header-item' v-for="(headerItem, index) in headerList" :key="index" @click="clickHeader(headerItem.id)">
            {{headerItem.text}}
          </li>
        </ul>
      </div>
      <div class="fr">
        <!-- <div class="code">
          BTC/USD&nbsp;&nbsp;&nbsp;$888888
          <i class="iconfont icon-danjiantoushang"></i>
        </div> -->
        <div class="header-menu">
          <i v-if="menuVisible === false" @click="clickMenu" class="iconfont icon-menu"></i>
          <i v-else @click="clickMenu" class="iconfont icon-guanbi"></i>
        </div>
      </div>
    </div>
    <div v-show="menuVisible" class="menu-list" ref="menuPage">
      <div class="wrap">
        <div class="menu-content">
          <div class="menu-line"></div>
          <ul v-for="(menuUl, index) in menuList" :key="index">
            <div class="menu-title" @click="chooseMenu(menuUl.href)">{{menuUl.name}}</div>
            <!-- <li v-for="(link, linkIndex) in menuUl.list"  :key="linkIndex" @click="chooseSubMenu(link)"> -->
            <li v-for="(link, linkIndex) in menuUl.list"  :key="linkIndex" @click="goAnchor(link)">
              {{link.text}}
            </li>
          </ul>
        </div>
        <el-col :span="24">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo show-sm"
            background-color="#383838"
            text-color="#fff"
            :unique-opened="true"
            active-text-color="#fff">
            <el-submenu :index="subMenu.id" v-for="(subMenu, index) in menuList1" :key="subMenu.id">
              <template slot="title">
                <span>{{subMenu.name}}</span>
              </template>
              <el-menu-item-group v-for="(menuItem, itemIndex) in subMenu.list" :key="menuItem.id" >
                <el-menu-item :index="menuItem.id" @click="goAnchor(menuItem)">{{menuItem.text}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        headerList: [
        {
          text: 'Whitepaper',
          id: 0,
        },
        {
          text: 'News',
          id: 1,
        },
        {
          text: 'GitHub',
          id: 2,
        },
        {
          text: 'Bounty',
          id: 3,
        // },{
        //   text: 'Developers',
        //   id:4
        },
        {
          text: 'Announcements',
          id: 5,
        }
        ],
        menuVisible: false,
        menuList: [
          {
            id: '1',
            name: 'Start Here',
            href: 'startHere',
            list: [
              {
                id: '1-1',
                text: 'Whitepaper',
                href: 'startHere',
                anchorId: 'SWhitepaper'
              },
              {
                id: '1-2',
                text: 'Features',
                href: 'startHere',
                anchorId: 'SFeatures'
              },
            ]
          },
          // {
          //   name: 'Economy',
          //   list: [
          //     {
          //       text: 'financial Reports',
          //       href: '',
          //     },
          //   ]
          // },
          {
            id: '2',
            name: 'Community',
            href: 'community',
            list: [
              {
                id: '2-1',
                text: 'Telegram',
                href: 'https://t.me/seeletech',
                type: 1,
              },
              {
                id: '2-2',
                text: 'Facebook',
                href: 'https://facebook.com/seeletech',
                type: 1,
              },
              {
                id: '2-3',
                text: 'Medium',
                href: 'https://medium.com/seeletech',
                type: 1,
              },
              // {
              //   text: 'Meetup',
              //   href: '',
              //   type: 1,
              // },
              {
                id: '2-4',
                text: 'YouTube',
                href: 'https://www.youtube.com/channel/UC9jW7HYV-tZm0ZX-36rpNsw/featured',
                type: 1,
              },
              {
                id: '2-5',
                text: 'FAQ',
                href: 'faq',
              },
            ]
          },
          {
            id: '3',
            name: 'Ecosystem',
            href: 'ecosystem',
            list: [
              {
                id: '3-1',
                text: 'Tech Ecosystem',
                href: 'ecosystem',
                anchorId: 'ETech'
              },
              {
                id: '3-2',
                text: 'App Ecosystem',
                href: 'ecosystem',
                anchorId: 'EApp'
              },
            ]
          },
          // {
          //   name: 'Event',
          //   list: [
          //     {
          //       text: 'Bounty',
          //       href: '',
          //     },
          //     {
          //       text: 'Announcement',
          //       href: '',
          //     },
          //     {
          //       text: 'Learn',
          //       href: '',
          //     },
          //   ]
          // },
          {
            id: '4',
            name: 'About Us',
            href: 'aboutUs',
            list: [
              {
                id: '4-1',
                text: 'Leadership',
                href: 'aboutUs',
                anchorId: 'Ateam'
              },
              {
                id: '4-2',
                text: 'Global Presence',
                href: 'aboutUs',
                anchorId: 'Aglobal'
              },
            ]
          },
        ],
        menuList1: [
          {
            id: '1',
            name: 'Start Here',
            href: 'startHere',
            list: [
              {
                id: '1-1',
                text: 'Whitepaper',
                href: 'startHere',
              },
              {
                id: '1-2',
                text: 'Features',
                href: 'startHere',
                anchorId: 'SFeatures'
              },
            ]
          },
          // {
          //   name: 'Economy',
          //   list: [
          //     {
          //       text: 'financial Reports',
          //       href: '',
          //     },
          //   ]
          // },
          {
            id: '2',
            name: 'Community',
            href: 'community',
            list: [
              {
                id: '2-1',
                text: 'Telegram',
                href: 'community',
                // type: 1,
              },
              {
                id: '2-2',
                text: 'Facebook',
                href: 'community',
                // type: 1,
              },
              {
                id: '2-3',
                text: 'Medium',
                href: 'community',
                // type: 1,
              },
              // {
              //   text: 'Meetup',
              //   href: '',
              //   type: 1,
              // },
              {
                id: '2-4',
                text: 'YouTube',
                href: 'community',
                // type: 1,
              },
              {
                id: '2-5',
                text: 'FAQ',
                href: 'faq',
              },
            ]
          },
          {
            id: '3',
            name: 'Ecosystem',
            href: 'ecosystem',
            list: [
              {
                id: '3-1',
                text: 'Tech Ecosystem',
                href: 'ecosystem',
              },
              {
                id: '3-2',
                text: 'App Ecosystem',
                href: 'ecosystem',
                anchorId: 'EApp'
              },
            ]
          },
          // {
          //   name: 'Event',
          //   list: [
          //     {
          //       text: 'Bounty',
          //       href: '',
          //     },
          //     {
          //       text: 'Announcement',
          //       href: '',
          //     },
          //     {
          //       text: 'Learn',
          //       href: '',
          //     },
          //   ]
          // },
          {
            id: '4',
            name: 'About Us',
            href: 'aboutUs',
            list: [
              {
                id: '4-1',
                text: 'Leadership',
                href: 'aboutUs',
                anchorId: 'Ateam'
              },
              {
                id: '4-2',
                text: 'Global Presence',
                href: 'aboutUs',
                anchorId: 'Aglobal'
              },
            ]
          },
        ]
      }
    },
    components: {
    },
    methods: {
      goAnchor(link){
        this.menuVisible = false
        if (link.type === 1) {
          window.location.href = link.href;
        } else {
          if(link.anchorId){
            this.$router.push(`/${link.href}`);
            var anchor = document.getElementById(link.anchorId)
            if(anchor){
              document.body.scrollTop = anchor.offsetTop; // chrome
              document.documentElement.scrollTop = anchor.offsetTop; // firefox
            }else{
              setTimeout(() => {
                var anchor = document.getElementById(link.anchorId)
                if(anchor){
                  document.body.scrollTop = anchor.offsetTop; // chrome
                  document.documentElement.scrollTop = anchor.offsetTop; // firefox
                }
              }, 100);
            }
          }else{
            this.$router.push(`/${link.href}`);
          }
        }
      },
      clickMenu() {
        if (this.menuVisible === true) {
          this.$refs.menuPage.className = 'menu-list dialog-fade-leave-active dialog-fade-leave-to';
          setTimeout(() => {
            this.menuVisible = !this.menuVisible;
          }, 100);
        } else {
          this.menuVisible = !this.menuVisible;
          this.$refs.menuPage.className = 'menu-list dialog-fade-enter-active dialog-fade-enter-to';
        }
        // if (this.menuVisible) {
        // } else {
        //   this.$refs.menuPage.className = 'menu-list dialog-fade-leave-active dialog-fade-leave-to';
        // }
      },
      goHome() {
        this.$router.push('/');
      },
      clickHeader(id) {
        if (id === 0) {
          window.location.href = 'https://s3.ap-northeast-2.amazonaws.com/wp.s3.seele.pro/Seele_tech_whitepaper_EN_v2.0.pdf';
        }
        else if (id === 1) {
          this.$router.push('/news');
        }
        else if (id === 2) {
          window.location.href = 'https://github.com/seeleteam';
        }
        else if (id === 3) {
          window.location.href = 'https://bounty.seele.pro';
        } else if(id === 4){
          this.$router.push('/developers')
        }else if(id === 5){
          this.$router.push('/announcement');
        }
      },
      chooseMenu(href) {
        this.$router.push(`/${href}`);
      },
      chooseSubMenu(link) {
        if (link.type === 1) {
          window.location.href = link.href;
        } else {
          this.$router.push(`/${link.href}`);
        }
      },
    }
  }
</script>
<style lang="less">
  .header {
    height: 100px;
    border-bottom: 1px solid #4d4d4d;
    position: relative;
    z-index: 9;
    background: #131a2e;
    .header-logo {
      width: 180px;
      width: 180px;
      height: 40px;
      margin-top: 30px;
      margin-right: 60px;
      cursor: pointer;
    }
    .header-item {
      box-sizing: border-box;
      float: left;
      color: #fff;
      margin-top: 40px;
      font-size: 16px;
      margin-right: 70px;
      cursor: pointer;
      &:nth-last-child(1) {
        padding: 10px 20px;
        background: #1346a2;
        margin-top: 30px;
        border-radius: 2px;
      }
    }
    .code, .header-menu {
      float: left;
      color: #fff;
      line-height: 100px;
    }
    .code {
      margin-right: 30px;
    }
    .header-menu {
      cursor: pointer;
    }
    .menu-list {
      position: absolute;
      height: 480px;
      left: 0;
      top: 80px;
      background: #383838;
      width: 100%;
      z-index: 9999;
      .menu-content {
        display: flex;
        position: relative;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
        ul {
          flex: 1;
          .menu-title {
            color: #fff;
            font-size: 20px;
            padding: 45px 0;
            cursor: pointer;
          }
          li {
            color: #afafaf;
            margin-top: 40px;
            font-size: 16px;
            cursor: pointer;
            a {
              color: #afafaf;
            }
          }
        }
        .menu-line {
          position: absolute;
          height: 1px;
          width: 100%;
          left: 0;
          top: 110px;
          background: #606060;
        }
      }
    }
  }
  @media screen and (max-width: 768px ) {
    .header {
      height: 90px;
      .header-item:nth-last-child(1) {
        padding: 10px;
      }
      .menu-list {
        height: auto;
        .el-menu {
          border-right: none;
        }
        .menu-content {
          display: none;
          ul {
            width: 50%;
            float: left;
            text-align: center;
          }
        }
      }
      .header-logo {
        width: 100px;
        height: 21px;
        display: block;
        margin-left: 20px;
        margin-top: 20px;
      }
      div.fl {
        width: 100%;
        ul {
          display: flex;
          width: 100%;
          .header-item {
            text-align: center;
            margin-top: 15px;
            margin-right: 10px;
            margin-left: 10px;
            font-size: 12px;
            flex: 1;
            &:last-child {
              margin-top: 5px;
              max-width: 110px;
            }
            &:nth-child(1){
              display: none
            }
          }
        }
      }
      .header-menu {
        position: absolute;
        right: 20px;
        top: -25px;
      }
    }
  }
  @media screen and (min-width: 900px ) {
    .header {
      min-width: 1160px;
    }
  }
</style>