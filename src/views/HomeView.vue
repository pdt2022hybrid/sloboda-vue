<template>
  <div class="home">
    <ListComponent :completedList="false"/>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import ListComponent from '@/components/ListComponent.vue'

export default {
  name: 'HomeView',
  components: {
    ListComponent
  }
}
</script>
