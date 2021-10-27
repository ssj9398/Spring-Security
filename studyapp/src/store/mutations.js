export default {
  SET_USERID(state, userId) {
    state.userId = userId;
    console.log('ok SET_USERID')
  },
  SET_LOGINSTATUS(state, loginStatus) {
    if (loginStatus === "login") {
      state.loginStatus = true;
      console.log('ok SET_LOGINSTATUS')
    } else {
      state.loginStatus = false;
      console.log('ok SET_LOGINSTATUS')
    }
  },
}