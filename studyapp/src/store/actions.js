export default {
  FETCH_USERID(context, userId) {
    context.commit('SET_USERID', userId);
    console.log('ok FETCH_USERID');
  },
  FETCH_LOGINSTATUS(context, loginStatus) {
    context.commit('SET_LOGINSTATUS', loginStatus);
    console.log('ok FETCH_LOGINSTATUS');
  }
}