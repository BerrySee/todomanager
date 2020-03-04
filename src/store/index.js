import Vuex from 'vuex' //importáljuk a Vuex-et
import Vue from 'vue' //importáljuk a Vue-t is 
import todos from './modules/todos' //ez még nincs kész ez később lesz majd kreálva

//beöltjük a Vuex-et
Vue.use(Vuex);

//Store létrehozása
export default new Vuex.Store({
    modules: {
        todos
    }
})