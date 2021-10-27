<template>
  <div class="header">
    <router-link to="/main" class="MainIcon" tag="span">
      <span>
        <i class="fas fa-laptop-code">helloStudy</i>
      </span>
    </router-link>
    
    <template v-if="loginProps">
      <span class="userIcon">

        <i class="fas fa-user"></i>
        <br>
        <span class="iconText">***님</span>

      </span>
      <span class="logOutIcon" @click="logOutBtn">

        <i class="fas fa-sign-out-alt"></i>
        <br>
        <span class="iconText">Logout</span>

      </span>
    </template>

    <template v-else>
      <router-link to="/signup" class="signUpIcon">
        <span>

          <i class="fas fa-user-plus"></i>
          <br>
          <span class="iconText">SignUp </span>

        </span>
      </router-link>

      <router-link to="/login" class="loginIcon">
      <span>

          <i class="fas fa-lock"></i>
          <br>
          <span class="iconText">Login </span>

        </span>
      </router-link>
    </template>

    <span class="searchIcon" @click="changeStatusSideBar">

      <i class="fas fa-search"></i>
      <br>
      <span class="iconText">Search</span>

    </span>


    <transition name="sideBarPage">
      <side-bar v-if="showSideBar"></side-bar>
    </transition>

  </div>
</template>

<script>
import sideBar from './SideBar.vue';

export default {
  data() {
    return {
      showSideBar: false,
    }
  },
  props: [
    'loginProps',
  ],
  components: {
    sideBar,
  },
  methods: {
    changeStatusSideBar () {
      this.showSideBar = !this.showSideBar;
    },
    logOutBtn () {
      console.log('aaa');
    }
  },
}
</script>

<style scoped>
.header {
    color: black;
    background-color: white;
    display: flex;
    padding: 8px;
    font-size: 30px;
    position: relative;
    top: 32px;
    left: 25px;
    font-family: Berlin Sans FB;
}
.header a {
  text-decoration: none;
}
a:visited {
  color : black;
}
a:hover {
  color : #6478FB;
}
.MainIcon {
  position: relative;
  left: 2%;
  color: #6478FB;
}
.searchIcon {
  position: relative;
  left: 77%;
  /* float: right; */
}
.loginIcon {
  position: relative;
  left: 76%;
}
.logOutIcon {
  position: relative;
  left: 76%;  
}
.signUpIcon {
  position: relative;
  left: 75%;
}
.userIcon {
  position: relative;
  left: 75%;
}
.iconText {
  position: relative;
  right: 15%;
  bottom: 15px;
  font-size: 15px;
}
/* .sideBarPage-enter, .sideBarPage-leave-to 
.fade-leave-active below version 2.1.8 {
  opacity: 0;
} */
/* 트랜지션 전용 스타일 */
.sideBarPage-enter-active, .sideBarPage-leave-active, .sideBarPage-move {
  transition: opacity 1s, transform 1s;
}
.sideBarPage-enter {
  opacity: 0;
  transform: translateX(20px);
}
.sideBarPage-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>