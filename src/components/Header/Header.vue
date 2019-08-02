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

        <img src="../../assets/images/search.png" />
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
    //失去焦点隐藏搜索结果
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

    //关键字搜索歌曲
    searchList() {
      var that = this;
      console.log(that.searchVal);
      let url = `http://localhost:3000/search/suggest?keywords=`+that.searchVal;
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
@import "../../assets/Header/Header.css";
</style>
