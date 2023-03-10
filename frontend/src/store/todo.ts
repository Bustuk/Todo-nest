import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const connector = axios.create({
  baseURL: import.meta.env.DEV ? "http://localhost:3000/todos" : "todos",
});

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  description?: string;
};

export const useTodoStore = defineStore("todo", () => {
  const todos: Ref<Todo[]> = ref([]);

  async function refreshTodos() {
    try {
      const { data } = await connector.get("");
      todos.value = data as Todo[];
    } catch (e) {
      todos.value = [];
    }
  }

  async function addTodo(title: string) {
    await connector.post("", { title, completed: false });
    await refreshTodos();
  }

  async function removeTodo(id: number) {
    try {
      const { data } = await connector.delete(`${id}`);
    } catch (e) {
      console.error(e);
    }
    refreshTodos();
  }

  async function toggleTodo({
    id,
    completed,
  }: {
    id: number;
    completed: boolean;
  }) {
    try {
      const { data } = await connector.patch(`${id}`, { completed, id });
    } catch (e) {
      console.error(e);
    }
    refreshTodos();
  }

  refreshTodos();
  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    refreshTodos,
  };
});
