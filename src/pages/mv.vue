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
                          <img src="../assets/images/play.png" class="play">
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
@import "../assets/mv/mv.css";
</style>
