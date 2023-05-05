
<template>
    <div class="task-card">
      <div class="task-card__day">{{ day }}</div>
      <div>
        <div class="task-card__icon top-left" v-if="showPersonal">
          <i class="fas fa-tasks"></i>
        </div>
        <div class="task-card__icon top-right" v-if="showWork">
          <i class="fas fa-tasks"></i>
        </div>
        <div class="task-card__icon bottom-left" v-if="showExtra">
          <i class="fas fa-tasks"></i>
        </div>
        <div class="task-card__icon bottom-right" v-if="showOther">
          <i class="fas fa-tasks"></i>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    day: Number,
    showPersonal: Boolean,
    showWork: Boolean,
    showOther: Boolean,
    showExtra: Boolean
  });
  </script>
  
  <style scoped>
  .task-card {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    background-color: lightgray;
    padding: 5px;
    border-radius: 4px;
    width: 50px;
    height: 60px;
    position: relative;
    transition: background-color 0.2s ease-in-out;
  }
  
  .task-card:hover {
    background-color: #3498db;
    color: white;
  }
  
  .task-card__day {
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  
  .task-card__icon {
    font-size: 14px;
    opacity: 0.7;
    z-index: 0;
    position: absolute;
  }
  
  .top-left {
    top: 15px;
    left: 15px;
  }
  
  .top-right {
    top: 15px;
    right: 15px;
  }
  
  .bottom-left {
    bottom: 15px;
    left: 15px;;
  }
  
  .bottom-right {
    bottom: 15px;
    right: 15px;
  }
  </style>
  