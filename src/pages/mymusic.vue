<template>
  <!-- 注释：这是我的音乐页面，需要判断是否登录，如果登录则通过用户的UID获取数据
   1、-->
  <div class="mymusic">
    <div v-show="islogin">
      <MyMusicProfile ref='mmp'></MymusicProfile>
      <div class="main main--profile">
        <div class="mod_tab profile_nav" role="nav" id="nav">
          <router-link to="/mymusic/mycreate_tab">
            <a @click="view_status_0=true,view_status_1=false,view_status_2=false,view_status_3=false" class="mod_tab__item" :class="{mod_tab__current:view_status_0}" href="javascript:;" id="create_tab">我创建的歌单</a>
          </router-link>
          <router-link to="/mymusic/focus_tab">
            <a @click="view_status_0=false,view_status_1=true,view_status_2=false,view_status_3=false" class="mod_tab__item" :class="{mod_tab__current:view_status_1}"  href="javascript:;" id="focus_tab">关注</a>
          </router-link>
          <router-link to="/mymusic/fans_tab">
            <a @click="view_status_0=false,view_status_1=false,view_status_2=true,view_status_3=false" class="mod_tab__item" :class="{mod_tab__current:view_status_2}" href="javascript:;" id="fans_tab">粉丝</a>
          </router-link>
          <router-link to="/mymusic/mylike_tab">
            <a @click="view_status_0=false,view_status_1=false,view_status_2=false,view_status_3=true" class="mod_tab__item" :class="{mod_tab__current:view_status_3}" href="javascript:;" id="uploadmv_tab">我喜欢</a>
          </router-link>
        </div>
        <MyCreateTab v-show="view_status_0" ref="mct" :userPoint='userPoint'></MyCreateTab>
        <FocusTab v-show="view_status_1" :userPoint='userPoint'></FocusTab>
        <FansTab v-show="view_status_2" :userPoint='userPoint'></FansTab>
        <UpLoadMvTab v-show="view_status_3" :userPoint_1='userPoint'></UpLoadMvTab>
        <router-view></router-view>
      </div>
    </div>
    <!-- 未登录显示 -->
    <!-- iuiuhiuhui -->
    <div class="mod_profile_unlogin" v-show="!islogin">
      <h2 class="profile_unlogin__tit">
        私人音乐空间，听我喜欢听的歌
      </h2>
      <div class="profile_unlogin__desc">
        登录管理我的音乐，多终端同步
      </div>
      <a
        href="javascript:void(0);"
        class="mod_btn_green profile_unlogin__btn"
      >立即登录</a>
    </div>
  </div>
</template>
<script>
  import MyMusicProfile from '@/components/mymusic/mymusic_profile'
  import MyCreateTab from '@/components/mymusic/mycreate_tab'
  import FocusTab from '@/components/mymusic/focus_tab'
  import FansTab from '@/components/mymusic/fans_tab'
  import UpLoadMvTab from '@/components/mymusic/uploadmv_tab'
  export default {
    name: "mymusic",
    components:{
      FansTab,
      MyCreateTab,
      MyMusicProfile,
      FocusTab,
      UpLoadMvTab
    },
    data() {
      return {
        //用户基础信息
        userPoint:{},
        //登录状态
        islogin:true,
        //当前应该显示的组件
        view_status_0:true,
        view_status_1:false,
        view_status_2:false,
        view_status_3:false

      }
    },
    methods: {
    },
    created() {
      //登录用户

      this.$axios.get('http://localhost:3000/login/cellphone?phone=18707950895&password=longchao700108').then((result) => {
        console.log(result.data)
      }).catch((err) => {
        console.log(err)
      });//////
      //如果登录，则传入UID获取信息，否则显示未登录
      this.$axios.get('http://localhost:3000/user/detail?uid=504411824').then((result) => {
        this.userPoint = result.data.userPoint
        this.$refs.mmp.profile = result.data.profile
      }).catch((err) => {
        console.log(err)
      });
    },
  };
</script>

<style scoped>
  @import '../assets/mymusic-css/mymusic.css';
  .mod_profile_unlogin {
    height: 622px;
    background: url('../assets/images/bg_profile_unlogin.jpg') 50% no-repeat;
    background-size: cover;
    min-width: 1200px;;
    overflow: hidden;
  }
</style>
