<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style>
  ul,li,p,body,h4,h2,h3{margin:0;padding:0;}
  ul{list-style:none;}
  a{text-decoration: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top:0;
}
</style>
