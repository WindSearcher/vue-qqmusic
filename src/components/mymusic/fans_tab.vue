<template>
  <div>
    <!-- 没有粉丝的时候显示 -->
    <div class="none_txt">
      <img
        src="https://y.gtimg.cn/mediastyle/yqq/img/symbol_none@2x.png?max_age=2592000&v=056e33119d5748360c67d7f5a33e25a0&v=056e33119d5748360c67d7f5a33e25a0&v=ad9d25f33c9d3141fb8256229efa8e25"
        class="none_txt__symbol"
      />
      <p>还没有粉丝...</p>
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
  name: "FansTab",
  data() {
    return {
      userPoint: {}
    };
  }
};
</script>
<style scoped>
@import "../../assets/mymusic-icon/iconfont.css";
@import "../../assets/mymusic-css/focus.css";
@import "../../assets/mymusic-css/mymusic.css";
</style>

