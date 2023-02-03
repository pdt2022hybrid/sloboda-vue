<template>
    <h1 class="title">{{ this.store.getters.getListTitle(activeListId) }}</h1>

    <div v-if="!this.completedList" class="container" style="width: 55%;">
        <div class="row">
            <div class="col">
                <div class="row">
                    <input @keypress.enter="add(this.input, this.inputDesc)" v-model="this.input" placeholder="New Item" type="text" id="inputTitle"/>
                </div>
                <div class="row">
                    <input @keypress.enter="add(this.input, this.inputDesc)" v-model="this.inputDesc" placeholder="Optional Description" type="text" id="inputDesc"/>
                </div>
            </div>
            <button @click="add(this.input, this.inputDesc)" class="btn btn-primary btn-lg col-1">Add</button>
            <button @click="load(this.activeListId)" class="btn btn-primary btn-lg col-2">Load Data</button>
            <button @click="this.store.commit('setList', {id: this.activeListId, list: []});" class="btn btn-danger btn-lg col-1">Reset</button>
        </div>
    </div>
    <h1 v-else class="subtitle">Completed Items</h1>

    <div class="outerDiv container">
        <div class="scrollDiv">
            <div v-for="value in list" :key="value.id">
                <div v-if="value.listId === this.activeListId && value.completed === this.completedList" class="innerDiv container">
                    <div class="row">
                        <div class="col">
                            <h3 class="innerText">{{ value.id }}: {{ value.title }}</h3>
                            <h5 v-if="value.description != ''" class="innerText user">{{ value.description }}</h5>
                        </div>
                        <div v-if="this.completedList" class="col-1" style="display: flex; justify-content: center; align-items: center;">
                            <i @click="this.store.commit('delete', value);" class="listButton delete bi bi-trash3"></i>
                        </div>
                        <div class="col-1" style="display: flex; justify-content: center; align-items: center;">
                            <i v-if="!this.completedList" @click="this.store.commit('completed', value);" class="listButton check bi bi-check-circle"></i>
                            <i v-else @click="this.store.commit('completed', value);" class="check-true bi bi-check-circle-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style>
.outerDiv {
  padding: 30px 0;
  margin-top: 20px;
  width: 60%;
  background: rgb(29, 29, 29);
  border-radius: 40px;
  /*filter: drop-shadow(15px 20px 5px rgba(0, 0, 0, 0.5));*/
  height: 70vh;
  overflow: hidden;
}
.scrollDiv {
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
}

.innerDiv {
    padding: 5px 50px 5px 0;
    width: 80%;
    border-radius: 12px;
    color: #fff;
    flex-direction: row;
    transition: 250ms;
} .innerDiv:hover {
    background: rgb(56, 56, 56);
}

.innerText {
    justify-content: space-around;
    text-align: left;
    margin-left: 20px;
    word-wrap: break-word;
    transition: 250ms;
} .innerText:hover {
    text-decoration: underline;
    cursor: pointer;
}
.user {
    color: #aaa;
    margin-left: 50px;
}

.listButton {
    font-size: 36px;
    color: #aaa;
    transition: 250ms;
} .innerDiv:hover .listButton {
    color: #fff;
}
.check:hover {
    color: #4f4 !important;
    cursor: pointer;
}
.delete:hover {
    color: #f44 !important;
    cursor: pointer;
}
.check-true {
    font-size: 36px;
    color: #4f4;
    transition: 250ms;
} .check-true:hover {
    color: #888;
    cursor: pointer;
}

.btn {
    margin-left: 5px;
}
</style>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'

export default {
    name: 'ListComponent',
    props: {
        completedList: Boolean
    },
    data() {
        return {
            store: useStore(),
            activeListId: computed(() => this.store.state.activeList),
            list: computed(() => this.store.state.todos),
            input: '',
            inputDesc: ''
        }
    },
    methods: {
        load: async function(list, start = false, url = "https://jsonplaceholder.typicode.com/todos") { //optional url
            if(start && this.store.state.firstLoad) return;
            try {
                await axios.get(url).then( (result) => {
                    //let arr = [];
                    for(let obj of result.data) { //Insert "User " before userId and use as description
                      this.store.commit('add', {
                            list: list,
                            title: obj.title,
                            desc: "User " + obj.userId,
                            completed: obj.completed
                        });
                    }
                    //this.store.commit('setList', {id: list, list: arr});
                    console.log("Loaded data from " + url);
                })
            } catch(e) {
                console.error(e);
            }
        },
        add: function(title, desc = '') {
            this.store.commit('add', { list: this.activeListId, title: title, desc: desc, completed: false });
            this.input = ''; this.inputDesc = '';
        }
    },
    async mounted() {
        await this.load(3, true);
        this.store.state.firstLoad = true;
    }
}
</script>