<template>
    <div id="mv">
       <div class="tag_title">
           <h3>区域</h3>
           <a href="#" @click.prevent="goMv()" class="on1">全部</a>
           <a href="#" @click.prevent="goMv('华语')">内地</a>
           <a href="#" @click.prevent="goMv('')">港台</a>
           <a href="" @click.prevent="goMv('欧美')">欧美</a>
           <a href="" @click.prevent="goMv('韩语')">韩国</a>
           <a href="" @click.prevent="goMv('日语')">日本</a>
       </div>
       <div class="tag_version">
           <h3>版本</h3>
           <a href="#" @click.prevent="goMv()" class="on2">全部</a>
           <a href="">MV</a>
           <a href="">现场</a>
           <a href="">翻唱</a>
           <a href="">舞蹈</a>
           <a href="">影视</a>
           <a href="">综艺</a>
           <a href="">儿歌</a>
       </div>
       <div class="mv_content">
          <div class="mv_content_top">
              <h3>全部MV</h3>
              <div class="part_switch">
                 <a href="" class="on3">最新</a>
                 <a href="">最热</a>
              </div>
          </div>
          <div class="mv_body">
               <ul class="mv_list">
                    <li class="mv_list_item" v-for="item in allMvList">
                       <a href="#">
                          <img src="../assets/play.png" class="play">
                          <img :src="item.cover">
                       </a>
                       <h3>{{item.name}}</h3>
                       <p class="author">{{item.artistName}}</p>
                       <p class="ctime">
                         <span class="mv_list__listen"><i class="mv_list__listen_icon sprite"></i>{{item.playCount}}</span>
                       </p>
                     </li>
               </ul>
          </div>
       </div>
       <div id="footer">
        <div class="btn">
          <button class="pre" @click="pre">上一页  </button>
          <span> {{index}}/{{allpage}}</span>
          <button class="next"  @click="next">下一页 </button>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "mv",
        data(){
          return {
            allpage: 5,
            index: 1,
            allMvList:[]
          }
        },
        methods:{
          getAllChinaMvList(cat){
            var that = this;
            this.$axios({
              method: "get",//指定请求方式
              url: "http://localhost:3000/top/playlist?limit=20"+"&cat="+cat,//请求接口（相对接口，后面会介绍到）
            })
              .then(function(res){
                //接口成功返回结果执行
                that.allMvList = [];
                for(let i = 0;i < res.data.playlists.length;++i){
                      let item = {};
                      item.cover = res.data.playlists[i].coverImgUrl;
                      item.name = res.data.playlists[i].name;
                      item.playCount = res.data.playlists[i].playCount;
                      item.artistName = res.data.playlists[i].creator.nickname;
                      that.allMvList.push(item);
                }
              })
              .catch(function(err){
                //请求失败或者接口返回失败或者.then()中的代码发生错误时执行
              })
          },
          getAllHongKongMvList(cat){
            var that = this;
            this.$axios({
              method: "get",//指定请求方式
              url: "http://localhost:3000/top/playlist?limit=20"+"&cat="+cat,//请求接口（相对接口，后面会介绍到）
            })
              .then(function(res){
                //接口成功返回结果执行
                //that.allMvList = res.data.data;
                console.log(res.data.data);
              })
              .catch(function(err){
                //请求失败或者接口返回失败或者.then()中的代码发生错误时执行
              })
          },
          getAllEuropeMvList(cat){
            var that = this;
            this.$axios({
              method: "get",//指定请求方式
              url: "http://localhost:3000/top/playlist?limit=20"+"&cat="+cat,//请求接口（相对接口，后面会介绍到）
            })
              .then(function(res){
                //接口成功返回结果执行
                //that.allMvList = res.data.data;
                that.allMvList = [];
                for(let i = 0;i < res.data.playlists.length;++i){
                  let item = {};
                  item.cover = res.data.playlists[i].coverImgUrl;
                  item.name = res.data.playlists[i].name;
                  item.playCount = res.data.playlists[i].playCount;
                  item.artistName = res.data.playlists[i].creator.nickname;
                  that.allMvList.push(item);
                }
              })
              .catch(function(err){
                //请求失败或者接口返回失败或者.then()中的代码发生错误时执行
              })
          },
          getAllHanMvList(cat){
            var that = this;
            this.$axios({
              method: "get",//指定请求方式
              url: "http://localhost:3000/top/playlist?limit=20"+"&cat="+cat,//请求接口（相对接口，后面会介绍到）
            })
              .then(function(res){
                //接口成功返回结果执行
                //that.allMvList = res.data.data;
                that.allMvList = [];
                for(let i = 0;i < res.data.playlists.length;++i){
                  let item = {};
                  item.cover = res.data.playlists[i].coverImgUrl;
                  item.name = res.data.playlists[i].name;
                  item.playCount = res.data.playlists[i].playCount;
                  item.artistName = res.data.playlists[i].creator.nickname;
                  that.allMvList.push(item);
                }
              })
              .catch(function(err){
                //请求失败或者接口返回失败或者.then()中的代码发生错误时执行
              })
          },
          getAllJapaneseMvList(cat){
            var that = this;
            this.$axios({
              method: "get",//指定请求方式
              url: "http://localhost:3000/top/playlist?limit=20"+"&cat="+cat,//请求接口（相对接口，后面会介绍到）
            })
              .then(function(res){
                //接口成功返回结果执行
                //that.allMvList = res.data.data;
                that.allMvList = [];
                for(let i = 0;i < res.data.playlists.length;++i){
                  let item = {};
                  item.cover = res.data.playlists[i].coverImgUrl;
                  item.name = res.data.playlists[i].name;
                  item.playCount = res.data.playlists[i].playCount;
                  item.artistName = res.data.playlists[i].creator.nickname;
                  that.allMvList.push(item);
                }
              })
              .catch(function(err){
                //请求失败或者接口返回失败或者.then()中的代码发生错误时执行
              })
          },

          getAllMvList(){
            var that = this;
            this.$axios({
              method: "get",//指定请求方式
              url: "http://localhost:3000/top/mv?limit=20"+"&offset="+(that.index-1)*20,//请求接口（相对接口，后面会介绍到）
            })
              .then(function(res){
                //接口成功返回结果执行
                that.allMvList = res.data.data;
                //console.log(res.data.data);
              })
              .catch(function(err){
                //请求失败或者接口返回失败或者.then()中的代码发生错误时执行
              })
          },
          goMv(cat){
              console.log("cat:"+cat);
               switch(cat){
                 case '华语':
                   this.getAllChinaMvList(cat);
                   break;
                 case '欧美':
                   this.getAllEuropeMvList(cat);
                   break;
                 case '韩语':
                   this.getAllHanMvList(cat);
                   break;
                 case '日语':
                   this.getAllJapaneseMvList(cat);
                   break;
               }
          },
          pre() {
            if (this.index > 1)
              this.index--;
            this.getAllMvList();
          },
          next(){
            if(this.index < 5)
              this.index++;
            this.getAllMvList();
          }
        },
        mounted(){
            this.getAllMvList();
        }
    }
