<template>
  <div id="index">
    <div class="song_recommend">
      <div class="song_recommend_top">
        <h2>歌单推荐</h2>
        <div class="song_recommend_tab">
          <ul>
            <li>
              <a href>为你推荐</a>
            </li>
            <li>
              <a href>网络音乐</a>
            </li>
            <li>
              <a href>轻音乐</a>
            </li>
            <li>
              <a href>经典粤语</a>
            </li>
            <li>
              <a href>官方歌单</a>
            </li>
            <li>
              <a href>情歌</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="swiper-container swiper1">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in recommendMusicList" :key="item.id">
            <a href>
              <!--//p.qpic.cn/music_cover/Hepa6V8aXWj4x9UyxSztnRoB2nKmjg4c2cpSLTI9hHUHAdibC33Z6iag/300?n=1-->
              <img :src="item.coverImgUrl" />
            </a>
            <!--吃糖么？ 「现」男友们撒的那种-->
            <h4 class="index_song_title">{{item.name}}</h4>
            <p class="index_song_play_num">播放量：{{item.playCount}}</p>
          </div>
        </div>
      </div>
    </div>
    <!--新歌首发-->
    <div class="new_song">
      <div class="new_song_recommend_top">
        <h2>新歌首发</h2>
        <div class="new_song_recommend_tab">
          <ul>
            <li>
              <a href>最新</a>
            </li>
            <li>
              <a href>内地</a>
            </li>
            <li>
              <a href>港台</a>
            </li>
            <li>
              <a href>欧美</a>
            </li>
            <li>
              <a href>韩国</a>
            </li>
            <li>
              <a href>日本</a>
            </li>
          </ul>
        </div>
      </div>
      <ul class="songList">
        <li class="songList_item" v-for="item in newMusicList" :key="item.id">
          <div class="songList_item_box">
            <a href>
              <img src="../assets/images/play.png" class="play" />
              <!--//y.gtimg.cn/music/photo_new/T002R90x90M000001uuOXB0fZY0Z.jpg?max_age=2592000-->
              <img :src="item.song.album.picUrl" />
            </a>
            <div class="songList_content">
              <!--投名状（The Oath）-->
              <h3>{{item.name}}</h3>
              <p>{{item.song.artists[0].name}}</p>
            </div>
            <div class="songList_ctime">{{item.song.duration}}</div>
          </div>
        </li>
      </ul>
    </div>
    <!--精彩推荐-->
    <div class="recommend_action">
      <h2>精彩推荐</h2>
      <div class="swiper-container swiper2">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1605976.jpg?max_age=2592000" />
            <img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1606089.jpeg" />
          </div>
          <div class="swiper-slide">
            <img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1605976.jpg?max_age=2592000" />
            <img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1605976.jpg?max_age=2592000" />
          </div>
          <div class="swiper-slide">
            <img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1605976.jpg?max_age=2592000" />
            <img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1605976.jpg?max_age=2592000" />
          </div>
        </div>
         <div class="swiper-pagination"></div>

        <div class="swiper-button-prev"></div>
        <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-button-next"></div>
        <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
      </div>
    </div>
    <!--新碟首发-->
    <div class="new_album_box">
      <div class="new_song_recommend_top">
        <h2>新碟首发</h2>
        <div class="new_song_recommend_tab">
          <ul>
            <li>
              <a href>内地</a>
            </li>
            <li>
              <a href>港台</a>
            </li>
            <li>
              <a href>欧美</a>
            </li>
            <li>
              <a href>韩国</a>
            </li>
            <li>
              <a href>日本</a>
            </li>
            <li>
              <a href>其他</a>
            </li>
          </ul>
        </div>
      </div>
      <ul class="songList">
        <li class="songList_item" v-for="item in newDiskList" :key="item.id">
          <div class="songList_item_box">
            <a href>
              <img src="../assets/images/play.png" class="play" />
              <!--//y.gtimg.cn/music/photo_new/T002R300x300M000000FqqEL3XniAe.jpg?max_age=2592000-->
              <img :src="item.picUrl" />
            </a>
            <div class="songList_content">
              <h3>{{item.name}}</h3>
              <p>{{item.artist.name}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!--排行榜-->
    <div class="toplist_box">
      <h2>排行榜</h2>
      <ul class="toplist__list">
        <li class="toplist__item">
          <div class="toplist__box">
            <div class="toplist_bg"></div>
            <h3 class="toplist__hd">流行指数</h3>
            <ul class="toplist__songlist">
              <li class="toplist__song">
                <div class="toplist__songname">
                  <span class="toplist__number">1</span>
                  <a href="#">回答 (纯享版)</a>
                </div>
                <div class="toplist__artist">
                  <a href="#">张钰琪</a>
                </div>
              </li>

              <li class="toplist__song">
                <div class="toplist__songname">
                  <span class="toplist__number">2</span>
                  <a href="#">The Archer</a>
                </div>
                <div class="toplist__artist">
                  <a href="#">Taylor Swift</a>
                </div>
              </li>

              <li class="toplist__song">
                <div class="toplist__songname">
                  <span class="toplist__number">3</span>
                  <a href="#">画 (Live Piano Session Ⅱ)</a>
                </div>
                <div class="toplist__artist">
                  <a href="#">G.E.M. 邓紫棋</a>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="toplist__item">
          <div class="toplist__box">
            <div class="toplist_bg2"></div>
            <h3 class="toplist__hd">热歌</h3>
            <ul class="toplist__songlist">
              <li class="toplist__song">
                <div class="toplist__songname">
                  <span class="toplist__number">1</span>
                  <a href="#">慢半拍</a>
                </div>
                <div class="toplist__artist">
                  <a href="#">薛之谦</a>
                </div>
              </li>

              <li class="toplist__song">
                <div class="toplist__songname">
                  <span class="toplist__number">2</span>
                  <a href="#">缘分一道桥</a>
                </div>
                <div class="toplist__artist">
                  <a href="#">王力宏/谭维维</a>
                </div>
              </li>

              <li class="toplist__song">
                <div class="toplist__songname">
                  <span class="toplist__number">3</span>
                  <a href="#">来自天堂的魔鬼</a>
                </div>
                <div class="toplist__artist">
                  <a href="#">G.E.M. 邓紫棋</a>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="toplist__item">
          <div class="toplist__box">
            <div class="toplist_bg3"></div>
            <h3 class="toplist__hd">新歌</h3>
            <ul class="toplist__songlist">
              <li class="toplist__song">
                <div class="toplist__songname">
                  <span class="toplist__number">1</span>
                  <a href="#">差不多姑娘</a>
                </div>
                <div class="toplist__artist">
                  <a href="#">G.E.M. 邓紫棋</a>
                </div>
              </li>

              <li class="toplist__song">
                <div class="toplist__songname">
                  <span class="toplist__number">2</span>
                  <a href="#">慢半拍</a>
                </div>
                <div class="toplist__artist">
                  <a href="#">薛之谦</a>
                </div>
              </li>

              <li class="toplist__song">
                <div class="toplist__songname">
                  <span class="toplist__number">3</span>
                  <a href="#">bad guy</a>
                </div>
                <div class="toplist__artist">
                  <a href="#">Billie Eilish</a>
                </div>
              </li>
            </ul>
          </div>
        </li>

        <li class="toplist__item">
          <div class="toplist__box">
            <div class="toplist_bg4"></div>
            <h3 class="toplist__hd">欧美</h3>
            <ul class="toplist__songlist">
              <li class="toplist__song">
                <div class="toplist__songname">
                  <span class="toplist__number">1</span>
                  <a href="#">body guy</a>
                </div>
                <div class="toplist__artist">
                  <a href="#">Billie Eilish</a>
                </div>
              </li>

              <li class="toplist__song">
                <div class="toplist__songname">
                  <span class="toplist__number">2</span>
                  <a href="#">The Archer</a>
                </div>
                <div class="toplist__artist">
                  <a href="#">Taylor Swift</a>
                </div>
              </li>

              <li class="toplist__song">
                <div class="toplist__songname">
                  <span class="toplist__number">3</span>
                  <a href="#">Beautiful People</a>
                </div>
                <div class="toplist__artist">
                  <a href="#">Ed Sheeran/Khalid</a>
                </div>
              </li>
            </ul>
          </div>
        </li>

        <li class="toplist__item">
          <div class="toplist__box">
            <div class="toplist_bg5"></div>
            <h3 class="toplist__hd">韩国</h3>
            <ul class="toplist__songlist">
              <li class="toplist__song">
                <div class="toplist__songname">
                  <span class="toplist__number">1</span>
                  <a href="#">그대라는 시</a>
                </div>
                <div class="toplist__artist">
                  <a href="#">태연 (太妍)</a>
                </div>
              </li>

              <li class="toplist__song">
                <div class="toplist__songname">
                  <span class="toplist__number">2</span>
                  <a href="#">Another Day</a>
                </div>
                <div class="toplist__artist">
                  <a href="#">먼데이 키즈 (Monday Kiz)</a>
                </div>
              </li>

              <li class="toplist__song">
                <div class="toplist__songname">
                  <span class="toplist__number">3</span>
                  <a href="#">나의 어깨에 기대어요</a>
                </div>
                <div class="toplist__artist">
                  <a href="#">10cm (십센치)</a>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <!--MV-->
    <div class="mv_box">
      <div class="new_song_recommend_top">
        <h2>MV</h2>
        <div class="new_song_recommend_tab">
          <ul>
            <li>
              <a href>内地</a>
            </li>
            <li>
              <a href>港台</a>
            </li>
            <li>
              <a href>欧美</a>
            </li>
            <li>
              <a href>韩国</a>
            </li>
            <li>
              <a href>日本</a>
            </li>
            <li>
              <a href>其他</a>
            </li>
          </ul>
        </div>
      </div>
      <ul class="songList">
        <li class="songList_item" v-for="item in newMvList" :key="item.id">
          <div class="songList_item_box">
            <a href>
              <img src="../assets/images/play.png" class="play" />
              <!--//y.gtimg.cn/music/photo_new/T015R640x360M101003gqjK13oroYI.jpg?max_age=2592000-->
              <img :src="item.cover" />
            </a>
            <div class="songList_content">
              <h3>{{item.name}}</h3>
              <p>{{item.artistName}}</p>
              <p class="play_count">
                <span>
                  <i class="mv_list_listen_icon sprite"></i>
                  {{item.playCount}}
                </span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "index",
  data() {
    return {
      recommendMusicList: [],
      newMusicList: [],
      newMvList: [],
      newDiskList: []
    };
  },
  methods: {
    //初始化swiper
    init_swiper: function() {
      var mySwiper2 = new Swiper(".swiper2", {
        // 如果需要分页器
        //spaceBetween:20,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        effect: "coverflow",
        slidesPerView: 1
      });
    },

    //获取歌单推荐
    getRecommendMusicList() {
      var that = this;
      this.$axios({
        method: "get", //指定请求方式
        url: "http://localhost:3000/top/playlist?limit=5&order=new" //请求接口（相对接口，后面会介绍到）
      })
        .then(function(res) {
          //接口成功返回结果执行
          that.recommendMusicList = res.data.playlists;
          //console.log(res.data.playlists);
        })
        .catch(function(err) {
          //请求失败或者接口返回失败或者.then()中的代码发生错误时执行
        });
    },

    //获取新歌列表
    getNewMusicList() {
      var that = this;
      this.$axios({
        method: "get", //指定请求方式
        url: "http://localhost:3000/personalized/newsong?limit=8" //请求接口（相对接口，后面会介绍到）
      })
        .then(function(res) {
          //接口成功返回结果执行
          console.log(res.data.result);
          for (let i = 0; i < res.data.result.length; ++i) {
            let duration = res.data.result[i].song.duration;
            console.log("duration:" + duration);
            let mm = parseInt(duration / 1000 / 60);
            let ss = parseInt(duration / 1000) - mm * 60;
            if (mm < 10) {
              mm = "0" + mm;
            }
            if (ss < 10) {
              ss = "0" + ss;
            }
            res.data.result[i].song.duration = mm + ":" + ss;
          }
          that.newMusicList = res.data.result.slice(0, 9);
        })
        .catch(function(err) {
          //请求失败或者接口返回失败或者.then()中的代码发生错误时执行
        });
    },

    //获取新碟列表
    getNewDiskList() {
      var that = this;
      this.$axios({
        method: "get", //指定请求方式
        url: "http://localhost:3000/top/album?offset=0&limit=10" //请求接口（相对接口，后面会介绍到）
      })
        .then(function(res) {
          //接口成功返回结果执行
          that.newDiskList = res.data.albums;
          //console.log(res.data.albums);
        })
        .catch(function(err) {
          //请求失败或者接口返回失败或者.then()中的代码发生错误时执行
        });
    },

    //获取最新MV列表
    getNewMvList() {
      var that = this;
      this.$axios({
        method: "get", //指定请求方式
        url: "http://localhost:3000/mv/first?limit=10" //请求接口（相对接口，后面会介绍到）
      })
        .then(function(res) {
          //接口成功返回结果执行
          that.newMvList = res.data.data;
        })
        .catch(function(err) {
          //请求失败或者接口返回失败或者.then()中的代码发生错误时执行
        });
    }
  },
  mounted() {
    this.init_swiper();
    this.getRecommendMusicList();
    this.getNewMusicList();
    this.getNewMvList();
    this.getNewDiskList();
  }
};
</script>

<style scoped>
@import "../../node_modules/swiper/dist/css/swiper.css";
@import "../assets/index-css/index.css";

</style>
