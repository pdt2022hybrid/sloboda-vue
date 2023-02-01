<template>
  <div class="about">
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
