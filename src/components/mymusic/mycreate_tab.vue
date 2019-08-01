<template>
  <div class="profile_cont" id="create_box">
    <div class="playlist_toolbar">
      <!-- 按钮--分别为新建歌单（可实现该功能）\导入歌单\恢复歌单 -->
      <button class="mod_btn" @click="addplaylist = true">
        <i class="iconfont iconmui-icon-add"></i>&nbsp;新建歌单
      </button>
      <button class="mod_btn" @click="youaresb">
        <i class="iconfont icondaoru"></i>&nbsp;导入歌单
      </button>
      <button class="mod_btn" @click="youaresb">
        <i class="iconfont iconhuifu"></i>&nbsp;恢复歌单
      </button>

      <!-- 选择歌单排列的方式 -->
      <div class="style_switch">
        <a
          href="javascript:void(0);"
          :class="[{style_switch__item__select:style_switch.switch_main},'style_switch__item']"
          title="上图下文"
          @click="toStyleMain"
        >
          <i class="iconfont icongengduo"></i>
        </a>
        <a
          href="javascript:void(0);"
          :class="[{style_switch__item__select:style_switch.switch_list},'style_switch__item']"
          title="列表"
          @click="toStyleList"
        >
          <i class="iconfont iconlistpress"></i>
        </a>
      </div>
    </div>
    <!-- 根据上面的按钮确定显示的方式 -->
    <div class="mod_playlist_text mine" v-show="style_switch.switch_list">
      <!-- 播放列表 -->
      <ul class="playlist__header">
        <li class="playlist__header_name">歌单</li>
        <li class="playlist__header_number">曲目数</li>
        <li class="playlist__header_other">收听</li>
      </ul>
      <!-- 歌单列表 -->
      <ul class="playlist__list">
        <li v-for="item in playlist" :key="item.id" class="playlist__item">
          <div class="playlist__mask" @mouseover.self="listOver($event)"></div>
          <div class="playlist__cover">
            <a href="javascript:void(0)">
              <img :src="item.coverImgUrl" :alt="item.name" class="playlist__pic" />
            </a>
          </div>
          <h4 class="playlist__title">
            <span class="playlist__title_txt">
              <a href="javascript:void(0)" :title="item.alt">{{item.name}}</a>
            </span>
          </h4>
          <div class="mod_list_menu" style="display:none;">
            <a @click="youaresb" href="javascript:void(0);" title="播放">
              <i class="iconfont icontubiao-"></i>
            </a>
            <a @click="youaresb" href="javascript:void(0);" title="添加到歌单">
              <i class="iconfont iconbuoumaotubiao11"></i>
            </a>
            <a @click="youaresb" href="javascript:void(0);" title="下载">
              <i class="iconfont iconxiazai"></i>
            </a>
            <a @click="youaresb" href="javascript:void(0);" title="分享">
              <i class="iconfont iconfenxiang"></i>
            </a>
          </div>
          <div class="playlist__number">{{item.trackCount + '首'}}</div>
          <a
            @click="youaresb"
            href="javascript:void(0);"
            class="playlist__delete"
            style="display:none;"
          >
            <i class="iconfont iconshanchu"></i>
          </a>
        </li>
      </ul>
    </div>
    <!-- 列表显示歌单方式 -->
    <div class="mod_playlist" v-show="style_switch.switch_main">
      <ul class="playlist__list">
        <li v-for="item in playlist" :key="item.id" class="playlist__item" @click="youaresb">
          <div class="playlist__item_box">
            <div class="playlist__cover mod_cover">
              <a href="javascript:void(0)">
                <div class="biubiubiu">
                  <img :src="item.coverImgUrl" :alt="item.name" class="playlist__pic" />
                  <div class="playlist__mask__main"></div>
                  <div class="playlist__play">
                    <img src="../../assets/mymusic-css/music_play.png" />
                  </div>
                </div>
              </a>
            </div>
            <h4 class="playlist__title">
              <span class="playlist__title_txt">
                <a href="javascript:void(0)" class="js_playlist" :title="item.name">{{item.name}}</a>
              </span>
            </h4>
            <div class="playlist__author">
              <a>{{item.creator.nickname}}</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 底部获取更多内容部分 -->
    <div class="client_guide" id="limitButton">
      <p class="client_guide__txt">查看更多内容，请下载客户端</p>
      <a href="javascript:void(0);" class="client_guide__btn js_limitButton">立即下载</a>
    </div>
    <div @mousewheel.prevent @scroll.prevent>
      <!-- 创建歌单时信息提示 -->
      <div class="mod_popup_tips" id="popup" v-show="havetips">
        <i class="iconfont icongantanhao"></i>
        <h2 class="popup_tips__tit">{{msg}}</h2>
      </div>
      <!-- 新建歌单显示阴影 -->
      <div class="mod_popup_mask" v-show="addplaylist"></div>
      <!-- 新建歌单弹框 -->
      <div id="popup_new_list" class="mod_popup popup_new_list" v-show="addplaylist">
        <div class="popup__hd">
          <h2 class="popup__tit">创建新歌单</h2>
          <a href="javascript:void(0);" class="popup__close" title="关闭" @click="closeadd">
            <i class="iconfont iconmui-icon-add"></i>
          </a>
        </div>
        <div class="popup__bd" id="dialogbox">
          <label class="form__label">歌单名</label>
          <div class="mod_form_txt">
            <input v-model="listName" type="text" class="form_txt__input" />
            <span class="form_txt__tips" id="name_leftnum">{{sycd}}</span>
          </div>
        </div>
        <div class="popup__ft">
          <button class="mod_btn_green upload_btns__item" @click="comfirmadd">确定</button>
          <button class="mod_btn upload_btns__item" @click="closeadd">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyCreateTab",
  props: {
    userPoint: {} //获取用户信息-->this.axios获取歌单信息
  },
  watch: {
    userPoint: {
      handler(newVal, oldVal) {
        console.log(newVal);
        this.$axios
          .get("http://localhost:3000/user/playlist?uid=" + newVal.userId)
          .then(result => {
            this.playlist = result.data.playlist;
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
      // 提供切换显示方式标志
      style_switch: {
        switch_list: true,
        switch_main: false
      },
      //歌单列表
      playlist: [],
      //用于新建歌单操作的标志
      addplaylist: false,
      //新建歌单名称
      listName: "",
      msg: "", //状态框提示信息,
      havetips: false //是否有提示
    };
  },
  computed: {
    sycd: function() {
      return 20 - this.listName.length;
    }
  },
  methods: {
    //添加新歌单弹框方法
    youaresb() {
      this.msg = "本功能暂未开放";
      this.havetips = true;
      var that = this;
      setTimeout(function() {
        that.havetips = false;
      }, 2000);
    },
    //关闭弹框
    closeadd() {
      this.listName = ""; //歌单名清空
      this.addplaylist = false;
    },
    //点击确认事件1、可以提交，2、超过内容限制
    comfirmadd() {
      if (this.listName.length <= 20 && this.listName.length > 0) {
        this.msg = "新建歌单成功！";
        this.addplaylist = false;
        this.$axios({
          method: "get",
          withCredentials: true,
          url: "http://localhost:3000/playlist/create?name=" + this.listName
        });
      } else if (this.listName.length <= 0) {
        this.msg = "请输入歌单名！";
      } else {
        this.msg = "请输入20字以内的歌单名！";
      }
      this.havetips = true;
      var that = this;
      setTimeout(function() {
        that.havetips = false;
      }, 2000);
      this.listName = "";
    },

    //切换显示方式
    toStyleList() {
      this.style_switch.switch_list = true;
      this.style_switch.switch_main = false;
      console.log(1);
    },
    toStyleMain() {
      this.style_switch.switch_list = false;
      this.style_switch.switch_main = true;
      console.log(2);
    },
    //鼠标移动显示小图标
    listOver(e) {
      var playlistMenu = document.querySelectorAll(
        ".mine .playlist__item .mod_list_menu"
      );
      var playlistDelete = document.querySelectorAll(
        ".mine .playlist__item .playlist__delete"
      );
      for (let index = 0; index < playlistMenu.length; index++) {
        playlistMenu[index].style.display = "none";
        playlistDelete[index].style.display = "none";
      }
      e.target.parentElement.children[3].style.display = "flex";
      e.target.parentElement.children[3].style.zIndex = "521";
      e.target.parentElement.children[5].style.zIndex = "521";
      e.target.parentElement.children[5].style.display = "block";
    }
  }
};
</script>
<style scoped>
@import "../../assets/mymusic-icon/iconfont.css";
@import "../../assets/mymusic-css/mycreate.css";
@import "../../assets/mymusic-css/mymusic.css";
</style>

