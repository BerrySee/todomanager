import axios from 'axios' //back-endhez kell (a JSONhoz)

const state = {
    todos: []
};

const getters = {
    allTodos: (state) => state.todos //a feljebb lévő tömbből veszi ki a propertyket
};

const actions = { //itt van a JSON placeholder behívás
    async fetchTodos({
        commit
    }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('setTodos', response.data);
        /* első paramétere a setTodos
               ami lejjebb van definiálva*/
    },
    async addTodo({
        commit
    }, title) {
        /* addTodo method ami aJSON-ban való eltárolásho kell majd */
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        });
        commit('newTodo', response.data)
    },
    async deleteTodo({
        commit
    }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', id);
    }
};
/* a mutációban az történik, 
hogy úgymond átkonvertáljuk olyan formába, 
hogy a Todos.vue is tudja kezelni
state.todos = todos */
const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todo = state.todos.filter(todo => todo.id !== id)
};

export default {
    state,
    getters,
    actions,
    mutations
};