<!-- 新闻 -->
<template>
    <div class="banner bg-black">
      <div class="canvas-box">
          <canvas ref="canvas" id="canvas" style="background: rgba(255,255,155,0)">你的浏览器不支持canvas</canvas>
      </div>
      <div class="wrap">
        <div class="banner-title">{{this.$t('banner.seele')}}<br>{{this.$t('banner.blockchain')}}</div>
        <div class="banner-des">
            {{this.$t('banner.BIVF')}}
        </div>
        <!-- <iframe class="show-sm banner-video-sm" width="300" height="300" src="https://www.youtube.com/embed/j8lPvUGySwo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> -->
        <!-- <div class="watch-video show-lg" @click="dialogTableVisible = true">Watch Video</div> -->
      </div>
      <!-- <el-dialog :append-to-body="true" class="show-lg not-bg" title="" :visible.sync="dialogTableVisible">
          <iframe width="610" height="480" src="https://www.youtube.com/embed/j8lPvUGySwo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </el-dialog> -->
    </div>
  </template>
<script>
  let WINDOW_WIDTH = document.body.offsetWidth;
  if (WINDOW_WIDTH < 1000) {
    WINDOW_WIDTH += 50;
  }
  const WINDOW_HEIGHT = 620;
  export default {
    data() {
      return {
        dialogTableVisible: false,
        // playerOptions: {
        //   // videojs options
        //   muted: true,
        //   language: 'en',
        //   playbackRates: [0.7, 1.0, 1.5, 2.0],
        //   sources: [{
        //     type: "video/mp4",
        //     src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        //   }],
        //   poster: "/static/images/author.jpg",
        // },
        canvas: {},
        context: {},
        num: 500,
        stars: [],
        mouseX: WINDOW_WIDTH/2,
        mouseY: WINDOW_HEIGHT/2,
        rnd: null,
      };
    },
    components: {
    },
    methods: {
      liuxing(){
          var time = Math.round(Math.random()*3000+33);
          setTimeout(() => {
              this.rnd = Math.ceil(Math.random() * this.stars.length)
              this.liuxing();
          },time)
      },
      mouseMove(e){
          //因为是整屏背景，这里不做坐标转换
          this.mouseX = e.clientX;
          this.mouseY = e.clientY;
      },
      render(){
        this.context.fillStyle = 'rgba(0, 0, 0, 0)';
        this.context.fillRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
        this.context.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT)
        for(var i =0; i< this.num ; i++){
            var star = this.stars[i];
            if(i == this.rnd){
                star.vx = -5;
                star.vy = 20;
                this.context.beginPath();
                this.context.strokeStyle = 'rgba(255,255,255,'+star.alpha+')';
                this.context.lineWidth = star.r;
                this.context.moveTo(star.x,star.y);
                this.context.lineTo(star.x+star.vx,star.y+star.vy);
                this.context.stroke();
                this.context.closePath();
            }
            star.alpha += star.ra;
            if(star.alpha<=0){
                star.alpha = 0;
                star.ra = -star.ra;
                star.vx = Math.random()*0.2-0.1;
                star.vy = Math.random()*0.2-0.1;
            }else if(star.alpha>1){
                star.alpha = 1;
                star.ra = -star.ra
            }
            star.x += star.vx;
            if(star.x>=WINDOW_WIDTH){
                star.x = 0;
            }else if(star.x<0){
                star.x = WINDOW_WIDTH;
                star.vx = Math.random()*0.2-0.1;
                star.vy = Math.random()*0.2-0.1;
            }
            star.y += star.vy;
            if(star.y>=WINDOW_HEIGHT){
                star.y = 0;
                star.vy = Math.random()*0.2-0.1;
                star.vx = Math.random()*0.2-0.1;
            }else if(star.y<0){
                star.y = WINDOW_HEIGHT;
            }
            this.context.beginPath();
            var bg = this.context.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.r);
            bg.addColorStop(0,'rgba(255,255,255,'+star.alpha+')')
            bg.addColorStop(1,'rgba(255,255,255,0)')
            this.context.fillStyle  = bg;
            this.context.arc(star.x,star.y, star.r, 0, Math.PI*2, true);
            this.context.fill();
            this.context.closePath();
        }
      },
      addStar(){
        for(var i = 0; i< this.num ; i++){
            var aStar = {
                x:Math.round(Math.random()*WINDOW_WIDTH),
                y:Math.round(Math.random()*WINDOW_HEIGHT),
                r:Math.random()*3,
                ra:Math.random()*0.05,
                alpha:Math.random(),
                vx:Math.random()*0.2-0.1,
                vy:Math.random()*0.2-0.1
            }
            this.stars.push(aStar);
        }
      }
    },
    mounted() {
      if (WINDOW_WIDTH > 750) {
        this.num = 500;
        this.canvas = this.$refs.canvas;
        this.context = this.canvas.getContext('2d');
        canvas.width = document.body.offsetWidth;
        canvas.height = WINDOW_HEIGHT;

        this.context = canvas.getContext('2d');
        this.addStar();
        setInterval(this.render,33);
        this.liuxing();

        document.body.addEventListener('mousemove', this.mouseMove);
      }
      
    }
  };
</script>
<style lang="less">
   .banner {
     height: 650px;
     overflow: hidden;
     z-index: 5;
     position: relative;
     background: url('../../assets/imgs/seele_bannar.png') no-repeat;
     .banner-title {
       font-size: 60px;
       color: #fff;
       font-weight: 600;
       margin-top: 150px;
       text-align: center;
     }
     .banner-des {
       color: #fff;
       margin-top: 30px;
       font-size: 40px;
       text-align: center;
       font-weight: 300;
       letter-spacing: 1px;
     }
     .watch-video {
       width: 220px;
       height: 60px;
       line-height: 60px;
       text-align: center;
       color: #fff;
       font-size: 25px;
       border: 1px solid #fff;
       margin: 100px auto 0;
       letter-spacing: 1px;
       cursor: pointer;
       z-index: 999;
       position: absolute;
       left: 50%;
       transform: translate(-50%);
     }
   }
   .not-bg {
    .el-dialog {
      background: none;
      box-shadow: none;
      .el-dialog__body {
        text-align: center;
      }
    }
   }
  @media screen and (max-width: 600px ) {
    .banner {
      height: 300px;
     background: url('../../assets/imgs/banner_phone.png') no-repeat;
      .banner-title {
        font-size: 40px;
        margin-top: 80px;
      }
      .banner-title, .banner-des {
        text-align: center;
      }
      .banner-des {
        font-size: 18px;
      }
      .watch-video {
        margin: 100px auto;
      }
      .banner-video-sm {
        margin: 20px auto;
      }
    }
  }
  @media screen and (min-width:600px) and (max-width:900px){
    .banner-video-sm {
      margin: 20px auto;
    }
    .banner {
      .banner-title {
        margin-top: 80px;
      }
    }
  }
  .canvas-box{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;}
  @media screen and (min-width: 900px ) {
    .banner {
      min-width: 1160px;
    }
  }
</style>