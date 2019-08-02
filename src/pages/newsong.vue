<template >
    <div id="newsong">
      <div id="nav">
        <div  class="navlist">
          <a href="#" class="navlistitem  " @click.prevent="aclick('0')"  v-bind:class={nlisel:a[0]}>内地</a>
          <a href="#" class="navlistitem" @click.prevent="aclick('2')"  v-bind:class={nlisel:a[2]}>港台</a>
          <a href="#" class="navlistitem" @click.prevent="aclick('3')"  v-bind:class={nlisel:a[3]}>欧美</a>
          <a href="#" class="navlistitem"  @click.prevent="aclick('4')"  v-bind:class={nlisel:a[4]}>韩国</a>
          <a href="#" class="navlistitem"  @click.prevent="aclick('5')"  v-bind:class={nlisel:a[5]}>日本</a>
           <a href="#" class="navlistitem"   @click.prevent="aclick('1')"  v-bind:class={nlisel:a[1]}>其他</a>
        </div>

      </div>
      <div id="wrap">
        <div class="songlist">
          <ul >
            <li class="item" v-for="item in list" :key="item.id">
              <div  class="itemimg" >
                <a href="#">
                  <img :src= "item.al.picUrl"   alt="" class="cover">

                  <img src="../assets/images/play.png" alt="" class="play">
                </a>


              </div>
              <h4 class="itemtitle">
                  <a href="#"> {{ item.name}}</a>
              </h4>
              <div class="itemauthor">
                  <a href="#">{{ item.ar[0].name}}</a>
              </div>
              <div class="itemtime">
                {{ getNowTime() }}
              </div>
            </li>


          </ul>


        </div>



      </div>

      <div id="footer">
        <div class="btn">
           <button class="pre" @click="pre">上一页  </button>
           <span> {{index+1}}/{{allpage}}</span>
          <button class="next"  @click="next">下一页 </button>
        </div>

      </div>



    </div>
</template>



<script>
export default {
  name: 'newsong',
  data () {
    return {

      list:[],
      area:0,
      allpage:0,

      a:[1,0,0,0,0,0],
      index:0,



    }

  },
  methods: {
      aclick:function(i){
        this.a=[0,0,0,0,0,0];
        this.a[i]=1;
        if(i==0){
          this.index=0;
          this.area=0;
          this.getNewMusicList(this.index,this.area);
        }
        if(i==1){
          this.index=0;
           this.area=1;
          this.getNewMusicList(this.index,this.area);
        }
        if(i==2){
          this.index=0;
          this.area=14;
          this.getNewMusicList(this.index,this.area);
        }
        if(i==3){
          this.index=0;
          this.area=6;
          this.getNewMusicList(this.index,this.area);
        }
        if(i==4){
          this.index=0;
          this.area=11;
          this.getNewMusicList(this.index,this.area);
        }
         if(i==5){
          this.index=0;
          this.area=10;
          this.getNewMusicList(this.index,this.area);
        }
      },
        getNewMusicList:function(index,area){
             var that = this;

             this.$axios({
                method: "get",//指定请求方式
                url: `http://localhost:3000/top/list?idx=${area}`,
              })
                .then(function(res){

                  var ll=res.data.playlist.tracks;
                  if((ll.length%20 ) == 0 )
                  {
                    that.allpage=parseInt( ll.length/20) ;

                  }
                  else{
                     that.allpage=parseInt( ll.length/20) +1;
                  }

                  that.list=ll.splice(index,20);

                })
                .catch(function(err){
                  //请求失败或者接口返回失败或者.then()中的代码发生错误时执行
                })
            },
           getNowTime(){
                    var dt=new Date();
                    var y = dt.getFullYear()
                    var m = dt.getMonth() + 1
                    var d = dt.getDate()
                    return `${y}-${m}-${d}`
            },
            pre(){
              if((this.index-1)>=0){
                this.index--;
                this.getNewMusicList(this.index*20,this.area);
              }

            },
            next(){
              if((this.index+1) <= (this.allpage-1)){
                this.index++;
                this.getNewMusicList(this.index*20,this.area);
              }
              }

       },
      created(){
         this.getNewMusicList(this.index,this.area);
      },




}
</script>


<style scoped>
  @import "../assets/newsong/newsong.css";
</style>
