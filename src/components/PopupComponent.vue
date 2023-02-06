<template>
  <div @click="$emit('exit')" class="dim"></div>
  <div class="popup container">
    <div>
      <h4 style="color: darkgray">Editing {{ this.isList ? "List" : "Item" }}:</h4>
      <h1>{{ this.isList ? this.item.name : this.item.title }}</h1>
    </div>

    <div v-if="!this.isList" class="descDiv">
      <p style="margin: 0;">New Title: </p>
      <input v-model="TITLE" placeholder="Rename Item" id="inputTitle" style="width: 25vw;"/>
      <p style="margin-top: 1rem; margin-bottom: 0;">Description: </p>
      <input v-model="DESC" placeholder="Description" id="inputDesc" style="width: 25vw;"/>
    </div>
    <div v-else>
      <p style="margin: 0;">New Name: </p>
      <input v-model="this.i.name" placeholder="Rename List" id="inputTitle"/>
    </div>
    <div class="row" style="align-self: flex-end;">
      <button @click="$emit('save', TITLE, DESC); $emit('exit')" class="btn btn-success btn-lg col" style="margin: 5vh 20px 5px;">Save</button>
      <button @click="$emit('exit')" class="btn btn-danger btn-lg col" style="margin: 5vh 20px 5px;">Cancel</button>
    </div>
  </div>
</template>

<style scoped>
  .dim {
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
    background: rgba(0, 0, 0, 0.7);
    transition: 200ms;
  }
  .popup {
    position: fixed;
    top: 30vh;
    left: 35vw;
    width: 30vw;
    height: 40vh;
    z-index: 5;
    background: rgb(56, 56, 56);
    border-radius: 20px;
    transition: 200ms;
    overflow: auto;
  }
</style>

<script>
export const TITLE = '';
export const DESC = '';

export default {
  name: 'PopupComponent',
  props: {
    listId: Number,
    isList: Boolean,
    item: {} // to-do or list
  },
  data() {
    return {
      i: this.item
    }
  },
  methods: {

  },
  emits: ['exit', 'save'],
  created() {
    this.TITLE = this.isList ? this.item.name : this.item.title;
    this.DESC = this.isList ? "" : this.item.description;
  }
}
</script>