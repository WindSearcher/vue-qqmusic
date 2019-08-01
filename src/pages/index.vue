<template>
    <div id="index">
        <div class="song_recommend">
            <div class="song_recommend_top">
                <h2>歌单推荐</h2>
                <div class="song_recommend_tab">
                    <ul>
                      <li><a href="">为你推荐</a></li>
                      <li><a href="">网络音乐</a></li>
                      <li><a href="">轻音乐</a></li>
                      <li><a href="">经典粤语</a></li>
                      <li><a href="">官方歌单</a></li>
                      <li><a href="">情歌</a></li>
                    </ul>
                </div>
            </div>
            <div class="swiper-container swiper1">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in recommendMusicList">
                          <a href="">
                            <!--//p.qpic.cn/music_cover/Hepa6V8aXWj4x9UyxSztnRoB2nKmjg4c2cpSLTI9hHUHAdibC33Z6iag/300?n=1-->
                            <img :src="item.coverImgUrl">
                          </a>
                      <!--吃糖么？ 「现」男友们撒的那种-->
                          <h4 class="index_song_title">{{item.name}}</h4>
                          <p class="index_song_play_num">播放量：{{item.playCount}} </p>
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
                    <li><a href="">最新</a></li>
                    <li><a href="">内地</a></li>
                    <li><a href="">港台</a></li>
                    <li><a href="">欧美</a></li>
                    <li><a href="">韩国</a></li>
                    <li><a href="">日本</a></li>
                  </ul>
                </div>
            </div>
             <ul class="songList">
               <li class="songList_item" v-for="item in newMusicList">
                   <div class="songList_item_box">
                       <a href="">
                           <img src="../assets/play.png" class="play">
                         <!--//y.gtimg.cn/music/photo_new/T002R90x90M000001uuOXB0fZY0Z.jpg?max_age=2592000-->
                           <img :src="item.song.album.picUrl">
                       </a>
                       <div class="songList_content">
                         <!--投名状（The Oath）-->
                           <h3>{{item.name}}</h3>
                           <p>{{item.song.artists[0].name}}</p>
                       </div>
                       <div class="songList_ctime">
                            {{item.song.duration}}
                       </div>
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
                    <img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1605976.jpg?max_age=2592000">
                    <img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1606089.jpeg">
                </div>
                <div class="swiper-slide">
                    <img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1605976.jpg?max_age=2592000">
                    <img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1605976.jpg?max_age=2592000">
                </div>
                <div class="swiper-slide">
                    <img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1605976.jpg?max_age=2592000">
                    <img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1605976.jpg?max_age=2592000">
                </div>
              </div>

              <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
              <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
            </div>
        </div>
        <!--新碟首发-->
        <div class="new_album_box">
            <div class="new_song_recommend_top">
              <h2>新碟首发</h2>
              <div class="new_song_recommend_tab">
                <ul>
                  <li><a href="">内地</a></li>
                  <li><a href="">港台</a></li>
                  <li><a href="">欧美</a></li>
                  <li><a href="">韩国</a></li>
                  <li><a href="">日本</a></li>
                  <li><a href="">其他</a></li>
                </ul>
              </div>
            </div>
            <ul class="songList">
              <li class="songList_item" v-for="item in newDiskList">
                <div class="songList_item_box">
                  <a href="">
                    <img src="../assets/play.png" class="play">
                    <!--//y.gtimg.cn/music/photo_new/T002R300x300M000000FqqEL3XniAe.jpg?max_age=2592000-->
                    <img :src="item.picUrl">
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
        <div class="toplist_box" >
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
                          <a href="#"> The Archer</a>
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
                        <a href="#"> bad guy</a>
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
                        <a href="#"> The Archer</a>
                      </div>
                      <div class="toplist__artist">
                        <a href="#"> Taylor Swift</a>
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
                        <a href="#"> 그대라는 시 </a>
                      </div>
                      <div class="toplist__artist">
                        <a href="#">태연 (太妍)</a>
                      </div>
                    </li>

                    <li class="toplist__song">
                      <div class="toplist__songname">
                        <span class="toplist__number">2</span>
                        <a href="#"> Another Day</a>
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
                  <li><a href="">内地</a></li>
                  <li><a href="">港台</a></li>
                  <li><a href="">欧美</a></li>
                  <li><a href="">韩国</a></li>
                  <li><a href="">日本</a></li>
                  <li><a href="">其他</a></li>
                </ul>
              </div>
            </div>
            <ul class="songList">
               <li class="songList_item" v-for="item in newMvList">
                  <div class="songList_item_box">
                    <a href="">
                      <img src="../assets/play.png" class="play">
                      <!--//y.gtimg.cn/music/photo_new/T015R640x360M101003gqjK13oroYI.jpg?max_age=2592000-->
                      <img :src="item.cover">
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
  import Swiper from 'swiper'
    export default {
        name: "index",
        data(){
           return{
              recommendMusicList:[],
              newMusicList:[],
              newMvList:[],
              newDiskList:[]
           }
        },
        methods:{
             init_swiper:function(){
               var mySwiper2 = new Swiper ('.swiper2', {
                 // 如果需要分页器
                 //spaceBetween:20,
                 loop:true,
                 navigation: {
                   nextEl: '.swiper-button-next',
                   prevEl: '.swiper-button-prev',
                 },
               });
             },

            //获取歌单推荐
            getRecommendMusicList(){
              var that = this;
              this.$axios({
                method: "get",//指定请求方式
                url: "http://localhost:3000/top/playlist?limit=5&order=new",//请求接口（相对接口，后面会介绍到）
              })
                .then(function(res){
                  //接口成功返回结果执行
                  that.recommendMusicList = res.data.playlists;
                  //console.log(res.data.playlists);
                })
                .catch(function(err){
                  //请求失败或者接口返回失败或者.then()中的代码发生错误时执行
                })
            },

            getNewMusicList(){
              var that = this;
              this.$axios({
                method: "get",//指定请求方式
                url: "http://localhost:3000/personalized/newsong?limit=8",//请求接口（相对接口，后面会介绍到）
              })
                .then(function(res){
                  //接口成功返回结果执行
                  console.log(res.data.result);
                  for(let i = 0;i < res.data.result.length;++i) {
                    let duration = res.data.result[i].song.duration;
                      console.log("duration:"+duration);
                      let mm = parseInt(duration/1000/60);
                      let ss = (parseInt(duration/1000)-mm*60);
                      if(mm < 10){
                          mm = '0'+mm;
                      }
                      if(ss < 10){
                          ss = '0'+ss;
                      }
                      res.data.result[i].song.duration = mm+':'+ss;
                    }
                   that.newMusicList = res.data.result.slice(0,9);
                })
                .catch(function(err){
                  //请求失败或者接口返回失败或者.then()中的代码发生错误时执行
                })
            },
            getNewDiskList(){
               var that = this;
              this.$axios({
                method: "get",//指定请求方式
                url: "http://localhost:3000/top/album?offset=0&limit=10",//请求接口（相对接口，后面会介绍到）
              })
                .then(function(res){
                  //接口成功返回结果执行
                  that.newDiskList = res.data.albums;
                  //console.log(res.data.albums);
                })
                .catch(function(err){
                  //请求失败或者接口返回失败或者.then()中的代码发生错误时执行
                })
            },
            getNewMvList(){
              var that = this;
              this.$axios({
                method: "get",//指定请求方式
                url: "http://localhost:3000/mv/first?limit=10",//请求接口（相对接口，后面会介绍到）
              })
                .then(function(res){
                  //接口成功返回结果执行
                  that.newMvList = res.data.data;
                })
                .catch(function(err){
                  //请求失败或者接口返回失败或者.then()中的代码发生错误时执行
                })
            },
        },
        mounted(){
             this.init_swiper();
             this.getRecommendMusicList();
             this.getNewMusicList();
             this.getNewMvList();
             this.getNewDiskList();
        }
    }

