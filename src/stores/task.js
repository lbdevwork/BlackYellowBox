import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useTaskStore = defineStore('task', () => {
  const tasks = ref([
    // Sample tasks, you can replace them with your own data or fetch from an API
    { id: 1, title: 'Task 1', date: new Date(2023, 4, 10), type: 'personal' },
    { id: 2, title: 'Task 2', date: new Date(2023, 4, 15), type: 'work' },
    { id: 3, title: 'Task 3', date: new Date(2023, 4, 20), type: 'other' },
    { id: 4, title: 'Task 4', date: new Date(2023, 4, 21), type: 'extra' },
  ]);

  const DateTask = (day, month, year) => {
    return {
      day: day,
      month: month,
      year: year
    };
  };
  
  const Task = (id, title, date, type, description, urgency = null, endDate = null) => {
    return {
      id: id,
      title: title,
      date: date, // Should be a DateTask object
      type: type,
      urgency: urgency, // Not required, defaults to null
      description: description,
      endDate: endDate // Not required, defaults to null
    };
  };
  


  function addTask(task) {
    tasks.value.push(task);
  }

  function removeTask(taskId) {
    tasks.value = tasks.value.filter(task => task.id !== taskId);
  }

  function taskExistsOnDate(date) {
    return tasks.value.some(task => {
      const taskDate = new Date(task.date);
      return taskDate.getDate() === date.getDate() &&
             taskDate.getMonth() === date.getMonth() &&
             taskDate.getFullYear() === date.getFullYear() &&
             task.type;
    });
  }

  function tasksOnDate(date) {
    return tasks.value.filter(task => {
      const taskDate = new Date(task.date);
      return taskDate.getDate() === date.getDate() &&
             taskDate.getMonth() === date.getMonth() &&
             taskDate.getFullYear() === date.getFullYear();
    });
  }

  return {
    tasks,
    addTask,
    removeTask,
    taskExistsOnDate,
    tasksOnDate,
    DateTask,
    Task,
  };
});
