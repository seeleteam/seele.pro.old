<template>
  <div id="team" class="team-and-global">
    <div class="wrap">
      <div class="team">
        <div class="box-title">LEADERSHIP</div>
        <div class="team-box">
          <a class="team-item" :href="teamItem.linkedin" v-for="(teamItem, index) in teamList" :key="index">
            <img v-if="index === 0" class="team-img" src="../../assets/imgs/team/ceo.jpg">
            <img v-else-if="index === 1" class="team-img" src="../../assets/imgs/team/coo.png">
            <img v-else class="team-img" src="../../assets/imgs/team/scientist.png">
            <div class="clear team-box-sm">
              <div class="team-name">{{teamItem.name}}</div>
              <div class="team-position">{{teamItem.position}}</div>
            </div>
            <div class="team-des">{{teamItem.des}}</div>
          </a>
        </div>
      </div>
      <!-- <div class="global">
        <div class="box-title">GLOBAL LAYOUT</div>
        <div class="global-box">
          <div class="global-layout">
            <ul>
              <li class="layout-item" v-for="layoutItem in layout">
                {{layoutItem}}
              </li>
            </ul>
          </div>
          <div class="global-img"></div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        teamList: [
          {
            src: '',
            name: 'Dr. Maolin Zheng',
            position: 'CEO',
            des: 'Seele Realize',
            linkedin: 'https://www.linkedin.com/in/maolin-zheng-584a5a6/',
          },
          {
            src: '',
            name: 'Dr. Nick Smith',
            position: 'COO',
            des: 'Seele Industrialize',
            linkedin: 'https://www.linkedin.com/in/nicholas-s-19626a1/',
          },
          {
            src: '',
            name: 'Dr. Wei Bi',
            position: 'Scientist',
            des: 'Seele Idealize',
            linkedin: 'https://www.linkedin.com/in/biweicn/',
          },
        ],
      }
    }
  }
</script>
<style lang="less">
  .team-and-global {
    .team {
      margin-bottom: 30px;
      .team-box {
        display: flex;
        height: 360px;
        .team-item {
          flex: 1;
          height: 330px;
          box-sizing: border-box;
          margin-right: 45px;
          cursor: pointer;
          overflow: hidden;
          &:nth-last-child(1) {
            margin-right: 0;
          }
          .team-name, .team-position, .team-des {
            transition: all .3s linear;
          }
          .team-img {
            width: 100%;
            height: 200px;
            background: #ccc;
          }
          .team-name {
            font-size: 20px;
            color: #000;
            margin-top: 20px;
          }
          .team-position {
            padding: 10px 0;
            font-size: 16px;
            border-bottom: 1px solid #f2f2f2;
            color: #989898;
          }
          .team-des {
            margin-top: 10px;
            color: #989898;
          }
        }
      }
    }
  }
  @media screen and (min-width: 768px ) {
    .team-item:hover {
      box-shadow: 0 0 10px #ccc;
      .team-name {
        color: #4e7aef;
      }
      .team-name, .team-position, .team-des {
        transition:all .3s linear 0s;
        -webkit-transition:all .3s linear 0s;
        -moz-transition:all .3s linear 0s;
        transform: translate(30px);
      }
    }
  }
  @media screen and (max-width: 768px ) {
    .team-and-global {
      .team {
        margin-bottom: 60px;
        padding: 0 20px;
        .team-box {
          display: block;
          height: auto;
          .team-item {
            &:nth-child(n+2) {
              .team-img {
                margin-top: 30px;
              }
            }
            
            .team-box-sm {
              padding: 15px 0;
              vertical-align: middle;
              max-width: 340px;
              margin: 0 auto;
              .team-name {
                float: left;
                margin-top: auto;
              }
              .team-position {
                float: right;
                border-bottom: none;
                padding: 0;
                color: #1745a2;
                font-weight: 600;
              }
            }
            .team-des {
              margin-top: auto;
              max-width: 340px;
              margin: 0 auto;
              text-align: left;
            }
          }
          .team-name, .team-position, .team-des {
            text-align: center;
          }
        }
      }
    }
  }
  @media screen and (min-width:600px) and (max-width:900px){
    .team-and-global {
      .team {
        .team-box {
          text-align: center;
          .team-item{
            margin-right: auto;
            .team-img {
              width: 340px;
              margin-top: 20px;
            }
          } 
        }
      }
    }
  }
</style>