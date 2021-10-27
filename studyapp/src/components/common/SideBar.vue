<template>
  <div class="sideBar">
    모든 화면 공통 검색 가능 사이드바
    <input type="text" placeholder="aaa" />
  </div>
  
</template>

<script>
export default {

}
</script>

<style>
.sideBar {
height: 85%;
width: 300px;
background-color: #555;
position: fixed; /* Fixed Sidebar (stay in place on scroll) */
/*z-index: 1;*/ /* Stay on top */
top: 10; /* Stay at the top */
right: 0;
bottom: 0;
overflow-x: hidden; /* Disable horizontal scroll */
padding-top: 0;
}

</style>