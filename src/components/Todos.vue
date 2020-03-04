<!--Ez a Todos componens -->
<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <!--v-for direktívát használunk ezután pedig a v-bind-el megadjuk, 
      hogy a forciklusnak a key-e az todo.id legyen (azért mert az egyedi)
      aztán {{}} jelek között láthatjuk, hogy a todo.title-t akarjuk kiiratni a HTML-be
      -->
      <div v-for="todo in allTodos" v-bind:key="todo.id" class="todo">
        {{todo.title}}
        <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
/* az export defaultba megadjuk, hogy ennek a komponensnek mi lesz a hivatkozási neve pl 
a Todos-nak Todos */
export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo"]) /*egyszerű spread operatort használt. 
    Azt akarjuk, hogy hamarabb betöltődjön mint, hogy meghívtuk, ezért egy computed-et kel használni*/
  },
  computed: mapGetters(['allTodos']),
  created() {
    this.fetchTodos();
  }
}
</script>
<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
</style>