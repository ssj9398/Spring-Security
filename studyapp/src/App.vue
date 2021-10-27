<template>
  <div id="app">
    <tool-bar :loginProps="loginStatus"></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/common/ToolBar.vue'
export default {
  data () {
    return {
      loginStatus: false,
    }
  },
  components: {
    ToolBar,
  },
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.page-enter-active, .page-leave-active, .page-move {
  transition: opacity .3s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
