<template>
  <!-- 改成喜欢的音乐界面 -->
  <div class="ilike">
    <div v-show="isKong" class="mod_songlist_toolbar">
      <a href="javascript:;" class="mod_btn_green">播放全部</a>
      <a href="javascript:;" class="mod_btn">添加到</a>
      <a href="javascript:;" class="mod_btn">
        <i class="iconfont icondaoru"></i>下载
      </a>
      <a href="javascript:;" class="mod_btn">
        <i class="iconfont icongengduo"></i> 批量操作
      </a>
    </div>
    <div v-show="isKong">
      <!-- 显示头部列表 -->
      <ul class="songlist__header">
        <li class="songlist__edit songlist__edit--check sprite" style="display: none;">
          <input type="checkbox" class="songlist__checkbox js_check_all" />
        </li>
        <li class="songlist__header_name">歌曲</li>
        <li>歌手</li>
        <li>专辑</li>
        <li>时长</li>
      </ul>
      <!-- 显示我喜欢的音乐 -->
      <ul class="songlist__list">
        <li v-for="item in mylikelist" :key="item.id">
          <div class="songlist__item">
            <div class="songlist__edit songlist__edit--check sprite" style="display:none;">
              <input type="checkbox" class="songlist__checkbox" />
            </div>
            <div class="songlist__songname">
              <span class="songlist__songname_txt">
                <a target="blank" :href="item.myurl" :title="item.likename">{{item.likename}}</a>
              </span>
              <div class="mod_list_menu" v-show="false">
                <a href="javascript:;" class="list_menu__item list_menu__play js_play" title="播放">
                  <i class="list_menu__icon_play"></i>
                  <span class="icon_txt">播放</span>
                </a>
                <a
                  href="javascript:;"
                  class="list_menu__item list_menu__add js_fav"
                  title="添加到歌单"
                  aria-haspopup="true"
                >
                  <i class="list_menu__icon_add"></i>
                  <span class="icon_txt">添加到歌单</span>
                </a>

                <a
                  href="javascript:;"
                  class="list_menu__item list_menu__down js_down"
                  title="VIP下载"
                  aria-haspopup="true"
                  data-target="menu_down"
                >
                  <i class="list_menu__icon_down_vip"></i>
                  <span class="icon_txt">VIP下载</span>
                </a>

                <a
                  href="javascript:;"
                  class="list_menu__item list_menu__share js_share"
                  title="分享"
                  aria-haspopup="true"
                >
                  <i class="list_menu__icon_share"></i>
                  <span class="icon_txt">分享</span>
                </a>
              </div>
            </div>

            <div class="songlist__artist" title="Kid Bloom">
              <a :href="item.picurl" :title="item.arname" class="singer_name">{{item.arname}}</a>
            </div>
            <div class="songlist__album">
              <a :href="item.picurl" :title="item.alname" class="album_name">{{item.alname}}</a>
            </div>
            <div class="songlist__delete">
              <span class="dttime">{{dtframe(item.dt)}}</span>
              <span class="iconfont iconshanchu delete" @click="deleteLike(item.musicid)"></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 没有喜欢的音乐的时候显示 -->
    <div v-show="!isKong" class="none_txt">
      <img
        src="https://y.gtimg.cn/mediastyle/yqq/img/symbol_none@2x.png?max_age=2592000&v=056e33119d5748360c67d7f5a33e25a0&v=056e33119d5748360c67d7f5a33e25a0&v=ad9d25f33c9d3141fb8256229efa8e25"
        class="none_txt__symbol"
      />
      <p>您没有喜欢的音乐...</p>
    </div>
    <!-- 底部获取更多内容部分 -->
    <div v-show="isKong" class="client_guide" id="limitButton">
      <p class="client_guide__txt">查看更多内容，请下载客户端</p>
      <a href="javascript:void(0);" class="client_guide__btn js_limitButton">立即下载</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "UpLoadMvTab",
  props: {
    userPoint_1: {} //获取用户信息-->this.axios获取喜欢歌曲信息
  },
  watch: {
    userPoint_1: {
      handler(newVal, oldVal) {
        //获取喜欢歌曲的id
        this.$axios({
          method: "get",
          withCredentials: true,
          url: "http://localhost:3000/likelist?uid=" + newVal.userId
        })
          .then(result => {
            console.log('hello likelist')
            this.mylikeids = result.data.ids.toString(); //转为字符串形式
            //通过歌曲id获取播放地址以及详情
            this.$axios({
              method: "get",
              withCredentials: true,
              url: "http://localhost:3000/song/detail?ids=" + this.mylikeids
            })
              .then(result => {
                let songs = result.data.songs;
                this.$axios({
                  method: "get",
                  withCredentials: true,
                  url: "http://localhost:3000/song/url?id=" + this.mylikeids
                })
                  .then(result => {
                    //将获取的数据进行整理
                    console.log(songs);
                    let urls = result.data.data;
                    for (var index = 0; index < songs.length; index++) {
                      this.mylikelist.push({
                        musicid: urls[index].id,
                        myurl: urls[index].url,
                        alname: songs[index].al.name,
                        arname: songs[index].ar[0].name,
                        dt: songs[index].dt,
                        likename: songs[index].name,
                        picurl: songs[index].al.picUrl
                      });
                    }
                  })
                  .catch(err => {
                    console.log(err);
                  });
              })
              .catch(err => {
                console.log(err);
              });
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  },
  data() {
    return {
      //登录用户基础信息
      userPoint: {},
      //mylike喜欢歌曲列表
      mylikeids: "", //喜欢的音乐id
      mylikelist: [] //合成的数据项数组
      //isKong: false,//判断数组是否为空
    };
  },
  methods: {
    //时间转换函数
    dtframe(dtt) {
      let mm = parseInt(dtt / 1000 / 60);
      let ss = parseInt(dtt / 1000 - mm * 60);
      return mm + "分" + ss + "秒";
    },
    deleteLike(musicid) {
      this.$axios({
        method: "get",
        withCredentials: true,
        url: "http://localhost:3000/like?id=" + musicid+'&like=false'
      })
        .then(result => {
          //根据歌曲id进行删除操作
          console.log('--删除成功--'+musicid)
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    isKong() {
      console.log(this.mylikelist.length);
      if (this.mylikelist.length == 0) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>
<style scoped>
@import "../../assets/mymusic-icon/iconfont.css";
@import "../../assets/mymusic-css/focus.css";
@import "../../assets/mymusic-css/mycreate.css";
@import "../../assets/mymusic-css/mymusic.css";
.mod_songlist_toolbar {
  /* position: relative; */
  margin-bottom: 20px;
  font-size: 0;
  padding-top: 20px;
}
.mod_songlist_toolbar .mod_btn {
  float: left;
  min-width: 122px;
  text-align: center;
}
.mod_songlist_toolbar .mod_btn:hover {
  color: #000;
}
.mod_songlist_toolbar .mod_btn_green {
  float: left;
  color: #fff;
}
.mod_songlist_toolbar .mod_btn_green .iconfont {
  font-size: 18px;
}
.ilike {
  overflow: hidden;
}
.songlist__header,
.songlist__item {
  position: relative;
  padding-left: 46px;
  padding-right: 95px;
}
.songlist__header {
  height: 50px;
  line-height: 50px;
  background-color: rgba(0, 0, 0, 0.01);
  color: #999;
}
.songlist__header {
  margin-top: 50px;
}
.songlist__header,
.songlist__item {
  padding-left: 20px;
  display: flex;
}
.songlist__header .songlist__header_name,
.songlist__item .songlist__songname {
  float: left;
  width: 52.1%;
  position: relative;
  white-space: normal;
}
.songlist__header li,
.songlist__item li {
  width: 20%;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.songlist__header li:nth-last-child(2),
.songlist__item li:nth-last-child(2) {
  text-align: center;
}
.songlist__header li:last-child,
.songlist__item li:last-child {
  text-align: right;
}
.songlist__list li > div {
  display: flex;
  /* width: 100%; */
}
.songlist__list li > div .songlist__songname {
  /* float: left; */
  width: 52.1%;
  position: relative;
  white-space: normal;
}
.songlist__list li > div div {
  width: 20%;
  height: 50px;
  line-height: 50px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.songlist__list li > div div:nth-last-child(2) {
  text-align: center;
}
.songlist__list li > div div:last-child {
  /* width: 10%; */
  text-align: right;
}
.songlist__songname .mod_list_menu {
  position: absolute;
  width: 60%;
  top: 0;
  right: 25px;
}
.client_guide {
  margin-top: 45px;
}
.songlist__delete:hover .dttime {
  display: none;
}
.delete {
  display: none;
  cursor: pointer;
}
.songlist__delete:hover .delete {
  width: 30px;
  height: 30px;
  line-height: 30px;
  margin: 0 auto;
  text-align: center;
  float: right;
  display: block;
  font-size: 20px;
}
</style>