</script>

<style scoped>
   #mv{
       width:100%;
       background: linear-gradient(top,rgba(250,250,250,.9),#fff);
       margin-top:60px;
       padding-top:50px;
   }
   #mv .tag_title{
       width:1200px;
       margin:0 auto;
       margin-bottom:20px;
   }
   #mv .tag_title h3{
       float:left;
       width:65px;
       height:26px;
       font-size:16px;
       font-weight:400;
   }

   #mv .tag_title .on1{
       background-color:#31c27c;
       color:#fff;
       width:50px;
   }
   #mv .tag_title a{
     color:#000;
     width:65px;
     height:26px;
     display:inline-block;
     line-height:26px;
     text-align:center;
   }

   #mv .tag_title a:hover{
     color:#31c27c;
   }
   #mv .tag_version{
     width:1200px;
     margin:0 auto;
   }

   #mv .tag_version h3{
     float:left;
     width:65px;
     height:26px;

     font-size:16px;
     font-weight:400;
   }
   #mv .tag_version a{
     color:#000;
     width:65px;
     height:26px;
     display:inline-block;
     line-height:26px;
     text-align:center;
   }
   #mv .tag_version a:hover{
     color:#31c27c;
   }
   #mv .tag_version .on2{
     background-color:#31c27c;
     color:#fff;
     width:50px;
   }
   #mv .mv_content{
     width:1200px;
     margin:0 auto;
   }
   #mv .mv_content  .mv_content_top{
     width:1200px;
     height:58px;
     margin-top:30px;
   }
   #mv .mv_content  .mv_content_top h3{
       float:left;
       font-size:22px;
   }
   #mv .mv_content  .mv_content_top .part_switch{
       float:right;
   }

   #mv .mv_content  .mv_content_top .part_switch a{
       width:60px;
       height:40px;
       background-color:#fff;
       text-align:center;
       line-height:40px;
       display:inline-block;
       color:#000;
       border:1px solid #ccc;
       box-sizing: border-box;
       margin-right:0;
   }
   #mv .mv_content  .mv_content_top .part_switch .on3{
       background-color:#31c27c;
       color:#fff;
   }
   #mv .mv_content .mv_body{
      width:1200px;
      margin:0 auto;

   }
   #mv .mv_content .mv_body .mv_list{

   }
   #mv .mv_content .mv_body .mv_list .mv_list_item{
      width:300px;
      height:285px;
      margin-right:3.75px;
      float:left;
      box-sizing: border-box;
      position: relative;
   }
   #mv .mv_content .mv_body .mv_list .mv_list_item .play{
        display:none;
        width:67px;
        height:67px;
        position:absolute;
        left:115px;
        top:50px;
   }
   #mv .mv_content .mv_body .mv_list .mv_list_item:hover .play{
        display:block;
   }

   #mv .mv_content .mv_body .mv_list .mv_list_item:nth-child(4n){
       width:285px;
       height:285px;
       float:right;
   }
   #mv .mv_content .mv_body .mv_list .mv_list_item a{}
   #mv .mv_content .mv_body .mv_list .mv_list_item a>img{
      width:285px;
      height:161px;
   }
   #mv .mv_content .mv_body .mv_list .mv_list_item h3{
      color:#000;
      font-size:16px;
      font-weight:800;
      margin-top:10px;
   }
   #mv .mv_content .mv_body .mv_list .mv_list_item .author{
      color:#999;
      font-size:16px;
      margin-top:5px;
      margin-bottom:5px;
   }
   #mv .mv_content .mv_body .mv_list .mv_list_item .ctime{
      color:#999;
      font-size:16px;
   }
   #mv .mv_content .mv_body .mv_list .mv_list_item .mv_list__listen_icon{
     display: inline-block;
     width: 19px;
     height: 12px;
     background-position: -180px -20px;
     margin-right: 5px;
     vertical-align: -1px;
     background-image: url('https://y.gtimg.cn/mediastyle/yqq/img/icon_sprite.png?max_age=2592000&v=5fa916dafbaeb15e38e16da4cf0552fc');
   }
   #footer{
     width: 1200px;
     margin: 0 auto;
   }

   #footer>.btn{
     width: 180px;
     margin: 0 auto;
     display: flex;
     justify-content: space-between;
   }
   .btn>.pre{

     height: 40px;
     color: #999;
     border: none;
   }
   .btn>.next{

     height: 40px;
     color: #999;
     border: none;
   }

   .pre:hover{
     background-color: #31c27c;
     color: #fff;
   }
   .next:hover{
     background-color: #31c27c;
     color: #fff;
   }
   #footer>.btn>span{
     width: 50px;
     height: 40px;
     line-height: 40px;
     text-align: center;
   }
</style>
