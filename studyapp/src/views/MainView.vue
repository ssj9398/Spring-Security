<template>
  <div class="inputBox shadow">
    <input type="text"
    size="50"
    placeholder="원하는 프로젝트를 검색해주세요:)"
    v-model="searchItem"
    v-on:keyup.enter="searchItemList">

    <span class="addContainer"
    v-on:click="searchItemList">
      
      <i class="fas fa-search addBtn"></i>

    </span>

    <modal v-if="showModal" @close="showModal = false">
    <!--
    you can use custom content here to overwrite
    default content
    -->
      <h3 slot="header">
        경고!
        <i class="closeModal Btn fas fa-times" @click="showModal = false"></i>
      </h3>

      <div slot="body">
        아무것도 입력하지 않으셨습니다.
      </div>

    </modal>
      
  </div>
</template>

<script>
import Modal from '../components/common/Modal.vue';

export default {
  data() {
    return {
      searchItem: '',
      showModal: false,
    }
  },
  methods: {
    searchItemList() {
      if (this.searchItem !== '') {
        alert(this.searchItem);
      } else {
        this.showModal = !this.showModal;
      }
    }
  },
  components: {
    Modal,
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  position: relative;
  top: 300px;
  left: 30%;
  background-color: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  border: 1.5px solid;
  width: 700px;
}
.inputBox input {
  border-style: none;
  font-size: 1.5rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 2.5rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  position: relative;
  top: 0px;
  left: 5px;
  color: white;
  vertical-align: middle;
  font-size: 30px;
}
.closeModalBtn {
  color: #42b983;
}
</style>