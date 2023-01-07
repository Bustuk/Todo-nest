<script setup lang="ts">
import TodoInput from "./components/Form.vue";
import TodoItem from "./components/TodoItem.vue";
import { storeToRefs } from "pinia";
import { useTodoStore } from "./store/todo";
const store = useTodoStore();
const { todos } = storeToRefs(store);
const { addTodo, toggleTodo, removeTodo } = store;
</script>

<template>
  <main>
    Todo
    <todo-input @todo-added="addTodo" />
    <ul>
      <todo-item
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @todo-toggled="toggleTodo"
        @todo-removed="removeTodo"
      />
    </ul>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}
ul {
  padding: 0px;
}
</style>
