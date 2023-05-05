<template>
    <li class="task-list-item">
      <div class="task-content">
        <div class="task-info">
          <span class="task-title">{{ task.title }}</span>
          <div class="task-details">
            <span class="task-type">{{ task.type }}</span>
            <span v-if="task.urgency" class="task-urgency">{{ task.urgency }}</span>
            <span v-if="task.endDate" class="task-end-date">{{ formattedEndDate }}</span>
          </div>
        </div>
        <div class="task-actions">
          <button class="btn" @click="editTask">Edit</button>
          <button class="btn" @click="deleteTask">Delete</button>
          <button class="btn" @click="">Done</button>
        </div>
      </div>
      <div class="task-description" v-if="showDescription">
        <span class="description-label">Description:</span>
        <span>{{ task.description }}</span>
      </div>
    </li>
  </template>
  
  <!-- Rest of the script and style content remains the same -->
  
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    task: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  });
  
  const emit = defineEmits(['delete-task', 'edit-task']);
  
  const deleteTask = () => {
    emit('delete-task', props.index);
  };
  
  const editTask = () => {
    emit('edit-task', props.index);
  };
  
  const formattedEndDate = new Date(props.task.endDate).toLocaleDateString();
  
  const showDescription = ref(true);
  </script>
  
  <style scoped>
  .task-list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 8px;
    width: 100%;
    max-width: 600px;
    box-sizing: border-box;
    transition: background-color 0.2s;
    position: relative;
  }
  
  .task-list-item:hover {
    background-color: #eee;
  }
  
  .task-list-item:hover .task-description {
    display: block;
  }
  

  .task-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.task-info {
  display: flex;
  align-items: center;
  
}

.task-title {
  font-weight: bold;
  margin-right: 1rem;
  font-size: 1.2rem;
  align-items: center;
}

.task-details {
  display: flex;
  gap: 1.0rem;
}

.task-actions {
  margin-left: 1rem;
  
}

  
  .task-type,
  .task-urgency,
  .task-end-date {
    font-size: 0.8em;
    margin-right: 8px;
  }
  
  .task-type {
    color: #007bff;
  }
  
  .task-urgency {
    color: #dc3545;
  }
  
  .task-end-date {
    color: #28a745;
  }
  
  
  .task-description {
    display: none;
    position: absolute;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 8px;
    font-size: 0.9em;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    white-space: pre-wrap;
    max-width: 300px;
    z-index: 10;
  }
  
  .description-label {
    font-weight: bold;
    margin-right: 4px;
  }

  .btn {
    color: var(--dl-color-gray-white);
  outline: none;
  height: 20px;
  width: 4rem;
  align-self: flex-start;
  background: linear-gradient(310deg, #2152ff, #21d4fd);
  box-shadow: rgba(0, 0, 0, 0.11) 0px 4px 7px -1px, rgba(0, 0, 0, 0.07) 0px 2px 4px -1px;
  transition: all 0.15s ease-in;
  padding-top: var(--dl-space-space-triplequarterunit);
  border-width: 0px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: 1.875rem;
  padding-right: var(--dl-space-space-unitandahalfunit);
  padding-bottom: var(--dl-space-space-triplequarterunit);
  background-image: linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253));
  }

  .btn:hover{
    cursor: pointer;
  transform: scale(1.02);
  }
  </style>
  