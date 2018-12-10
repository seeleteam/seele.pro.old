<template>
  <div class="header">
    <div class="wrap clear">
      <img src="../assets/imgs/logo.svg" alt="logo" class="fl header-logo" @click="goHome">
      <!-- <img src="../assets/imgs/logo_phone.png" alt="logo" class="fl header-logo show-sm" @click="goHome"> -->
      <div class="fl">
        <ul class="clear header-item-list">
          <li class='header-item' v-bind:style="{'fontFamily':$i18n.locale==='cn'?'微软雅黑':''}" v-for="(headerItem, index) in headerList" :key="index" @click="clickHeader(headerItem.id)">
            <!-- <template v-if="headerItem.id === 0">
              <el-dropdown @command="clickHeader">
                <span>
                  {{$t(headerItem.text)}}
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  
                 <el-dropdown-item v-for="item in headerItem.submenu" :key="item.id" :command="item.id">{{$t(item.text)}}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </template> -->
            <template>
              {{$t(headerItem.text)}}
            </template>
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
                  <p class="language">{{langMap[$i18n.locale]}}<span>&nbsp;</span><i class="caret"></i></p>
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
          text:'header.research',
          id: 0,
          // submenu:[{
          //   id:0.1,
          //   text:'header.whitepaper',
          // },{
          //   id:0.2,
          //   text:'header.yellowpaper'
          // }]
        // },{
        //   text:'header.yellowpaper',
        //   id:1
        },
        {
          text: 'header.news',
          id: 2,
        },
        {
          text: 'header.github',
          id: 3,
        },
        {
          text: 'header.community',
          id: 4,
        },{
          text:  'header.developers',
          id:5
        },
        {
          text: 'header.announcements',
          id: 6,
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
                href: 'header.paper',
                anchorId: 'SWhitepaper',
                type:1
              },{
                id: ' 1-2',
                text: 'menu.yellowpaper',
                href:'header.ypaper',
                anchorId:'SYellowpaper',
                type:1
              },
              {
                id: '1-3',
                text: 'menu.features',
                href: 'startHere',
                anchorId: 'SFeatures'
              },{
                id:'1-4',
                text:'menu.research',
                href:"research"
              }
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
                href: 'community.telegram',
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
          }
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
                href: 'header.paper',
                type:1
               },{
                id: ' 1-2',
                text: 'menu.yellowpaper',
                href:'header.ypaper',
                anchorId:'SYellowpaper',
                type:1
               },
              {
                id: '1-3',
                text: 'menu.features',
                href: 'startHere',
                anchorId: 'SFeatures'
              },{
                id:'1-4',
                text:'menu.research',
                href:"research"
              }
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

          {
            id: '5',
            name: 'language.language',
            href: 'language',
            list: [
              {
                id: '5-1',
                text: 'language.cn',
                href: 'cn',
                anchorId: '',
                type:'lang'
              },
              {
                id: '5-2',
                text: 'language.en',
                href: 'en',
                anchorId: 'Aglobal',
                type:'lang'
              },
            ]
          }
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
        if(link.type === 'lang'){
          this.switchLanguage(link.href, this.langMap[this.href])
          this.menuVisible = false
          return
        }
        this.menuVisible = false
        if (link.type === 1) {
          window.location.href =this.$t(link.href);
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
        if(id === 0){
          this.$router.push({name:"research"})
        }
        // if (id === 0.1) {
        //   window.location.href = this.$t('header.paper');
        // }else if(id === 0.2){
        //   window.location.href = this.$t('header.ypaper')
        // }
        else if (id === 2) {
          this.$router.push('/news');
        }
        else if (id === 3) {
          window.location.href = 'https://github.com/seeleteam';
        }
        else if (id === 4) {
          window.location.href = this.$t('header.communityURL');
        } else if(id === 5){
          this.$router.push('/developers')
        }else if(id === 6){
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
.el-dropdown-menu{
    background-color:rgba(28,28,53,0.88) !important;
    width: 100px;
    border-radius: 0 !important;
    border:transparent !important;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    .el-dropdown-menu__item{
        background-color: rgba(28,28,53,0.88)  !important;
        color: white;
        font-weight: normal;
        padding: 0 10px;
    }
    .popper__arrow{
      display: none !important;
    }
  }
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
    @media (min-width: 768px) {
          .header-item-list{
            width: 750px;
            display: flex;
            justify-content: space-between;
          }
    }
    .el-dropdown{
      color: #fff;
      font-size: 16px;
    }
    // .el-dropdown-menu{
    //   background-color: #131a2e;
    //   color: white;
    //   font-size: 16px;
    // }
    .header-item {
      box-sizing: border-box;
      float: left;
      color: #fff;
      margin-top: 40px;
      font-size: 16px;
      margin-right: 40px;
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
    display: none;
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
  opacity: .7;
  .caret{
    background-image: url(../assets/imgs/drop_down.png);
    display: inline-block;
    background-size: 10px 10px;
    width: 11px;
    height: 11px;
    background-position: center;
    background-repeat: no-repeat;
  }
}
ul.language-list{
	padding: 0;
	list-style: none;
	position: absolute;
	z-index: 10000;
	top: 40px;
	width: 100%;
	max-height: 0;
	font-size: 14px;
	color: #c6c6c6;
	background-color: #303b58b3;
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