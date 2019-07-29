<template>
    <div class="mod_header">
      <div class="header_nav">
         <h1 class="qqmusic_title">
            <a href="//y.qq.com">
              <img srcset="//y.gtimg.cn/mediastyle/yqq/img/logo@2x.png?nowebp=1 2x" src="//y.gtimg.cn/mediastyle/yqq/img/logo.png?nowebp=1" alt="QQ音乐" class="qqmusic_logo">
            </a>
         </h1>
         <ul class="mod_top_nav">
            <li class="top_nav_item on">音乐馆</li>
            <li class="top_nav_item">我的音乐</li>
            <li class="top_nav_item">客户端</li>
            <li class="top_nav_item">音乐号</li>
            <li class="top_nav_item">VIP</li>
         </ul>
         <div class="mod_top_search">
             <input type="text" placeholder="搜索音乐、MV、歌单、用户">
             <img src="../../assets/search.png">
         </div>
          <div class="header_opt">
              <a href="#">登录</a>
              <a href="#">开通绿钻豪华版</a>
              <a href="#">开通付费包</a>
          </div>
      </div>
      <!--用来路由跳转-->
      <div class="mod_top_subnav">
          <ul>
            <li><a href="/index">首页</a></li>
            <li><a href="">歌手</a></li>
            <li><a href="">新碟</a></li>
            <li><a href="">排行榜</a></li>
            <li><a href="">分类歌单</a></li>
            <li><a href="">MV</a></li>
            <li><a href="">电台</a></li>
            <li><a href="">数字专辑</a></li>
            <li><a href="">票务</a></li>
          </ul>
       </div>
    </div>
</template>

<script>
    export default {
        name: "mod_header"
    }

</script>

<style scoped>
   ul,li,p,body{margin:0;padding:0;}
   ul{list-style:none;}
   a{text-decoration: none;}
   .mod_header{
     background-color: #fff;
     position: relative;
     width:100%;
     height:100px;
     box-sizing: border-box;
     /*z-index: 4;*/
   }
   .qqmusic_title{
     position: absolute;
     left: 198px;
     top: 18px;
   }

   h1{font-size: 100%;}

   .mod_top_nav {
     position: absolute;
     left: 450px;
     top: 0;
   }

   .top_nav_item {
     position: relative;
     float: left;
     margin-right: -5px;
     padding: 0 20px;
     line-height: 90px;
     height: 90px;
     text-align: center;
     font-size: 18px;
   }

   .top_nav_item:hover{
     color: #31c27c;
   }

   .mod_top_nav .on{
     background-color: #31c27c;
     color: #fff;
  }

   .mod_top_search{
     border: 1px solid #c9c9c9;
     padding: 0 33px 0 11px;
     line-height: 36px;
     height: 36px;
     border-radius: 3px;
     position:relative;
     left:950px;
     top:20px;
     width:174px;
   }
   .mod_top_search input{
     border:none;
     width: 174px;
     height: 33px;
     font-size: 14px;
   }
   .mod_top_search input:focus{
     outline:0;
   }
   .mod_top_search img{
     position: absolute;
     top: 0;
     right: 0;
     border: 0 none;
     width: 33px;
     height: 33px;
     overflow: visible;
     background: 0 0;
   }

   .mod_header .header_opt{
     padding: 0 33px 0 11px;
     line-height: 36px;
     height: 36px;
     position:absolute;
     right:150px;
     top:20px;
   }

   .mod_header .header_opt a:first-child{
     font-size: 16px;
     float: left;
     width: 38px;
     margin-right: 15px;
     text-align: center;
     color:#000;
   }

   .mod_header .header_opt a:nth-child(2){
     background-color: #31c27c;
     display:inline-block;
     height:38px;
     color:#fff;
     font-size: 13px;
     box-sizing: border-box;
     padding:0 5px;
     text-align: center;
     line-height:38px;
     margin-right:10px;
   }

   .mod_header .header_opt a:nth-child(3){
     display:inline-block;
     height:38px;
     color:#000;
     font-size: 13px;
     box-sizing: border-box;
     padding:0 5px;
     text-align: center;
     line-height:38px;
     border:1px solid #ccc;
   }

   .mod_header .mod_top_subnav{
        position:absolute;
        top:110px;
        left:500px;
   }
   .mod_header .mod_top_subnav>ul{
        height:50px;
   }
   .mod_header .mod_top_subnav li{
       float:left;
       margin-right:50px;
   }

   .mod_header .mod_top_subnav li>a:hover{
       color:#31c27c;
   }

   .mod_header .mod_top_subnav li>a{
       text-align:center;
       line-height:50px;
   }

</style>
