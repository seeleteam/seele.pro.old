<template>
  <div class="header">
    <div class="wrap clear">
      <img src="../assets/imgs/logo.png" alt="logo" class="fl header-logo" @click="goHome">
      <!-- <img src="../assets/imgs/logo_phone.png" alt="logo" class="fl header-logo show-sm" @click="goHome"> -->
      <div class="fl">
        <ul class="clear">
          <li class='header-item' v-for="(headerItem, index) in headerList" :key="index" @click="clickHeader(headerItem.id)">
            {{$t(headerItem.text)}}
          </li>
        </ul>
      </div>
      <div class="fr">
        <!-- <div class="code">
          BTC/USD&nbsp;&nbsp;&nbsp;$888888
          <i class="iconfont icon-danjiantoushang"></i>
        </div> -->
        <div class="header-menu" style="width:30px;height:30px;">
          <i v-if="menuVisible === false" @click="clickMenu" class="iconfont icon-menu"></i>
          <i v-else @click="clickMenu" class="iconfont icon-guanbi"></i>
        </div>
      </div>
      <div class="fr">
        <div class="header-menu">
          <div class="language-switch">
              <div class="language-switch-wrap">
                  <p class="language">{{langMap[this.$i18n.locale]}}<span>&nbsp;</span><i class="caret"></i></p>
                  <ul class="language-list">
                      <li v-for="(v,k) in langMap" :key="k" @click="switchLanguage(k,v)">{{v}}</li>
                  </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="menuVisible" class="menu-list" ref="menuPage">
      <div class="wrap">
        <div class="menu-content">
          <div class="menu-line"></div>
          <ul v-for="(menuUl, index) in menuList" :key="index">
            <div class="menu-title" @click="chooseMenu(menuUl.href)">{{$t(menuUl.name)}}</div>
            <!-- <li v-for="(link, linkIndex) in menuUl.list"  :key="linkIndex" @click="chooseSubMenu(link)"> -->
            <li v-for="(link, linkIndex) in menuUl.list"  :key="linkIndex" @click="goAnchor(link)">
              {{$t(link.text)}}
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
                <span>{{$t(subMenu.name)}}</span>
              </template>
              <el-menu-item-group v-for="(menuItem, itemIndex) in subMenu.list" :key="menuItem.id" >
                <el-menu-item :index="menuItem.id" @click="goAnchor(menuItem)">{{$t(menuItem.text)}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </div>
    </div>
  </div>
</template>
<script>
import cookie from '@/utils/cookie'
  export default {
    data() {
      return {
        langMap:{en:"English",cn:"简体中文"},
        headerList: [
        {
          text:'header.whitepaper',
          id: 0,
        },
        {
          text: 'header.news',
          id: 1,
        },
        {
          text: 'header.github',
          id: 2,
        },
        {
          text: 'header.bounty',
          id: 3,
        },{
          text:  'header.developers',
          id:4
        },
        {
          text: 'header.announcements',
          id: 5,
        }
        ],
        menuVisible: false,
        menuList: [
          {
            id: '1',
            name: 'menu.start',
            href: 'startHere',
            list: [
              {
                id: '1-1',
                text: 'menu.whitepaper',
                href: 'startHere',
                anchorId: 'SWhitepaper'
              },
              {
                id: '1-2',
                text: 'menu.features',
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
            name: 'menu.community',
            href: 'community',
            list: [
              {
                id: '2-1',
                text: 'menu.telegram',
                href: 'https://t.me/seeletech',
                type: 1,
              },
              {
                id: '2-2',
                text: 'menu.facebook',
                href: 'https://facebook.com/seeletech',
                type: 1,
              },
              {
                id: '2-3',
                text: 'menu.medium',
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
                text: 'menu.youtube',
                href: 'https://www.youtube.com/channel/UC9jW7HYV-tZm0ZX-36rpNsw/featured',
                type: 1,
              },
              {
                id: '2-5',
                text: 'menu.FAQ',
                href: 'faq',
              },
            ]
          },
          {
            id: '3',
            name: 'menu.eco',
            href: 'ecosystem',
            list: [
              {
                id: '3-1',
                text: 'menu.TE',
                href: 'ecosystem',
                anchorId: 'ETech'
              },
              {
                id: '3-2',
                text: 'menu.AE',
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
            name: 'menu.AU',
            href: 'aboutUs',
            list: [
              {
                id: '4-1',
                text: 'menu.leader',
                href: 'aboutUs',
                anchorId: 'Ateam'
              },
              {
                id: '4-2',
                text: 'menu.GP',
                href: 'aboutUs',
                anchorId: 'Aglobal'
              },
            ]
          },
        ],
        menuList1: [
          {
            id: '1',
            name: 'menu.start',
            href: 'startHere',
            list: [
              {
                id: '1-1',
                text: 'menu.whitepaper',
                href: 'startHere',
              },
              {
                id: '1-2',
                text: 'menu.features',
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
            name: 'menu.community',
            href: 'community',
            list: [
              {
                id: '2-1',
                text: 'menu.telegram',
                href: 'community',
                // type: 1,
              },
              {
                id: '2-2',
                text: 'menu.facebook',
                href: 'community',
                // type: 1,
              },
              {
                id: '2-3',
                text: 'menu.medium',
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
                text: 'menu.youtube',
                href: 'community',
                // type: 1,
              },
              {
                id: '2-5',
                text: 'menu.FAQ',
                href: 'faq',
              },
            ]
          },
          {
            id: '3',
            name: 'menu.eco',
            href: 'ecosystem',
            list: [
              {
                id: '3-1',
                text: 'menu.TE',
                href: 'ecosystem',
              },
              {
                id: '3-2',
                text: 'menu.AE',
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
            name: 'menu.AU',
            href: 'aboutUs',
            list: [
              {
                id: '4-1',
                text: 'menu.leader',
                href: 'aboutUs',
                anchorId: 'Ateam'
              },
              {
                id: '4-2',
                text: 'menu.GP',
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
      switchLanguage(lang,langName){
        this.$i18n.locale = lang
        cookie.set('lang',lang)
      },
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
          window.location.href = this.$t('header.paper');
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
      }
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
      margin-right: 50px;
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

.language-switch{
  margin-right: 30px;
  cursor: pointer;
}
@media(max-width: 768px){
  .language-switch{
    position: absolute;
    right: 30px;
    height: 100%;
    width: 86px
  }
}
.language-switch-wrap{
	width: 82px;
	height: 28px;
	border:solid 2px rgba(255,255,255,.4);
	border-radius: 5px;
	font-size: 14px;
	position: relative;
	display: inline-block;

	cursor: pointer;	
}
p.language{
	width:100%;
	height: 100%;
	position: 0;
	line-height: 28px;
	text-align: center;
	opacity: .7
}
ul.language-list{
	padding: 0;
	list-style: none;
	position: absolute;
	z-index: 1;
	top: 40px;
	width: 100%;
	max-height: 0;
	font-size: 14px;
	color: #c6c6c6;
	background-color: #3e3e3e;
	overflow-y: hidden;
	transition: max-height .75s ease-in-out
}
.language-switch:hover ul.language-list{
	max-height: 100px;
}
ul.language-list > li{
	text-align: center;
	height: 100%;
	line-height: 33px
}
ul.language-list > li:hover{
	background-color:#4e4e4e;
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