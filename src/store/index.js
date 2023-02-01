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
        todos: [
            {
                title: "Do Something",
                description: "abc",
                id: 1,
                listId: 1,
                completed: false
            },
            {
                title: "Do Nothing",
                description: "xyz",
                id: 2,
                listId: 1,
                completed: true
             },
             {
                title: "Create more todo lists",
                description: "Very Important!",
                id: 1,
                listId: 2,
                completed: false
            }
        ],
        lists: [
            {
                name: "My List #1",
                id: 1
            },
            {
                name: "Important",
                id: 2
            }
        ],
        activeList: 1
        /* Old Format
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
        ]*/
    },
    getters: {
        getList: (state) => (id) => {
            return state.lists.find(list => list.id === id)
        },
        getListTitle: (state) => (id) => {
            let todolist = state.lists.find(list => list.id === id)
            return todolist.name == '' ? "My List #" + todolist.listId : todolist.name;
        }
    },
    mutations: {

        addList: function (state, name = '') {
            let listId = state.lists.length + 1;
            state.lists.push({
                name: (name == '' ? "My List #" + listId : name),
                id: listId
            });
            console.log("Added list #" + listId);
            return listId;
        },
        setList: function (state, todolist) {
            state.todos = todolist
        },
        deleteList: function (state, listId) {
            state.lists = state.lists.filter(list => list.id !== listId);
        },
        add: function (state, list, title, desc = '', completed = false) {
            if(title == '') return;
            state.todos.push({
                title: title,
                description: desc,
                id: state.todos.length + 1,
                listId: list,
                completed: completed
            });
        },
        completed: function (state, item) {
            let arr = [];
            for(let obj of state.todos) {
                if(obj == item) obj.completed = !obj.completed; // toggle
                arr.push(obj);
            }
            state.todos = arr;
            console.log("Completed item " + item.id);
        },
        delete: function (state, item) {
            state.todos = state.todos.filter(obj => obj !== item);
            for(let obj of state.todos) { // Update IDs
                let index = state.todos.indexOf(obj)
                if(index + 1 != obj.id) {
                    obj.id = state.todos.indexOf(obj) + 1;
                    state.todos[index] = obj;
                }
            }
            console.log("Deleted item " + item.id);
        }

        /*
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
        }*/
    },
    actions: {

    }
})

export default store