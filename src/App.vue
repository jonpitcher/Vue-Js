<template>
  <div id="app">
  <app-header> </app-header>
  <router-view class="container"> </router-view>
  <app-footer> </app-footer> <!-- interesting app header and app footer are between the router view... -->
  </div>
</template>

<script>

import AppHeader from '@/components/AppHeader' 
import AppFooter from '@/components/AppFooter' 
export default {
  name: 'App',
  components: {AppHeader, AppFooter} //i dont remember doing this with my website...
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