</script>

<style scoped>
  @import '../../node_modules/swiper/dist/css/swiper.css';
     #index{
       width:100%;
       margin-top:80px;
       position: relative;
     }

     #index .song_recommend{
        width:100%;
        height:500px;
        background: linear-gradient(top,rgba(250,250,250,.9),#fff);
     }

      #index .song_recommend  .song_recommend_top{
         width:1200px;
         margin:0 auto;
         padding-top:40px;
         box-sizing: border-box;
      }
      #index .song_recommend  .song_recommend_top h2{
            text-align:center;
            letter-spacing: 5px;
            margin-bottom:25px;
      }

      #index .song_recommend  .song_recommend_top .song_recommend_tab{
            margin-left:300px;
            margin-bottom:25px;
      }

      #index .song_recommend  .song_recommend_top .song_recommend_tab>ul{
           display:flex;
      }

      #index .song_recommend  .song_recommend_top .song_recommend_tab>ul>li{
           width:100px;
      }

      #index .song_recommend  .song_recommend_top .song_recommend_tab>ul>li>a{
          color:#000;
          font-size:18px;
      }

      #index .song_recommend  .song_recommend_top .song_recommend_tab>ul>li>a:hover{
          color:#31c27c;
      }
      #index .song_recommend .swiper-container {
         width: 1200px;
         height: 300px;
         margin-top:20px;
      }


      #index .song_recommend .swiper-container .swiper-wrapper{
        width: 1200px;
        height: 300px;
      }

      #index .song_recommend .swiper-container .swiper-wrapper .swiper-slide{
          width:240px;
      }


      #index .song_recommend .swiper-container .swiper-wrapper .swiper-slide>a img{
          width:224px;
          height:224px;
      }

      #index .song_recommend .swiper-container .swiper-wrapper .swiper-slide>h4{
          overflow:hidden;
          white-space: nowrap;
          color:#000;
          text-overflow:ellipsis;
          font-size:14px;
          margin-top:10px;
          margin-bottom:10px;
          line-height: 1.5;
          font-family: poppin,Tahoma,Arial,微软雅黑,sans-serif;
      }
      #index .song_recommend .swiper-container .swiper-wrapper .swiper-slide>p{
        color: #999;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 22px;
      }

      #index .new_song{
        width:100%;
        height:500px;
        background: linear-gradient(top,rgba(250,250,250,.9),#fff);
      }

      #index .new_song  .new_song_recommend_top{
        width:1200px;
        margin:0 auto;
        padding-top:40px;
        box-sizing: border-box;
      }
      #index .new_song  .new_song_recommend_top h2{
        text-align:center;
        letter-spacing: 5px;
        margin-bottom:25px;
      }

      #index .new_song  .new_song_recommend_top .new_song_recommend_tab{
        margin-left:300px;
        margin-bottom:25px;
      }

      #index .new_song  .new_song_recommend_top .new_song_recommend_tab>ul{
        display:flex;
      }

      #index .new_song  .new_song_recommend_top .new_song_recommend_tab>ul>li{
        width:100px;
      }

      #index .new_song  .new_song_recommend_top .new_song_recommend_tab>ul>li>a{
        color:#000;
        font-size:18px;
      }

      #index .new_song  .new_song_recommend_top .new_song_recommend_tab>ul>li>a:hover{
        color:#31c27c;
      }


      /*新歌首发*/
      #index .new_song .songList{
           margin-left:245px;
           width:1200px;
           /*display:flex;*/
           /*flex-wrap:wrap;*/

      }

      #index .new_song .songList .songList_item{
           width:400px;
           height:111px;
           box-sizing: border-box;
           float:left;
           padding-top:10px;
      }

      #index .new_song .songList .songList_item:nth-child(n+4){
        border-top:1px solid #ccc;
      }
      #index .new_song .songList .songList_item .songList_item_box{
            position: relative;
      }
      #index .new_song .songList .songList_item .songList_item_box a{

      }

      #index .new_song .songList .songList_item .songList_item_box a .play{
           width:45px;
           height:45px;
           position:absolute;
           top:25px;
           left:20px;
           display:none;
      }
      #index .new_song .songList .songList_item .songList_item_box a:hover .play{
           display:block;
           animation:fadeInOut 1s ease-in-out;
      }

       @keyframes fadeInOut {
            0% {
              opacity:0;
            }
            50% {
              opacity: 0.5;
            }
            75% {
              opacity:1;
            }
      }
      #index .new_song .songList .songList_item .songList_item_box>a>img{
           width:86px;
           height:86px;
      }
      #index .new_song .songList .songList_item .songList_item_box .songList_content{
           position: absolute;
           left:100px;
           top:8px;
      }
      #index .new_song .songList .songList_item .songList_item_box .songList_content>h3{
          font-size:14px;
          color:#000;
          margin-top:9px;
      }
      #index .new_song .songList .songList_item .songList_item_box .songList_content>p{
          font-size:14px;
          color:#999;
          margin-top:8px;
      }
      #index .new_song .songList .songList_item .songList_item_box .songList_ctime{
           position:absolute;
           right:15px;
           top:32px;
           font-size:18px;
           color:#999;
      }

      /*精彩推荐*/
      #index  .recommend_action{
           width:100%;
           height:500px;
        background: linear-gradient(top,rgba(250,250,250,.9),#fff);
           padding-top:30px;
           box-sizing: border-box;
       }

      #index  .recommend_action  h2{
           letter-spacing: 5px;
           text-align: center;
           margin-bottom:30px;
      }
      #index  .recommend_action .swiper2 {
            height:300px;
            padding-bottom:20px;
            padding-left:245px;
            box-sizing: border-box;
      }
      #index  .recommend_action .swiper2 .swiper-slide{

      }
      #index  .recommend_action .swiper2 .swiper-slide img{
           width:590px;
           height:263px;
      }

      /*新碟首发*/
      #index .new_album_box{
        width:100%;
        height:800px;
        background: linear-gradient(top,rgba(250,250,250,.9),#fff);
      }
      #index .new_album_box  .new_song_recommend_top{
        width:1200px;
        margin:0 auto;
        padding-top:40px;
        box-sizing: border-box;
      }
      #index .new_album_box  .new_song_recommend_top h2{
        text-align:center;
        letter-spacing: 5px;
        margin-bottom:25px;
      }

      #index .new_album_box  .new_song_recommend_top .new_song_recommend_tab{
        margin-left:300px;
        margin-bottom:25px;
      }

      #index .new_album_box  .new_song_recommend_top .new_song_recommend_tab>ul{
        display:flex;
      }

      #index .new_album_box  .new_song_recommend_top .new_song_recommend_tab>ul>li{
        width:100px;
      }

      #index .new_album_box  .new_song_recommend_top .new_song_recommend_tab>ul>li>a{
        color:#000;
        font-size:18px;
      }

      #index .new_album_box  .new_song_recommend_top .new_song_recommend_tab>ul>li>a:hover{
        color:#31c27c;
      }


      #index .new_album_box .songList{
        margin-left:245px;
        width:1200px;
        height:800px;
      }

      #index .new_album_box .songList .songList_item{
        width:240px;
        height:310px;
        box-sizing: border-box;
        float:left;
        padding-top:10px;
      }


      #index .new_album_box .songList .songList_item .songList_item_box{
        position: relative;
      }
      #index .new_album_box .songList .songList_item .songList_item_box a{

      }

      #index .new_album_box .songList .songList_item .songList_item_box a .play{
        width:45px;
        height:45px;
        position:absolute;
        top:100px;
        left:95px;
        display:none;
      }
      #index .new_album_box .songList .songList_item .songList_item_box a:hover .play{
        display:block;
        animation:fadeInOut 1s ease-in-out;
      }

      #index .new_album_box .songList .songList_item .songList_item_box>a>img{
        width:224px;
        height:224px;
      }
      #index .new_album_box .songList .songList_item .songList_item_box .songList_content{

      }
      #index .new_album_box .songList .songList_item .songList_item_box .songList_content>h3{
        font-size:14px;
        color:#000;
        margin-top:5px;
        margin-bottom:5px;
      }
      #index .new_album_box .songList .songList_item .songList_item_box .songList_content>p{
        font-size:14px;
        color:#999;
      }


      /*排行榜*/
      #index .toplist_box{
         width:100%;
         height:700px;
         background: linear-gradient(top,rgba(250,250,250,.9),#fff);
         padding-top:30px;
     }
      #index .toplist_box h2{
          text-align:center;
          letter-spacing: 5px;
          margin-bottom:30px;
      }
      #index .toplist_box .toplist__list{
         /*margin:0 auto;*/
         margin-left:245px;
         width:1200px;
      }
      #index .toplist_box .toplist__list .toplist__box{
           float:left;
           width:18%;
           height:567px;
           margin-right:2%;
           border:1px solid red;
           box-sizing: border-box;
           position:relative;
      }
      #index .toplist_box .toplist__list .toplist__box .toplist_bg{
           position: absolute;
           background-position: 0 0;
           top: 0;
           left: 0;
           right: 0;
           height: 567px;
           background-image: url('https://y.gtimg.cn/mediastyle/yqq/img/bg_index_top.jpg?max_age=2592000&v=3beef369200a0863560787fd560c8205');
      }

      #index .toplist_box .toplist__list .toplist__box .toplist_bg2{
        position: absolute;
        background-position: -448px 0;
        top: 0;
        left: 0;
        right: 0;
        height: 567px;
        background-image: url('https://y.gtimg.cn/mediastyle/yqq/img/bg_index_top.jpg?max_age=2592000&v=3beef369200a0863560787fd560c8205');
      }

      #index .toplist_box .toplist__list .toplist__box .toplist_bg3{
        position: absolute;
        background-position: -672px 0;
        top: 0;
        left: 0;
        right: 0;
        height: 567px;
        background-image: url('https://y.gtimg.cn/mediastyle/yqq/img/bg_index_top.jpg?max_age=2592000&v=3beef369200a0863560787fd560c8205');
      }

      #index .toplist_box .toplist__list .toplist__box .toplist_bg4{
        position: absolute;
        background-position: -896px 0;
        top: 0;
        left: 0;
        right: 0;
        height: 567px;
        background-image: url('https://y.gtimg.cn/mediastyle/yqq/img/bg_index_top.jpg?max_age=2592000&v=3beef369200a0863560787fd560c8205');
      }

      #index .toplist_box .toplist__list .toplist__box .toplist_bg5{
        position: absolute;
        background-position: -1120px 0;
        top: 0;
        left: 0;
        right: 0;
        height: 567px;
        background-image: url('https://y.gtimg.cn/mediastyle/yqq/img/bg_index_top.jpg?max_age=2592000&v=3beef369200a0863560787fd560c8205');
      }
      #index .toplist_box .toplist__list .toplist__box h3{
           font-size:25px;
           color:#fff;
           font-weight: 400;
           position: absolute;
           width:100%;
           height:50px;
           top:50px;
           text-align:center;
      }

      #index .toplist_box .toplist__list .toplist__box .toplist__songlist{
          position: absolute;
          top:150px;
          left:30px;
      }

      #index .toplist_box .toplist__list .toplist__box .toplist__songlist .toplist__song{
           margin-top:30px;
           font-size: 16px;
           box-sizing: border-box;
      }


      #index .toplist_box .toplist__list .toplist__box .toplist__songlist .toplist__song>.toplist__songname>.toplist__number{
           color:#fff;
           display:inline-block;
           margin-right:10px;
           margin-bottom:10px;
      }

      #index .toplist_box .toplist__list .toplist__box .toplist__songlist .toplist__song>.toplist__artist{
           padding-left:23px;

      }

      #index .toplist_box a{
        color:#fff;
      }

      #index .mv_box{
        width:100%;
        height:650px;
        background: linear-gradient(top,rgba(250,250,250,.9),#fff);
      }
      #index .mv_box  .new_song_recommend_top{
        width:1200px;
        margin:0 auto;
        padding-top:40px;
        box-sizing: border-box;
      }
      #index .mv_box  .new_song_recommend_top h2{
        text-align:center;
        letter-spacing: 5px;
        margin-bottom:25px;
      }

      #index .mv_box  .new_song_recommend_top .new_song_recommend_tab{
        margin-left:300px;
        margin-bottom:25px;
      }

      #index .mv_box  .new_song_recommend_top .new_song_recommend_tab>ul{
        display:flex;
      }

      #index .mv_box  .new_song_recommend_top .new_song_recommend_tab>ul>li{
        width:100px;
      }

      #index .mv_box  .new_song_recommend_top .new_song_recommend_tab>ul>li>a{
        color:#000;
        font-size:18px;
      }

      #index .mv_box  .new_song_recommend_top .new_song_recommend_tab>ul>li>a:hover{
        color:#31c27c;
      }


      #index .mv_box .songList{
        margin-left:245px;
        width:1200px;
        height:400px;
      }

      #index .mv_box .songList .songList_item{
        width:240px;
        height:250px;
        box-sizing: border-box;
        float:left;
        padding-top:10px;
      }


      #index .mv_box .songList .songList_item .songList_item_box{
        position: relative;
      }
      #index .mv_box .songList .songList_item .songList_item_box a{

      }

      #index .mv_box .songList .songList_item .songList_item_box a .play{
        width:45px;
        height:45px;
        position:absolute;
        top:38px;
        left:92px;
        display:none;
      }
      #index .mv_box .songList .songList_item .songList_item_box a:hover .play{
        display:block;
        animation:fadeInOut 1s ease-in-out;
      }

      #index .mv_box .songList .songList_item .songList_item_box>a>img{
        width:224px;
        height:126px;
      }
      #index .mv_box .songList .songList_item .songList_item_box .songList_content{

      }
      #index .mv_box .songList .songList_item .songList_item_box .songList_content>h3{
        font-size:14px;
        color:#000;
        margin-top:5px;
        margin-bottom:5px;
      }
      #index .mv_box .songList .songList_item .songList_item_box .songList_content>p{
        font-size:14px;
        color:#999;
        margin-bottom:5px;
      }

      .mv_list_listen_icon {
        display: inline-block;
        width: 19px;
        height: 12px;
        background-position: -180px -20px;
        margin-right: 5px;
        vertical-align: -1px;
      }
      .sprite {
        background-image: url('https://y.gtimg.cn/mediastyle/yqq/img/icon_sprite.png?max_age=2592000&v=5fa916dafbaeb15e38e16da4cf0552fc');
        }
</style>
