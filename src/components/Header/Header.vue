<template>
  <div class="mod_header">
    <div class="header_nav">
      <h1 class="qqmusic_title">
        <a href="//y.qq.com">
          <img
            srcset="//y.gtimg.cn/mediastyle/yqq/img/logo@2x.png?nowebp=1 2x"
            src="//y.gtimg.cn/mediastyle/yqq/img/logo.png?nowebp=1"
            alt="QQ音乐"
            class="qqmusic_logo"
          />
        </a>
      </h1>
      <ul class="mod_top_nav">
        <li class="top_nav_item" @click="isview=true" :class="{on:isview}"><router-link to="/index">音乐馆</router-link></li>
        <li class="top_nav_item" @click="isview=false" :class="{on:!isview}">
          <router-link to="/mymusic">我的音乐</router-link>
        </li>
        <li class="top_nav_item">客户端</li>
        <li class="top_nav_item">音乐号</li>
        <li class="top_nav_item">VIP</li>
      </ul>
      <div class="mod_top_search">
        <input type="text" placeholder="搜索音乐、MV、歌单、用户" @keyup="searchList" v-model="searchVal" @click="hotSearch" @blur="hidden"/>
        <ul class="list-module" v-if="isTrue">
          <li v-for="(item,index) in hotList" @click="appClick(item)" :key="index">
             <span class="list-item-text">{{item.first}}</span>
          </li>
        </ul>

        <img src="../../assets/search.png" />
      </div>
      <div class="header_opt">
        <a href="#">登录</a>
        <a href="#">开通绿钻豪华版</a>
        <a href="#">开通付费包</a>
      </div>
    </div>
    <!--用来路由跳转-->
    <div v-show="isview" class="mod_top_subnav">
      <ul>
        <li>
          <a href="#/index">首页</a>
        </li>
        <li>
          <a href>歌手</a>
        </li>
        <li>
          <a href="#/newsong">新碟</a>
        </li>
        <li>
          <a href>排行榜</a>
        </li>
        <li>
          <a href>分类歌单</a>
        </li>
        <li>
          <a href="#/mv">MV</a>
        </li>
        <li>
          <a href="#/radioStation">电台</a>
        </li>
        <li>
          <a href>数字专辑</a>
        </li>
        <li>
          <a href>票务</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "mod_header",
  data() {
    return {
      searchVal: "",
      isview:true,
      hotList:[],
      isTrue:false
    };
  },
  methods: {
    hidden(){
        this.isTrue = false;
    },
    hotSearch(){
      var that = this;
      this.isTrue = true;
      this.$axios({
        method: "get", //指定请求方式
        url:'http://localhost:3000/search/hot?limit=5' //请求接口（相对接口，后面会介绍到）
      })
        .then(function(res) {
          //接口成功返回结果执行
          console.log(res.data.result.hots);
          that.hotList = res.data.result.hots;
        })
        .catch(function(err) {
          //请求失败或者接口返回失败或者.then()中的代码发生错误时执行
        });
    },
    searchList() {
      var that = this;
      console.log(that.searchVal);
      let url = `http://localhost:3000/search/suggest?keywords=123`;
      //that.searchVal
      this.$axios({
        method: "get", //指定请求方式
        url: url //请求接口（相对接口，后面会介绍到）
      })
        .then(function(res) {
            console.log(res.data.result);

            that.hotList = [];
            for(let i = 0;i < res.data.result.songs.length;++i){
                let item = {};
                item.first = res.data.result.songs[i].name+"    "+res.data.result.songs[i].artists[0].name;
                that.hotList.push(item);
            }
        })
        .catch(function(err) {
          //请求失败或者接口返回失败或者.then()中的代码发生错误时执行
        });
    }
  }
};
</script>

<style scoped>
ul,
li,
p,
body {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
.mod_header {
  background-color: #fff;
  position: relative;
  box-sizing: border-box;
  /*z-index: 4;*/
}
.header_nav {
  width: 1200px;
  height: 80px;
  box-sizing: border-box;
  margin: 0 auto;
}
.qqmusic_title {
  float: left;
  margin-top: 20px;
  margin-right: 30px;
  width: 150px;
  /* height: 46px; */
}

h1 {
  font-size: 100%;
}

.mod_top_nav {
}

.top_nav_item {
  position: relative;
  float: left;
  margin-right: -5px;
  padding: 0 20px;
  line-height: 80px;
  width: 70px;
  height: 80px;
  text-align: center;
  font-size: 16px;
}
.top_nav_item a{
  color: #000;
}
.top_nav_item:hover {
  color: #31c27c;
}
.mod_top_nav .on a{
    color: #fff;

}
.mod_top_nav .on {
  background-color: #31c27c;
  color: #fff;
}
.mod_top_nav .on a:hover{
  color: #fff;
}
.mod_top_search {
  border: 1px solid #c9c9c9;
  padding: 0 33px 0 11px;
  line-height: 36px;
  height: 36px;
  border-radius: 3px;
  position: relative;
  float: left;
  width: 150px;
  margin-top: 23px;
  margin-right: 10px;

}

.mod_top_search .list-module{
   width: 194px;
   background-color:#fff;
   border:1px solid #c9c9c9;
   position:absolute;
   left:0;
   top:36px;
   z-index:2;
}

.mod_top_search .list-module>li{
   width:150px;
   height:36px;
   line-height:36px;
   font-size:14px;
   cursor:pointer;
}

.mod_top_search input {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: none;
  width: 174px;
  height: 33px;
  font-size: 14px;
}
.mod_top_search input:focus {
  outline: 0;
}
.mod_top_search img {
  position: absolute;
  top: 5px;
  right: 0;
  border: 0 none;
  width: 25px;
  height: 25px;
  overflow: visible;
  background: 0 0;
}

.mod_header .header_opt {
  padding: 0 0 0 11px;
  line-height: 36px;
  height: 36px;
  width: 263px;
  float: left;
  margin-top: 20px;
  margin-left: 10px;
}

.mod_header .header_opt a:first-child {
  font-size: 16px;
  float: left;
  width: 38px;
  margin-right: 15px;
  text-align: center;
  color: #000;
}

.mod_header .header_opt a:nth-child(2) {
  background-color: #31c27c;
  display: inline-block;
  height: 38px;
  color: #fff;
  font-size: 13px;
  box-sizing: border-box;
  padding: 0 5px;
  text-align: center;
  line-height: 38px;
  margin-right: 10px;
}

.mod_header .header_opt a:nth-child(3) {
  display: inline-block;
  height: 38px;
  color: #000;
  font-size: 13px;
  box-sizing: border-box;
  padding: 0 5px;
  text-align: center;
  line-height: 38px;
  border: 1px solid #ccc;
}

.mod_header .mod_top_subnav {
  width: 1200px;
  margin: 0 auto;
}
.mod_header .mod_top_subnav > ul {
  height: 30px;
  width: 800px;
  margin: 0 auto;
}
.mod_header .mod_top_subnav li {
  float: left;
  width: 75px;
  margin-right: 10px;
  margin-top: 25px;
  box-sizing: border-box;
}

.mod_header .mod_top_subnav li > a:hover {
  color: #31c27c;
}

.mod_header .mod_top_subnav li > a {
  text-align: center;
  line-height: 50px;
  color: #000;
  font-size: 16px;
}
</style>
