import Axios from "axios";

const state = {
    todos: [],
    driverInfo: ''
};

const getters = {
    allTodos: (state) => {
        return state.todos;
    },
    driverInfo: (state) => {
        return state.driverInfo
    }
};

//Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const actions = {
    async fetchDriverInfo({commit}){
        const response = await Axios.get('http://lnaphoeaz11.swift.com/driverservices/mentorapplication.nsf/jsondriver?openagent&id=FINGR');

        commit('setDriverInfo', response.data);
    },
    async fetchTodos({commit}) {
        const response = await Axios.get('http://jsonplaceholder.typicode.com/todos');

        commit('setTodos', response.data);
    },
    async addTodo({commit}, title) {
        const response = await Axios.post('http://jsonplaceholder.typicode.com/todos', {
            title, 
            completed: false
        });

        commit('newTodo', response.data);
    },
    async deleteTodo({commit}, id) {
        await Axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`);

        commit('removeTodo', id);
    },
    async filterTodos({commit}, e) {
        //console.log(e);
        const limit = e.target.options[e.target.options.selectedIndex].value;
        const response = await Axios.get(`http://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        
        commit('setTodos', response.data)
    },
    async updateTodo({ commit }, updTodo ) {
        const response = await Axios.put(`http://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo);
        console.log(response);

        commit( 'updateTodo', response.data);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    setDriverInfo: (state, driverInfo) => (state.driverInfo = driverInfo),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id );
        if (index !== -1) {
            state.todos.splice(index, 1, updTodo);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
