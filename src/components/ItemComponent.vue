<template>
    <div v-if="!this.completedList">
        <input v-model="this.input" placeholder="Add Item" type="text"/>
        <button @click="add(this.input)" class="btn btn-primary">Add</button>
    </div>
    <div class="outerDiv container">
        <div v-for="value in list" :key="value.id">
            <div v-if="value.completed == this.completedList" class="innerDiv container">
                <div v-if="!this.completedList" class="row">
                    <div class="col-10">
                        <h3 class="innerText">{{ value.id }}: {{ value.title }}</h3>
                        <h5 class="innerText user">User {{ value.userId }}</h5>
                    </div>
                    <div class="col" style="display: flex; justify-content: center; align-items: center;">
                        <i @click="delete(value.id)" class="delete bi bi-trash3 justify-content-around"></i>
                    </div>
                </div>
                <div v-else>
                    <h3 class="innerText">{{ value.id }}: {{ value.title }}</h3>
                    <h5 class="innerText user">User {{ value.userId }}</h5>
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
    text-align: left;
    margin-left: 20px;
} .innerText:hover {
    text-decoration: underline;
    cursor: pointer;
}
.user {
    color: #aaa;
    margin-left: 50px;
}

.delete {
    font-size: 36px;
    padding: auto;
    color: #aaa;
} .delete:hover {
    color: #fff;
    cursor: pointer;
}
</style>

<script>
//import * as App from '@/App.vue'
import axios from 'axios'

export default {
    name: 'ItemComponent',
    props: {
        completedList: Boolean
    },
    data() {
        return {
            list: [],
            input: ''
        }
    },
    methods: {
        get: async function() {
            try {
                await axios.get("https://jsonplaceholder.typicode.com/todos")
                    .then((result) => {
                        this.list = result.data;
                        console.log(this.list);
                    }
                )
            } catch(e) {
                console.error(e);
            }
        },
        add: function(title) {
            this.list.push(
                {
                    "userId": 0,
                    "id": this.list.length + 1,
                    "title": title,
                    "completed": false
                }
            );
        },
        delete: function(delId) { //TODO
            console.log("delete called " + delId);
            this.list.splice
            this.list = this.list.filter(obj => {
                return obj.id !== delId;
            });
        }
    },
    async mounted() {
        await this.get();
    }
}
</script>