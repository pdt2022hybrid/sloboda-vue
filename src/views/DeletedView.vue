<template>
  <div class="about">
    <h1 class="title">Deleted Items</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    <div class="outerDiv container">
      <ItemComponent :completedList="true"/>
    </div>
  </div>
</template>

<script>
import ItemComponent from '@/components/ItemComponent.vue'

export default {
  name: 'DeletedView',
  components: {
    ItemComponent
  }
}
</script>
