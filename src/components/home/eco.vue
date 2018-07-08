<template>
  <div class="eco-div">
    <div class="box-title">{{$t('ecosystem.TE')}}</div>
    <div class="eco">
      <div class="wrap">
        <div class="eco-wrap">
          <div class="layout-1">
            <div class="layout-title">{{$t('ecosystem.academia')}}</div>
            <div class="layout-info">{{$t('ecosystem.Acade-a')}}
              <br> {{$t('ecosystem.Acade-b')}} </div>
            <div class="layout-icon"></div>
          </div>
          <div class="layout-2">
            <div class="layout-title">{{$t('ecosystem.institution')}}</div>
            <div class="layout-info">{{$t('ecosystem.insti-a')}}<br>{{$t('ecosystem.insti-b')}}

                </div>
            <div class="layout-icon"></div>
          </div>
          <div class="layout-3">
            <div class="layout-title">{{$t('ecosystem.enterprise')}}</div>
            <div class="layout-info">{{$t('ecosystem.enterp-a')}}<br>
{{$t('ecosystem.enterp-b')}}
</div>
            <div class="layout-icon"></div>
          </div>
          <div class="layout-4">
            <div class="layout-title">{{$t('ecosystem.developers')}}</div>
            <div class="layout-info">{{$t('ecosystem.develop-a')}}<br>
                {{$t('ecosystem.develop-b')}}

                </div>
            <div class="layout-icon"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
<script>

</script>
<style lang='less'>
  .eco {
    height: 600px;
    background-size: 100% 600px;
    overflow: hidden;
    background: url('../../assets/imgs/eco_tupian.png') no-repeat;
    background-size: 100% 100%;
    .eco-wrap {
      height: 600px;
      position: relative;
      background: url('../../assets/imgs/eco_tupian1.jpg') no-repeat;
      background-size: 100% 100%;
    }
    .layout-1, .layout-2, .layout-3, .layout-4 {
      position: absolute;
      text-align: center;
      .layout-title {
        font-size: 30px; 
        color: #fff;
      }
      .layout-info {
        margin-top: 20px;
        font-size: 14px;
        color: #fff;
        /* width: 400px; */
      }
    }
    .layout-icon {
      display: inline-block;
      width: 2px;
      height: 70px;
      background: #80a5f7;
      position: relative;
      margin-top: 40px;
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
    .layout-1 {
      width: 320px;
      left: 0px;
      top: 214px;
    }
    .layout-2 {
      left: 197px;
      top: 112px;
    }
    .layout-3 {
      left: 584px;
      top: 91px;
    }
    .layout-4 {
      left: 929px;
      top: 233px;
    }
  }
  @media screen and (min-width: 900px) {
    .eco-div {
      min-width: 1160px;
    }
  }
  @media screen and (max-width: 768px) {
    .eco-div {
      overflow: hidden;
      background: #1346a2;
      .box-title {
        margin: 50px 0 0;
        color: #fff;
      }
    }
    .eco {
      height: auto;
      background-size: 100% 400px;
      background: #1346a2;
      .eco-wrap {
        height: auto;
        background: none;
        padding: 0 20px;
      }
      .layout-1, .layout-2, .layout-3, .layout-4 {
        width: auto;
        position: static;
        margin-top: 15px;
        background: #fff;
        padding: 20px 25px;
        border-radius: 3px;
        .layout-title {
          color: #000;
          font-size: 20px;
          font-weight: 600;
          text-align: left;
          padding-bottom: 15px;
          border-bottom: 1px solid #f2f2f2;
        }
        .layout-info {
          color: #adadad;
          text-align: left;
          line-height: 20px;
          margin-top: 15px;
        }
      }
      .layout-4 {
        margin-bottom: 40px;
      }
      .layout-icon {
        display: none;
      }
    }
  }
</style>