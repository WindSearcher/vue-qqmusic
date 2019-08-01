<template>
  <div class="wrap_footer">
    <div class="footer_body">
      <div class="download">
        <p>下载QQ音乐客户端</p>
        <ul>
          <li>
            <a href="#">
              <i class="pc"></i>
              <p>PC版</p>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="mac"></i>
              <p>Mac版</p>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="android"></i>
              <p>Android版</p>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="iPhone"></i>
              <p>iPhone版</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="special">
        <p>特色产品</p>
        <ul>
          <li>
            <a href="#">
              <i class="kSong"></i>
              <p>全民K歌</p>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="sSong"></i>
              <p>Super Sound</p>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="QPlay"></i>
              <p>QPlay</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>车载互联</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>QQ演出</p>
            </a>
          </li>
        </ul>
      </div>
      <div v-for="item in fcontent" :key="item.type">
        <p>{{item.title}}</p>
        <ul>
          <li v-for="i in item.content" :key="i.id">
            <a href="#">{{i.itemContent}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="about">
      <p>
        <a href="#">关于腾讯</a> |
        <a href="#">About Tencent</a> |
        <a href="#">服务条款</a> |
        <a href="#">用户服务协议</a> |
        <a href="#">隐私政策</a> |
        <a href="#">权利声明</a> |
        <a href="#">广告服务</a> |
        <a href="#">腾讯招聘</a> |
        <a href="#">客服中心</a> |
        <a href="#">网站导航</a>
      </p>

      <p>
        Copyright © 1998 - 2019 Tencent.
        <a href="#">All Rights Reserved.</a>
      </p>

      <p>
        <span>腾讯公司</span>
        <a href="#"> 版权所有 </a>
        <a href="#">腾讯网络文化经营许可证 </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fcontent: []
    };
  },
  methods: {
    getInfo: function() {
      this.$axios.get("http://localhost:3000/getfooterContent").then(result => {
        this.fcontent = result.data.footer;
      });
    }
  },
  created() {},
  mounted() {
    this.getInfo();
  },
  updated() {
  }
};
</script>

<style  scoped>
a {
  color: #999;
}
a:hover {
  color: #31c27c;
  text-decoration: none;
}
p,
ul,
div {
  margin: 0;
  padding: 0;
}
.wrap_footer {
  background-color: #353535;
  color: #999;
}
.footer_body {
  padding-top: 80px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.footer_body > div {
  margin-bottom: 40px;
  width: 33.3%;
}
.footer_body ul {
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
}

.footer_body > .download > ul > li {
  width: 25%;
  text-align: left;
}
.footer_body > .special > ul > li {
  width: 33.3%;
  text-align: left;
  margin-bottom: 20px;
}
.footer_body > div > ul > li {
  width: 33.3%;
  margin-bottom: 8px;
}
i {
  display: block;
  width: 37px;
  height: 48px;
  background-image: url("../../assets/footer_img.png");
}
a:hover .pc {
  background-position: -2px -49px;
}
.pc {
  background-position: -2px 0;
}
a:hover .mac {
  background-position: -92px -49px;
}
.mac {
  width: 46px;
  background-position: -92px 0;
}
a:hover .android {
  background-position: -190px -49px;
}
.android {
  margin: 0 15px 0;
  background-position: -190px 0;
}
a:hover .iPhone {
  background-position: -279px -49px;
}
.iPhone {
  margin: 0 15px 0;
  background-position: -279px 0;
}
a:hover .kSong {
  background-position: -370px -49px;
}
.kSong {
  margin: 0 5px 0;
  width: 41px;
  background-position: -370px 0;
}
a:hover .sSong {
  background-position: -463px -49px;
}
.sSong {
  margin: 0 25px 0;
  background-position: -463px 0;
}
a:hover .QPlay {
  background-position: -563px -49px;
}
.QPlay {
  width: 40px;
  background-position: -563px 0;
}
.about {
  text-align: center;
  font-size: 12px;
  padding-bottom: 20px;
}
.about > p {
  line-height: 30px;
}
</style>
