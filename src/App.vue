<template>
  <div id="app">
    <AddTodo />
    <Todos />
  </div>
</template>

<script>
/* ezzel importáljuk a Todos componenst */
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue' //az Addtodo componenns is importálva

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo
  }
}
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
