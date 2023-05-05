<template>
    <div v-if="show" class="modal" @click.self="close">
      <div class="modal-content">
        <h2>Add Task</h2>
        <form @submit.prevent="submitForm">
          <label for="taskTitle">Task Title:</label>
          <input type="text" id="taskTitle" v-model="newTask.title" required />
          <label for="taskType">Task Type:</label>
            <select id="taskType" v-model="newTask.type" required>
                <option value="personal">Personal</option>
                <option value="work">Work</option>
                <option value="other">Other</option>
                <option value="extra">Extra</option>
            </select>
          <label for="taskUrgency">Urgency:</label>
            <select id="taskUrgency" v-model="newTask.urgency" required>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
          <label for="taskDescription">Description:</label>
          <textarea id="taskDescription" v-model="newTask.description"></textarea>
          <label for="taskEndDate">End Date:</label>
            <div class="date-selects">
            <div class="date-select-container">
                <label for="taskEndDay">Day</label>
                <select id="taskEndDay" v-model="newTask.endDay" required>
                <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
                </select>
            </div>
            <div class="date-select-container">
                <label for="taskEndMonth">Month</label>
                <select id="taskEndMonth" v-model="newTask.endMonth" required>
                <option v-for="(month, index) in months" :key="index" :value="index + 1">{{ month }}</option>
                </select>
            </div>
            <div class="date-select-container">
                <label for="taskEndYear">Year</label>
                <select id="taskEndYear" v-model="newTask.endYear" required>
                <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                </select>
            </div>
            </div>
          <button type="submit">Add Task</button>
          <button type="button" @click="close">Close</button>
        </form>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { ref, watchEffect, computed } from 'vue';
  import { useTaskStore } from '@/stores/task.js'; // Import the useTaskStore

    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 21 }, (_, i) => currentYear + i);
    const taskStore = useTaskStore(); // Create a reference to the task store
    const emits = defineEmits(['update:show', 'task-added']);
    const modalClosed = ref(false);
    // Define the props
const props = defineProps({
        show: {
        type: Boolean,
        default: false,
        },
        currentDate: {
        type: Date,
        },
    });

// Define a computed property to convert the currentDate prop to a Date object
const currentDateObject = computed(() => {
  if (props.currentDate) {
    const date = new Date(props.currentDate);
    console.log(props.currentDate)
    return taskStore.DateTask(date.getDate(), date.getMonth(), date.getFullYear());
  }
  return null;
});

 
  
 // Define the close method
const close = () => {
    emits('update:show', false);
  };

const newTask = ref({
    title: '',
    type: 'personal',
    description: '',
    urgency: 'low',
    endDay: '',
    endMonth: '',
    endYear: '',
    
});

function getMonthNamePtPt(date) {
  const monthNamesPtPt = [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
  ];
  return monthNamesPtPt[date.month];
}
  
  const submitForm = () => {
    // Convert the separate date parts into a standardized Date object
    const taskId = taskStore.tasks.length + 1;

    const endDateObject = taskStore.DateTask(newTask.value.endDay, newTask.value.endMonth - 1,newTask.value.endYear);
    const newTaskObject = taskStore.Task(taskId,newTask.value.title,currentDateObject.value,newTask.value.type,newTask.value.description,newTask.value.urgency,endDateObject)

    // Perform form submission logic here
    // e.g., call a function from the parent component to add the task
    taskStore.addTask(newTaskObject); // Make sure to import and use the 'addTask' function from your store
   
    const DatePtPtMonthName = getMonthNamePtPt(currentDateObject.value);

    emits('task-added', { day: currentDateObject.value.day, month: DatePtPtMonthName, year: currentDateObject.value.year });    close();
  };
  
  
  // Watch for changes in the show prop
  watchEffect(() => {
    if (props.show) {
      // Add any additional logic for opening the modal here
    } else {
      // Add any additional logic for closing the modal here
    }
  });
  
 
  </script>


<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.modal-content h2 {
  margin-bottom: 1rem;
}

.modal-content form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.modal-content label {
  text-align: center;
  display: block;

}

.modal-content input,
.modal-content select,
.modal-content textarea,
.modal-content button {
  width: 100%;

}

.modal-content textarea {
  height: 150px;
}

.modal-content button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

}

.modal-content button:hover {
  background-color: #2980b9;
}
</style>