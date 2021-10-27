<template>
  <div class="container">

    <span class="loginText">
      Login
    </span>

    <div class="loginContainer">

      <span class="idIcon">
        <i class="fas fa-portrait"></i>
      </span>
      &nbsp;

      <input type="text"
      placeholder="아이디를 입력해주세요."
      v-model="userId"
      />

      <br>

      <span class="pwIcon">
        <i class="fas fa-key"></i>
      </span>
      &nbsp;

      <input type="password"
      placeholder="비밀번호를 입력해주세요."
      v-model="userPassword"
      />

      <br>

      <span class="loginBtnIcon" @click="loginBtn">
        <i class="fas fa-sign-in-alt"></i>
      </span>

      <span class="aaa">아직 회원이 아니시라면
        <router-link to="/signup">
          회원가입
        </router-link>
        을 먼저 진행해주세요!
      </span>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      userPassword: '',
    }
  },
  methods: {
    loginBtn () {
      // this.$store.dispatch('FETCH_USERID', this.userId);
      // this.$store.dispatch('FETCH_LOGINSTATUS', 'login');
      this.$emit('login');
      this.$router.push('/');
    },
  },
}
</script>

<style scoped>
.container {
  position: relative;
  top: 100px;
  left: 25%;
  width: 50%;
  height: 500px;
  text-align: center;
  line-height: 50px;
  border-radius: 5px;
  border: 2px solid #6478FB;
  font-family: Berlin Sans FB;
}
.loginContainer {
  position: relative;
  top: 35%;
}
.loginText {
  position: relative;
  top: 10%;
  left: 5%;
  font-size: 35px;
}
input {
  position: relative;
  right: 5%;
  font-size: 25px;
}
.idIcon {
  position: relative;
  right: 5%;
  top: 2px;
  font-size: 30px;
}
.pwIcon {
  position: relative;
  right: 5%;
  top: 2px;
  font-size: 23px;
}
.loginBtnIcon {
  position: relative;
  bottom: 80px;
  left: 50%;
  font-size: 50px;
}
a:visited {
  color : black;
}
a:hover {
  color : #6478FB;
}
</style>