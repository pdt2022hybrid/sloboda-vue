<template>
  <div class="top">
    <img alt="Vue logo" src="../assets/logo.png">
  <h1><b>TODO Lists</b></h1>
  </div>
  <div @click="this.$store.commit('createList');" class="add container">
    <div class="row">
      <div class="col-2">
        <i class="bi bi-plus-square-fill" style="font-size: 36px; padding-left: 30px;"></i>
      </div>
      <div class="col">
        <h3 style="padding-top: 5%;">Create List</h3>
      </div>
    </div>
  </div>
  <div class="lists container">
    <div v-for="value in this.$store.state.lists" :key="value.id" class="row">
      <div class="col-2" style="margin-left: 0.5vw;">
        <i class="edit bi bi-pencil-square"></i>
      </div>
      <div class="col">
        <h4 @click="this.$store.state.activeList = value.id" :class="{ 'active': this.$store.state.activeList === value.id}" class="todolist">
          {{ this.$store.getters.getListTitle(value.id) }}
        </h4>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
.top {
  border-bottom: 1px solid #2c3e50;
}

.lists {
  padding-top: 1vh;
  overflow-y: auto;
  height: 66vh;
}

.add {
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #2c3e50;
  user-select: none;
  transition: 250ms;
  cursor: pointer;
} .add:hover {
  color: #42b983;
}

.todolist {
  text-align: left;

  box-sizing: border-box;
  color: #6f6f6f;
  transition: 250ms;
  cursor: pointer;
} .todolist:hover {
  color: #2c3e50;
  font-size: 1.8rem;
} .todolist.active {
  color: #42b983;
}

.edit {
  font-size: 1vw;
  color: #6f6f6f;
  transition: 250ms;
  cursor: pointer;
} .edit:hover {
  color: #2c3e50;
}

</style>

<script>
import { useStore } from 'vuex'

export default {
  name: 'SidebarComponent',
  data() {
    return {
      store: useStore()
    }
  }
}
</script>