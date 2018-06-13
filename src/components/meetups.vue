<!-- meetups -->
<template>
  <div>
    <Header></Header>
    <div class="wrap">
      <div class="meetups_main">
        <div class="meetups_title">
          <h1>Conferences and events</h1>
          <p>Find events, conferences and meetups all over the world.</p>
        </div>
        <gmap-map
          :center="center"
          :zoom="7"
          style="width: 100%; height: 400px"
        >
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
          ></gmap-marker>
        </gmap-map>
        <div class="meetups_content">
          <p>Upcoming events and conferences</p>
          <ul class="meetups_list">
            <li v-for="item in meetupsList"  :key="item.id" class="meetups_li">
              <div class="meetups_list_time">
                {{item.datetime}}
              </div>
              <div class="meetups_list_content">
                {{item.description}}
              </div>
              <div class="meetups_list_address">
                {{item.address}}
              </div>
            </li>
            <!-- <li class="meetups_li">
              <div class="meetups_list_time">
                Time to be confirmed
              </div>
              <div class="meetups_list_content">
                Seele Road Show
              </div>
              <div class="meetups_list_address">
                San Francisco, United States
              </div>
            </li> -->
          </ul>
          <!-- <div v-if="meetupsList.total" class="meetups_pagination">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="meetupsList.size"
              :page-size="meetupsList.pageSize"
              layout="prev, pager, next"
              :total="meetupsList.total">
            </el-pagination>
          </div> -->
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from "vue";
import { Pagination } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(Pagination);
import Header from "./header";
import Footer from "./footer";
import { baseUrl } from "../config/port";

export default {
  data() {
    return {
      meetupsList: [],
      center: {},
      markers: []
      // center: { lat: 37.7749295, lng: -122.41941550000001 },
      // markers: [
      //   {
      //     position: { lat: 37.7749295, lng: -122.41941550000001 }
      //   }
      // ]
    };
  },
  components: {
    Header,
    Footer
  },
  mounted() {
    window.scroll(0, 0);
    this.initData();
  },

  methods: {
    initData() {
      let _this = this;
      _this.$ajax
        .get(baseUrl + "/meetups", {
          method: "get",
          params: {
            // size: size,
            // limit: 10
          }
        })
        .then(function(response) {
          _this.meetupsList = response.data.data[0];
          var list = response.data.data[0];
          let result = [];
          list.forEach(function(item, id) {
            let res = result.find(row => {
              return row.lat_lng === item.lat_lng;
            });
            if (!res) {
              res = {
                position: item.lat_lng
              };
              result.push(res);
              _this.center = result[0].position;
              _this.markers = result;
            }
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    handleSizeChange(val) {
      this.initData(val);
    },
    handleCurrentChange(val) {
      this.initData(val);
    }
  },
  updated() {
    window.scroll(0, 0);
  }
};
</script>
<style lang="less">
.meetups_main {
  padding-top: 20px;
  .meetups_title {
    text-align: center;
    h1 {
      padding-bottom: 10px;
      font-size: 30px;
      color: #202020;
    }
    p {
      font-size: 18px;
      color: #666;
    }
  }
  .vue-map-container {
    margin: 20px 0;
  }
  .meetups_content {
    p {
      font-size: 30px;
      color: #202020;
      text-align: center;
      margin-bottom: 60px;
    }
    .meetups_list {
      font-size: 18px;
      color: #202020;
      padding: 30px 0;
      margin-bottom: 80px;
    }
  }
  .meetups_li {
    display: flex;
    border-bottom: 1px solid #f2f2f2;
    padding: 20px 0;
    .meetups_list_time {
      width: 25%;
    }
    .meetups_list_content {
      width: 45%;
    }
    .meetups_list_address {
      width: 30%;
    }
  }
  .meetups_pagination {
    text-align: center;
    margin-bottom: 20px;
    .el-pagination {
      background: none;
      .el-pager {
        li {
          border: 1px solid #333;
          padding: 0;
          margin: 0 4px;
        }
      }
      .btn-prev,
      .btn-next {
        padding: 0;
        border: 1px solid #333;
        margin: 0 4px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .meetups_main {
    padding-top: 20px;
    padding: 20px;
    .meetups_title {
      text-align: center;
      h1 {
        padding-bottom: 10px;
        font-size: 28px;
        color: #202020;
      }
      p {
        padding: 0 10px;
        font-size: 16px;
        color: #666;
      }
    }
    .vue-map-container {
      margin: 10px 0;
    }
    .meetups_content {
      p {
        font-size: 28px;
        color: #202020;
        text-align: center;
        margin-bottom: 30px;
      }
      .meetups_list {
        font-size: 16px;
        color: #202020;
        padding: 0;
        margin-bottom: 40px;
      }
    }
    .meetups_li {
      display: flex;
      border-bottom: 1px solid #f2f2f2;
      padding: 20px 0;
      .meetups_list_time {
        width: 25%;
      }
      .meetups_list_content {
        width: 45%;
      }
      .meetups_list_address {
        width: 30%;
      }
    }
    .meetups_pagination {
      text-align: center;
      margin-bottom: 20px;
      .el-pagination {
        background: none;
        .el-pager {
          li {
            border: 1px solid #333;
            padding: 0;
            margin: 0 4px;
          }
        }
        .btn-prev,
        .btn-next {
          padding: 0;
          border: 1px solid #333;
          margin: 0 4px;
        }
      }
    }
  }
}
</style>