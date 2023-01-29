<template>
  <div class="about">
    <h1 class="title">Completed Items</h1>
    <div class="space"></div>
    <ListComponent :completedList="true"/>
  </div>
</template>

<script>
import ListComponent from '@/components/ListComponent.vue'

export default {
  name: 'CompletedView',
  components: {
    ListComponent
  }
}
</script>
