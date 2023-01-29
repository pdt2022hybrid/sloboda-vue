import { createStore } from 'vuex'

const store = createStore({
    state: {
        list: []
    },
    getters: {

    },
    mutations: {
        set: function (state, arr) {
            state.list = arr;
        },
        add: function (state, item) {
            state.list.push(item);
        },
        completed: function (state, item) {
            let arr = [];
            for(let obj of state.list) {
                if(obj == item) obj.completed = !obj.completed; //toggle
                arr.push(obj);
            }
            state.list = arr;
            console.log("Completed item " + item.id);
        },
        delete: function (state, item) {
            state.list = state.list.filter(obj => obj !== item);
            for(let obj of state.list) { // Update IDs
                let index = state.list.indexOf(obj)
                if(index + 1 != obj.id) {
                    obj.id = state.list.indexOf(obj) + 1;
                    state.list[index] = obj;
                }
            }
            this.updateIds();
            console.log("Deleted item " + item.id);
        }
    },
    actions: {

    }
})

export default store