<template>
  <div>
    <form @submit.prevent="addTodo">
      <input v-model="title" type="text" />
      <button :disabled="!title.length" type="submit">Add todo</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";
const title = ref("");

const emits = defineEmits(["todo-added"]);

function addTodo() {
  console.log("add todo", title.value);
  emits("todo-added", title.value);
  title.value = "";
}
</script>

<style scoped>

</style>