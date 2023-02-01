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
            <button @click="load()" class="btn btn-primary btn-lg col-2">Load Data</button>
            <button @click="this.store.commit('listSet', this.activeListId, []);" class="btn btn-danger btn-lg col-1">Reset</button>
        </div>
    </div>
    <h1 v-else class="subtitle">Completed Items</h1>

    <div class="outerDiv container">
        <div class="scrollDiv">
            <div v-for="value in list" :key="value.id">
                <div v-if="value.completed == this.completedList" class="innerDiv container">
                    <div class="row">
                        <div class="col">
                            <h3 class="innerText">{{ value.id }}: {{ value.title }}</h3>
                            <h5 v-if="value.description != ''" class="innerText user">{{ value.description }}</h5>
                        </div>
                        <div v-if="this.completedList" class="col-1" style="display: flex; justify-content: center; align-items: center;">
                            <i @click="this.store.commit('itemDelete', this.activeListId, value);" class="listButton delete bi bi-trash3"></i>
                        </div>
                        <div class="col-1" style="display: flex; justify-content: center; align-items: center;">
                            <i v-if="!this.completedList" @click="this.store.commit('itemCompleted', this.activeListId, value);" class="listButton check bi bi-check-circle"></i>
                            <i v-else @click="this.store.commit('itemCompleted', this.activeListId, value);" class="check-true bi bi-check-circle-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style>
.innerDiv {
    padding: 5px 50px 5px 0px;
    width: 80%;
    border-radius: 12px;
    color: #fff;
    flex-direction: row;
} .innerDiv:hover {
    background: rgb(56, 56, 56);
}

.innerText {
    justify-content: space-around;
    padding: auto;
    text-align: left;
    margin-left: 20px;
    word-wrap: break-word;
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
    padding: auto;
    color: #aaa;
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
    padding: auto;
    color: #4f4;
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
            content: computed(() => this.store.state.content),
            activeListId: 1,
            list: computed(() => this.content[this.activeListId-1].list),
            input: '',
            inputDesc: ''
        }
    },
    /*computed: {
        getList () {
            return this.$store.state.list;
        }
    },*/
    methods: {
        load: async function(url = "https://jsonplaceholder.typicode.com/todos") { //optional url
            try {
                await axios.get(url).then( (result) => {
                    let arr = [];
                    for(let obj of result.data) { //Insert "User " before userId and use as description
                        arr.push({
                            title: obj.title,
                            description: "User " + obj.userId,
                            id: obj.id,
                            completed: obj.completed
                        });
                    }
                    this.store.commit('listSet', this.activeListId, arr);
                    console.log("Loaded data from " + url);
                })
            } catch(e) {
                console.error(e);
            }
        },
        add: function(title, desc = '') {
            if(title == '') return;
            this.store.commit('itemAdd', this.activeListId,
                {
                    title: title,
                    description: desc,
                    id: this.list.length + 1,
                    completed: false
                }
            );
            this.input = ''; this.inputDesc = '';
        }
    }/*,
    async mounted() {
        await this.load();
    }*/
}
</script>