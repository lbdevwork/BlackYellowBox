<template>
    <div id="main-view">
      <Header></Header>
      <main class="main-container">
        <TaskList />
        <!-- You can add any other content or components you want to display here -->
        <router-link to="/calendar">Calendar View</router-link>
      </main>
    </div>
  </template>
  
  <script setup>
  import Header from '@/components/global/header.vue';
  import TaskList from '@/components/lists/task-list.vue';
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body,
  html {
    height: 100%;
    width: 100%;
  }
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100vh;
    padding: 1rem;
  }
  
  .page-content {
    padding: 1rem;
  }
  </style>