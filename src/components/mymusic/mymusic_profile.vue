<template>
  <div class="mod_profile js_user_data" :style="{backgroundImage:'url(' + profile.backgroundUrl + ')'}">
    <div class="section_inner">
      <div class="profile__cover_link">
        <img
          :src="profile.avatarUrl"
          alt="不负初心"
          class="profile__cover"
          id="profileHead"
        />
      </div>
      <h1 class="profile__tit">
        <span class="profile__name">{{profile.nickname}}</span>
      </h1>
      <ul class="mod_user_statistic">
        <li class="user_statistic__item">
          <a
            href="javascript:void(0);"
            class="js_tab"
            data-tab="focus_singer"
            data-stat="y_new.profile.header.focus_click"
          >
            <strong class="user_statistic__number js_num_follow">{{profile.follows}}</strong>
            <span class="user_statistic__tit">关注</span>
          </a>
        </li>
        <li class="user_statistic__item user_statistic__item--last">
          <a
            href="javascript:;"
            class="js_tab"
            data-tab="fans"
            data-stat="y_new.profile.header.fans_click"
          >
            <strong class="user_statistic__number js_num_fans">{{profile.followeds}}</strong>
            <span class="user_statistic__tit">粉丝</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyMusicProfile",
  data() {
    return {
      //用户基础信息
      profile: {},
    };
  },
  methods: {},
  mounted() {
  }
};
</script>
<style scope>
@import '../../assets/mymusic-css/profile.css'
</style>
