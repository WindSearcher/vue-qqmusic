<template>
  <div>
    <div class="main">
      <div class="slide">
        <ul>
          <li>
            <a href="#" class="curTil slide_radio_cur" @click.prevent="redirectTo">热门</a>
          </li>
          <li>
            <a href="#" id="contentByTime" @click.prevent="redirectTo">下午</a>
          </li>
          <li>
            <a href="#" @click.prevent="redirectTo">心情</a>
          </li>
          <li>
            <a href="#" @click.prevent="redirectTo">主题</a>
          </li>
          <li>
            <a href="#" @click.prevent="redirectTo">场景</a>
          </li>
          <li>
            <a href="#" @click.prevent="redirectTo">曲风</a>
          </li>
          <li>
            <a href="#" @click.prevent="redirectTo">语言</a>
          </li>
          <li>
            <a href="#" @click.prevent="redirectTo">人群</a>
          </li>
          <li>
            <a href="#" @click.prevent="redirectTo">乐器</a>
          </li>
        </ul>
      </div>
      <div class="radio" id="radio">
        <div class="radio-item" v-for="item in content" :key="item.type">
          <div class="radio-tit" ref="refTil">
            <h3>{{item.radioType}}</h3>
          </div>
          <div class="radio-body">
            <ul>
              <li v-for="i in item.radioBody" :key="i.id">
                <div class="img-box">
                  <i class="cover" v-on:mouseover="setHover" v-on:mouseout="removeHover"></i>
                  <img :src="i.radioImg" class="music_icon" />
                  <div class="play">
                    <transition>
                      <img src="../assets/music_play.png" />
                    </transition>
                  </div>
                </div>
                <div class="text">
                  <a href="#" class="type_name">{{i.randioTitle}}</a>
                  <p>播放量:{{i.playTimes}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      content: [],
      scrollTop: [],
      slideA: [],
      map: null
    };
  },

  methods: {
    getContent: function() {
      this.$axios.get("http://localhost:3000/getradioContent").then(result => {
        this.content = result.data.radio;
      });
    },
    setHover(el) {
      //为图片添加mouseover事件
      el.target.style.opacity = 0.2;
      el.target.nextElementSibling.style.transform = "scale(1.1)";
      el.target.nextElementSibling.nextElementSibling.style.display = "block";
    },
    removeHover(el) {
      //移除mouseover事件
      el.target.style.opacity = 0;
      el.target.nextElementSibling.style.transform = "scale(1)";
      el.target.nextElementSibling.nextElementSibling.style.display = "none";
    },
    addCurClass(el) {
      el.className = "curTil slide_radio_cur";
    },
    removeCurClass(el) {
      for (var i = 0; i < el.length; i++) {
        el[i].className = "";
      }
    },
    getTop(el) {
      for (var i = 0; i < el.length; i++) {
        this.scrollTop.push(el[i].offsetTop);
      }
    },
    redirectTo(el) {
      //点击slide中的标签会跳转到相应的分类电台下面
      this.removeCurClass(this.slideA);
      this.addCurClass(el.target);
      this.map.forEach(function(element, i) {
        if (el.target === i) {
          window.scroll(0, element + 1);
        }
      });
    },
    toMap() {
      var map = new Map();
      for (var i = 0; i < 9; i++) {
        map.set(this.slideA[i], this.scrollTop[i]);
      }
      this.map = map;
    }
  },

  mounted() {
    //获取后台内容
    // this.getContent();
    //获取侧边栏中的a元素
    this.slideA = document.querySelectorAll(".slide>ul>li>a");

  },
  updated() {
    this.getContent();
    var vm = this;
    console.log(this.$refs.refTil);
    this.getTop(this.$refs.refTil);
    this.toMap();
    var scrollTop = this.scrollTop;
    var slideA = this.slideA;
    var slide = document.querySelector(".slide");
    window.addEventListener("scroll", function() {
      var top = document.documentElement.scrollTop;
      if (top < scrollTop[8]) slide.style.top = top + "px";
      if (top > scrollTop[0] - 1 && top < scrollTop[1]) {
        vm.removeCurClass(vm.slideA);
        vm.addCurClass(slideA[0]);
      } else if (top > scrollTop[1] && top < scrollTop[2]) {
        vm.removeCurClass(vm.slideA);
        vm.addCurClass(slideA[1]);
      } else if (top > scrollTop[2] && top < scrollTop[3]) {
        vm.removeCurClass(vm.slideA);
        vm.addCurClass(slideA[2]);
      } else if (top > scrollTop[3] && top < scrollTop[4]) {
        vm.removeCurClass(vm.slideA);
        vm.addCurClass(slideA[3]);
      } else if (top > scrollTop[4] && top < scrollTop[5]) {
        vm.removeCurClass(vm.slideA);
        vm.addCurClass(slideA[4]);
      } else if (top > scrollTop[5] && top < scrollTop[6]) {
        vm.removeCurClass(vm.slideA);
        vm.addCurClass(slideA[5]);
      } else if (top > scrollTop[6] && top < scrollTop[7]) {
        vm.removeCurClass(vm.slideA);
        vm.addCurClass(slideA[6]);
      } else if (top > scrollTop[7] && top < scrollTop[8]) {
        vm.removeCurClass(vm.slideA);
        vm.addCurClass(slideA[7]);
      } else {
        vm.removeCurClass(vm.slideA);
        vm.addCurClass(slideA[8]);
      }
    });
  }
};
</script>

<style scoped>
@import "../assets/public.css"
a {
  text-decoration: none;
  color: #214;
}
a:hover {
  color: #31c27c;
  text-decoration: none;
}
.main {
  margin: 0 auto;
  width: 1200px;
  position: relative;
  /* border: 1px solid #000; */
}
.slide {
  position: absolute;
  width: 150px;
  left: -50px;
  background: url("../assets/radio_sidebar.png") 0 0 no-repeat;
}
.slide > ul > li {
  /* border: 1px solid #000; */
  line-height: 59px;
  text-align: center;
}
.slide > ul > li > a {
  position: relative;
  /* border: 1px solid #000; */
}
.slide_radio_cur::after {
  content: "";
  position: absolute;
  display: inline-block;
  width: 40px;
  height: 2px;
  background-color: #31c27c;
  left: -59px;
  top: 50%;
}
.curTil {
  color: #31c27c;
}
.radio {
  margin-top: 58px;
  margin-left: 250px;
  width: 950px;
  box-sizing: border-box;
  position: relative;
}
.radio-tit {
  position: relative;
}
.radio-tit > h3 {
  font-size: 16px;
  color: #ccc;
}
.radio-tit > h3::after {
  content: "";
  position: absolute;
  height: 1px;
  overflow: hidden;
  left: 50px;
  right: 0;
  top: 10px;
  background-color: #ececec;
}
.radio-body {
  margin-top: 30px;
}
.radio-body > ul {
  display: flex;
  flex-wrap: wrap;
}
.radio-body li {
  width: 25%;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.img-box {
  width: 215px;
  height: 215px;
  position: relative;
  overflow: hidden;
}
.music_icon {
  width: 215px;
  height: 215px;
  transition: all 0.4s;
}
.img-box .play {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition: all 0.4s;
  display: none;
}

.text {
  padding-top: 15px;
}
.text > a {
  display: inline-block;
}

.text > p {
  color: #aaa;
}
.cover {
  position: absolute;
  opacity: 0;
  display: inline-block;
  left: 0;
  top: 0;
  width: 215px;
  height: 215px;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
