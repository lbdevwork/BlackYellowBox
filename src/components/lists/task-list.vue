<template>
    <div>
      <h2>Task List</h2>
      <ul class="task-list">
        <TaskListItem
          v-for="(task, index) in tasks"
          :key="task.id"
          :task="task"
          :index="index"
          @delete-task="deleteTask"
        />
      </ul>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  import TaskListItem from '@/components/items/cards/task-list-item.vue';
  import { useTaskStore } from '@/stores/task.js';
  
  const taskStore = useTaskStore();
  const tasks = taskStore.tasks;
  
  const emit = defineEmits(['delete-task']);
  
  const deleteTask = (index) => {
    taskStore.removeTask(tasks.value[index].id);
    emit('delete-task', index);
  };
  </script>
  
  <style scoped>
  .task-list {
    list-style-type: none;
    padding: 0;
  }
  </style>