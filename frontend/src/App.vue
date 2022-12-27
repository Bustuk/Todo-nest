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

<style scoped></style>
