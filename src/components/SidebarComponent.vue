<template>
  <div class="top">
    <img alt="Vue logo" src="../assets/logo.png">
  <h1><b>TODO Lists</b></h1>
  </div>
  <div class="add container">
    <div class="row">
      <div class="col-2">
        <i class="bi bi-plus-square-fill" style="font-size: 36px; padding-left: 30px;"></i>
      </div>
      <div class="col">
        <h3 style="padding-top: 5%;">Create List</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top {
  border-bottom: 1px solid #2c3e50;
}

.add {
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #2c3e50;
  user-select: none;
  cursor: pointer;
} .add:hover {
  color: #42b983;
}

</style>

<script>
export default {
  name: 'SidebarComponent'
}
</script>