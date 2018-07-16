<template>
  <div id="#global" class="global">
    <div class="box-title">{{$t('global.GP')}}</div>
    <div class="wrap">
      <div class="global-text">
        <ul>
          <li v-for="(layoutItem, index) in layout"  :key="index">
            <span class="span-head" :style="{width:headWidth}" v-html="$t(layoutItem.spanHead)">
                <!-- {{layoutItem.spanHead}} -->
            </span>
            <span class="span-end">
              {{$t(layoutItem.spanEnd)}}
            </span>
          </li>
        </ul>
      </div>
      <div class="global-img">
        <div class="global-1">
          <div class="global-address show-lg">{{$t('global.SC')}}</div>
          <div class="global-icon"></div>
        </div>
        <div class="global-2">
          <div class="global-address  show-lg">{{$t('global.SF')}}</div>
          <div class="global-icon"></div>
        </div>
        <div class="global-3">
          <div class="global-address  show-lg">{{$t('global.LD')}}</div>
          <div class="global-icon"></div>
        </div>
        <div class="global-4">
          <div class="global-address  show-lg">{{$t('global.S')}}</div>
          <div class="global-icon"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      layout: [
        {
          spanHead: 'global.HSF',
          spanEnd: 'global.HSF-i'
        },
        {
          spanHead: 'global.SC',
          spanEnd: 'global.SC-i'
        },
        {
          spanHead: 'global.LD',
          spanEnd: 'global.LD-i'
        },
        {
          spanHead: 'global.S',
          spanEnd: 'global.S-i'
        },
        // 'Headquarter in San Francisco, USA - Seele algorithm development team and academic research cooperation.',
        // 'Shenzhen, China Branch - Seele engineering team & Eco-service development team.',
        // 'London, UK Branch - Seele Application and Eco-services (in progress).',
        // 'Singapore Branch - Seele graph computation development team (in progress).',
      ]
    };
  },
  computed:{
    headWidth(){
      return this.$i18n.locale === 'en'?'200px':'300px'
    }
  }
};
</script>
<style lang="less">
  .global {
    background: #eef3f5;
    overflow: hidden;
    .global-text {
      ul {
        text-align: center;
        li {
          font-size: 16px;
          line-height: 30px;

        }
      }
    }
    .global-img {
      height: 335px;
      background: #ccc;
      margin-top: 30px;
      background: url('../../assets/imgs/global_layout.png') no-repeat;
      background-size: 100% 100%;
      position: relative;
      .global-1, .global-2, .global-3, .global-4 {
        position: absolute;
        text-align: center;
        .global-address {
          font-size: 20px;
          color: #000;
        }
        .global-icon {
          display: inline-block;
          width: 2px;
          height: 30px;
          background: #80a5f7;
          position: relative;
          margin-top: 20px;
          &::before, &::after {
            content: '';
            position: absolute;
            border-radius: 50%;
          }
          &::before {
            width: 20px;
            height: 20px;
            left: -9px;
            top: -10px;
            background: #fff;
          }
          &::after {
            width: 10px;
            height: 10px;
            left: -4px;
            top: -5px;
            background: #1346a2;
          }
        }
      }
      .global-1 {
        left: 853px;
        top: 127px;
      }
      .global-2 {
        left: 75px;
        top: 79px;
      }
      .global-3 {
        left: 496px;
        top: 33px;
      }
      .global-4 {
        left: 860px;
        top: 211px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .global {
      padding: 0 20px;
      .global-text {
        ul {
          li {
            text-align: left;
            margin-top: 20px;
            .span-head {
              display: block;
              font-size: 16px;
              color: #000;
              font-weight: 600;
              margin-bottom: 12px;
            }
            .span-end {
              line-height: 24px;
              color: #666;
            }
          }
        }
      }
      .global-img {
        height: 200px;
        width: 300px;
        margin: 20px auto;
        .global-1, .global-2, .global-3, .global-4 {
          .global-address {
            font-size: 14px;
          }
          .global-icon {
            background: none;
          }
        }
        .global-1 {
          left: 236px;
          top: 82px;
        }
        .global-2 {
          left: 42px;
          top: 63px;
        }
        .global-3 {
          left: 142px;
          top: 51px;
        }
        .global-4 {
          left: 230px;
          top: 138px;
        }
      }
    }
  }
  @media screen and (min-width: 900px ) {
    .global {
      min-width: 1160px;
    }
    ul{
      li{
          .span-end{
              display: inline-block;
              width: 420px;
              text-align: left;
          }
          .span-head{
            display: inline-block;
            width: 200px;
            text-align: right;
            margin-right: 1em;
            font-weight: bold;
          }
      }
    }
  }
</style>
