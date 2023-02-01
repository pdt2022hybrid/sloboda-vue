import { createStore } from 'vuex'

/** 
 * Item: {
 *      description: string,
 *      id: number,
 *      title: string,
 *      completed: boolean
 *  }
 * 
 * Todolist: {
 *      name: string,
 *      listId: number,
 *      list: [ Item ... ]
 *  }
 * 
 * content: [ Todolist ... ]
 * 
 */
const store = createStore({
    state: {
        content: [
            {
                name: "",
                listId: 1,
                list: [
                    {
                        title: "Do Something",
                        description: "abc",
                        id: 1,
                        completed: false
                    },
                    {
                        title: "Do Nothing",
                        description: "xyz",
                        id: 2,
                        completed: true
                     }
                ]
            },
            {
                name: "",
                listId: 2,
                list: [
                    {
                        title: "Create more todo lists",
                        description: "Very Important!",
                        id: 1,
                        completed: false
                    }
                ]
            }
        ]
    },
    getters: {
        getList: (state) => (id) => {
            return state.content.find(list => list.listId === id)
        },
        getListTitle: (state) => (id) => {
            let todolist = state.content.find(list => list.listId === id)
            return todolist.name == "" ? "My List #" + todolist.listId : todolist.name;
        }
    },
    mutations: {
        contentSet: function (state, content) {
            state.content = content;
        },
        listAdd: function (state, todolist) {
            state.content.push(todolist);
        },
        listSet: function (state, listId, todolist) {
            state.content[listId-1] = todolist;
        },
        itemAdd: function (state, listId, item) {
            state.content[listId-1].list.push(item);
        },
        itemCompleted: function (state, listId, item) {
            let arr = [];
            for(let obj of state.content[listId-1].list) {
                if(obj == item) obj.completed = !obj.completed; // toggle
                arr.push(obj);
            }
            state.content[listId-1].list = arr;
            console.log("Completed item " + item.id);
        },
        itemDelete: function (state, listId, item) {
            state.content[listId-1].list = state.content[listId-1].list.filter(obj => obj !== item);
            for(let obj of state.content[listId-1].list) { // Update IDs
                let index = state.content[listId-1].list.indexOf(obj)
                if(index + 1 != obj.id) {
                    obj.id = state.content[listId-1].list.indexOf(obj) + 1;
                    state.content[listId-1].list[index] = obj;
                }
            }
            console.log("Deleted item " + item.id);
        }
    },
    actions: {

    }
})

export default store