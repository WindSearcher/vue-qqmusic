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

                  <img src="../assets/play.png" alt="" class="play">
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
      h1,h2,h3,h4,h5,h6,p,ul,form{
          margin: 0;
          padding: 0;

      }
      ul{
          list-style: none;

      }
      a{
          text-decoration: none;
      }
      img{
          display: block;
          border:none;
      }
      body{

          margin: 0 ;
          padding: 0;
      }

      #newsong{
        width:100%;
        background: linear-gradient(top,rgba(250,250,250,.9),#fff);
      }


      #nav{
        width:1200px;
        margin: 52px auto;
        padding-top:50px;
        margin-bottom:0;
      }
      .navlist{
              position: relative;
              zoom: 1;
              clear: both;
              overflow: hidden;
              height: 40px;
              line-height: 26px;
              padding-left: 65px;

      }
      .navlistitem{
         color: #000;
         width: 44px;
         /* height: 25px; */
         line-height: 25px;
         font-size: 14px;
         margin: 0 24px 15px 0;
         padding: 3px 8px 8px 5px;
         text-align: center;
      }
      .nlisel{
        background-color: #31c27c;
        color:#fff;
      }

      .navlistitem:hover{
        color: #31c27c;
      }
      #wrap{

        width: 1200px;
        margin: 0 auto;
        margin-top: 7px;

      }
      .songlist{
           width: 100%;
           margin: 0;
           padding: 0;
      }
      .item{
        width:20%;
        display: inline-block;
        padding-bottom: 44px;
      }
       .item>.itemimg{
         width: 224px;
         height: 224px;
         overflow: hidden;
        position: relative;

       }



      .item>.itemimg>a>.play{
        width: 49px;
        height: 49px;
        position:absolute;
        left:40%;
        top:40%;

        opacity: 0;
        transform: scale(.7) translateZ(0);
        transition-property: opacity, transform;
        transition-duration: .5s;
        zoom: 1



        }
      .item>.itemimg>a>.cover{
        width: 224px;
        height: 224px;
      }
      .item>.itemimg>a:hover .cover{
             transform: scale(1.07) translateZ(0);
             transition: transform .75s cubic-bezier(0,1,.75,1);

       }
       .item>.itemimg>a:hover .play{
          opacity: 1;

          -webkit-transform: scale(1) translateZ(0);
          -webkit-transition-property: opacity, -webkit-transform;
          -webkit-transition-duration: .5s;
          transform: scale(1.55) translateZ(0);
          transition-property: opacity, transform;
          transition-duration: .5s;
          cursor: pointer  ;


       }


          @supports (transform:scale(1)) {
          .cover {
            transform: scale(1) translateZ(0);
            transition: transform .75s
        }

            .itemimg>a:hover .cover {
                transform: scale(1.07) translateZ(0);
                transition: transform .75s cubic-bezier(0, 1, .75, 1)
            }
          }

        @supports (object-fit:cover) {
            .cover {
                height: 100%;
                object-fit: cover
            }
        }


      .item>.itemtitle{
          margin-top: 10px;
         width: 224px;
            white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
         }
       .item>.itemtitle>a{
         width: 100%;
         font-size: 14px;
         color: black;
         font-weight: normal;
         height: 22px;

       }
       .item>.itemtitle>a:hover{
         color: #31c27c;
       }
      .item>.itemauthor>a:hover{
         color: #31c27c;
       }
      .item>.itemauthor{
        width: 224px;
      }
       .item>.itemauthor>a{

          font-size: 14px;
          color: #999;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          height: 22px;

       }
      .item>.itemtime{
          width: 224px;
          font-size: 14px;
          color: #999;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          height: 22px;

       }
       #footer{
         width: 1200px;
         margin: 0 auto;
       }

       #footer>.btn{
         width: 180px;
         margin: 0 auto;
         display: flex;
         justify-content: space-between;
       }
       .btn>.pre{

         height: 40px;
         color: #999;
         border: none;
       }
       .btn>.next{

         height: 40px;
         color: #999;
        border: none;
       }

       .pre:hover{
         background-color: #31c27c;
         color: #fff;
       }
       .next:hover{
        background-color: #31c27c;
         color: #fff;
       }
       #footer>.btn>span{
         width: 50px;
         height: 40px;
         line-height: 40px;
         text-align: center;
       }










</style>
