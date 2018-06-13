<template>
  <div class="item-banner-wrap">
    <div class="item-masker-wrap">
        <div class="mask-wrap"></div>
        <div class="wrap">
            <div class="mask-info-mask">
                <div class="mask-banner-title">ABOUT US</div>
                <div class="mask-banner-info">Get to know the Seele team</div>
            </div>
        </div>
    </div>
  </div>
</template>
<style scoped>
.item-banner-wrap {
  min-width: 1160px;
  background-image: url("../../assets/imgs/itemBanner/aboutUs.png");
  height: 300px;
  background-size: 100% 100%;
}
.item-masker-wrap {
  position: relative;
}
.mask-wrap {
  width: 40%;
  height: 300px;
  background: #1346a2;
}
.mask-info-mask {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  letter-spacing: 1px;
}
.mask-banner-title {
  color: #fff;
  font-size: 48px;
  margin-bottom: 40px;
}
.mask-banner-info {
  color: #fff;
  font-size: 24px;
}
@media screen and (min-width: 600px) and (max-width: 900px) {
  .item-banner-wrap {
    height: 400px;
    min-width: 100%;
    background-image: url("../../assets/imgs/itemBannerP/aboutUs.png");
    background-size: 100% 100%;
  }
  .mask-wrap {
    height: 400px;
    width: 100%;
    background: rgba(0, 0, 0, 0.15);
  }
  .mask-info-mask {
    width: 100%;
    text-align: center;
  }
  .mask-banner-title {
    font-size: 36px;
    margin-bottom: 26px;
  }
}
@media screen and (max-width: 768px) {
  .item-banner-wrap {
    height: 200px;
    min-width: 100%;
    background-image: url("../../assets/imgs/itemBannerP/aboutUs.png");
    background-size: 100% 100%;
  }
  .mask-wrap {
    height: 200px;
    width: 100%;
    background: rgba(0, 0, 0, 0.15);
  }
  .mask-info-mask {
    width: 100%;
    text-align: center;
  }
  .mask-banner-title {
    font-size: 36px;
    margin-bottom: 26px;
  }
  .mask-banner-info {
    font-size: 18px;
  }
}
</style>

