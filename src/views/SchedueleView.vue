<template>
    <div class="overlay">
      <div class="calendar">
        <div class="calendar__header">
          <button @click="prevMonth">Prev</button>
          <div class="calendar__month-year-label">{{ currentMonth.toUpperCase() }} - {{ currentYear }}</div>
          <button @click="nextMonth">Next</button>
        </div>
        <div class="calendar__weekdays">
            <div class="calendar__weekday" v-for="weekday in weekdays" :key="weekday">{{ weekday }}</div>
        </div>
        <div class="calendar__grid-wrapper">
            
          <div class="calendar__grid">

            <div v-for="(empty, index) in emptyCells" :key="'empty-' + index" class="calendar__grid-item"></div>
            <TaskCard
              v-for="(day, index) in days"
              :key="index"
              :day="day"
              :showPersonal="getTasks(day, 'personal')"
              :showWork="getTasks(day, 'work')"
              :showOther="getTasks(day, 'other')"
              :showExtra="getTasks(day, 'extra')"
              @click="openAddTaskModal(day,currentDate.getMonth(),currentYear)"
              class="calendar__grid-item"
            />
          </div>
          <AddTaskModal v-model:show="showAddTaskModal" :currentDate="lastUpdatedDate" @task-added="openAddTaskModal(null, $event)"/>
        </div>
        <div class="calendar__actions">
            <button @click="seeAllTasks">See All Tasks</button>
            <button @click="removeTasks">Remove Tasks</button>
            <button @click="reloadTaskCards">Reload Task Cards</button>
        </div>
      </div>
      
    </div>
    <TaskList />
  </template>
  
  <script setup>
  import { ref, watchEffect, watch  } from 'vue';
  import TaskCard from '@/components/items/cards/task-card.vue';
  import { useTaskStore } from '@/stores/task.js'; // Import the useTaskStore
  import AddTaskModal from '@/components/modals/AddTaskModal.vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const taskStore = useTaskStore(); // Create an instance of the task store
  const currentDate = ref(new Date());
  const currentYear = ref(currentDate.value.getFullYear());
  const currentMonth = ref(currentDate.value.toLocaleString('default', { month: 'long' }));
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const days = ref([]);
  const showAddTaskModal = ref(false);
  const lastUpdatedDate = ref(null);
  const lastUpdatedCardIndex = ref(null);
  const emptyCells = ref([]);
  
  const openAddTaskModal = (day, month,year, updatedDate) => {
    lastUpdatedCardIndex.value = day - 1;
    lastUpdatedDate.value = new Date(parseInt(year), month, parseInt(day));
    showAddTaskModal.value = !showAddTaskModal.value;

  if (updatedDate) {
    lastUpdatedDate.value = updatedDate;
  }
};

const reloadTaskCards = () => {
    updateDays();
  };

  const updateDays = () => {
  const firstDay = new Date(currentYear.value, currentDate.value.getMonth(), 1);
  const daysInMonth = new Date(currentYear.value, currentDate.value.getMonth() + 1, 0).getDate();
  const emptyCellsCount = firstDay.getDay(); // Calculate the number of empty cells
  const daysArray = [];
  const emptyCellsArray = [];

  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }

  for (let i = 0; i < emptyCellsCount; i++) {
    emptyCellsArray.push(null); // Add empty cells
  }

  days.value = daysArray;
  emptyCells.value = emptyCellsArray; // Update the emptyCells ref
};

  
  const prevMonth = () => {
    currentDate.value.setMonth(currentDate.value.getMonth() - 1);
    updateDays();
    currentYear.value = currentDate.value.getFullYear();
    currentMonth.value = currentDate.value.toLocaleString('default', { month: 'long' });
  };
  
  const nextMonth = () => {
    currentDate.value.setMonth(currentDate.value.getMonth() + 1);
    updateDays();
    currentYear.value = currentDate.value.getFullYear();
    currentMonth.value = currentDate.value.toLocaleString('default', { month: 'long' });
  };
  
  const getTasks = (day, type) => {
    const tasksOnDate = taskStore.tasksOnDate(new Date(currentYear.value, currentDate.value.getMonth(), day));
   // console.log(`Day: ${day}, Tasks: `, tasksOnDate);
    return tasksOnDate.some(task => task.type === type);
   };

  const updateTasks = () => {
    days.value = [...days.value];
    if (lastUpdatedCardIndex.value !== null) {
      days.value[lastUpdatedCardIndex.value] = days.value[lastUpdatedCardIndex.value];
      console.log("Updated card index:", lastUpdatedCardIndex.value);
    }
    console.log("test" ,days.value)
};

  const seeAllTasks = () => {
    console.log('All tasks:', taskStore.tasks);
    router.push({ path: '/tasks' });
};

  const removeTasks = () => {
    //taskStore.tasks.value = [];
};

  watch(showAddTaskModal, (newValue) => {
    if (!newValue) {
      updateTasks();
    } 
  });

  watchEffect(() => {
    updateDays();
  });
  </script>
  
  <style scoped>

@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css');
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .calendar__month-year {
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  background: linear-gradient(90deg, #3498db, #2980b9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.calendar__month-year-label {
  font-size: 24px;
  font-weight: bold;
  padding: 10px;
  border-radius: 8px;
  background: linear-gradient(135deg, #f8f8f8, #e0e0e0);
  color: #2c3e50;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.calendar__weekdays {
  display: grid;
  grid-template-columns: repeat(7, minmax(80px, 1fr));
  gap: 10px;
  width: 78%;
  box-sizing: border-box;
  margin-bottom: 1rem;
}

.calendar__weekday {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;
}

  .calendar {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: 90%; /* Default width */
    max-width: 800px; /* Maximum width */
    min-width: 700px;
  }
  
  .calendar__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
  }
  
  .calendar__header button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }
  
  .calendar__header button:hover {
    background-color: #2980b9;
  }
  
  .calendar__grid-wrapper {
    display: inline-flex;
  }
  
  .calendar__grid {
    display: grid;
  grid-template-columns: repeat(7, minmax(80px, 1fr));
  grid-auto-rows: minmax(80px, auto);
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
}

.calendar__grid-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.calendar__grid-item:hover {
  background-color: #3498db;
  color: white;
}

.calendar__day {
  font-weight: bold;
  margin-bottom: 5px;
}

.calendar__task-icon {
  font-size: 14px;
  opacity: 0.7;
}

.calendar__task-icon i {
  pointer-events: none;
}

.calendar__grid-item:hover .calendar__task-icon {
  opacity: 1;
}


.calendar__actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 2rem;
}

.calendar__actions button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.calendar__actions button:hover {
  background-color: #2980b9;
}

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

    .modal-content input,
    .modal-content select,
    .modal-content button {
      width: 100%;
    }

    .modal-content button {
      background-color: #3498db;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;
      margin-top: 1rem;
    }

    .modal-content button:hover {
      background-color: #2980b9;
    }


</style>