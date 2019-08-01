<template>
  <div class="focus">
    <!-- 选择显示关注的歌手还是普通用户 -->
    <div class="mod_tab" role="nav">
      <a
        class="mod_tab__item"
        :class="{mod_tab__current:focustype}"
        href="javascript:;"
        @click="focustype=true"
      >歌手</a>
      <a
        class="mod_tab__item"
        :class="{mod_tab__current:!focustype}"
        href="javascript:;"
        @click="focustype=false"
      >用户</a>
      <a
        v-show="focustype"
        href="javascript:;"
        class="mod_btn btn_focus_fan"
        style="display: block;"
      >
        <i class="iconfont iconmui-icon-add"></i>&nbsp;关注更多歌手
      </a>
    </div>

    <!-- 没有关注内容的时候显示 -->
    <div class="none_txt">
      <img 
      src='https://y.gtimg.cn/mediastyle/yqq/img/symbol_none@2x.png?max_age=2592000&v=056e33119d5748360c67d7f5a33e25a0&v=056e33119d5748360c67d7f5a33e25a0&v=ad9d25f33c9d3141fb8256229efa8e25' 
      class="none_txt__symbol" />
      <p v-show="!focustype">没有关注任何用户...</p>
      <p v-show="focustype">
        什么也没有，去看看
        <a href="/portal/singer_list.html">热门歌手</a>！
      </p>
    </div>
    <!-- 底部获取更多内容部分 -->
        <div v-show="false" class="client_guide" id="limitButton">
             <p class="client_guide__txt">查看更多内容，请下载客户端</p>
             <a href="javascript:void(0);" class="client_guide__btn js_limitButton">立即下载</a>
        </div>
  </div>
</template>
<script>
export default {
  name: "FocusTab",
  data() {
    return {
      userPoint: {},
      //显示关注的歌手还是普通用户
      focustype: true
      //显示
    };
  }
};
</script>
<style scoped>
@import "../../assets/mymusic-icon/iconfont.css";
@import "../../assets/mymusic-css/focus.css";
@import "../../assets/mymusic-css/mymusic.css";
</style>