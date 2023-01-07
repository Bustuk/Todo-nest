<template>
  <div class="item">
    <input type="checkbox" v-model="checked" :v-on:checked="toggle" />
    <h3>{{ todo.title }}</h3>
    <button @click="remove()">Remove</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const checked = computed({
  get() {
    return props.todo.completed;
  },
  set(value) {
    toggle(value);
  },
});

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(["todo-removed", "todo-toggled"]);

const toggle = (completed: boolean) => {
  emits("todo-toggled", { id: props.todo.id, completed });
};

const remove = () => emits("todo-removed", props.todo.id);
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 250px;
  border: 1px solid black;
  margin-top: 10px;
  padding: 0px 10px;
  word-break: break-all;
  flex-wrap: wrap
}
button {
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px;
  /* width: 15px; */
  height: 25px;
}
</style>
