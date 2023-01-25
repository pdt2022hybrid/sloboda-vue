<template>
  <div class="home">
    <h1 class="title">TODO List</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    <input v-model="this.message" placeholder="Add Item" type="text"/>
    <button @click="addItem()">Add</button>
    <div class="outerDiv container">
      <ItemComponent :completedList="false"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import ItemComponent from '@/components/ItemComponent.vue'

export default {
  name: 'HomeView',
  components: {
    ItemComponent
  },
  data() {
    return {
      message: ''
    }
  }
}
</script>
