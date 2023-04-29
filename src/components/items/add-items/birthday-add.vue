<template>
    <div class="birthdate-section">
      <h1 class="h1-label">Birthday</h1>
      <div class="birthdate-selects">
        <span>Dia</span>
        <select v-model="selectedDay" class="select">
          <option v-for="day in days" :value="day" :key="day">{{ day }}</option>
        </select>
        <span>Mês</span>
        <select v-model="selectedMonth" class="select">
          <option v-for="month in months" :value="month" :key="month">{{ month }}</option>
        </select>
        <span>Ano</span>
        <select v-model="selectedYear" class="select">
          <option v-for="year in years" :value="year" :key="year">{{ year }}</option>
        </select>
      </div>
      <div class="age-location-section">
        <span class="age-label">Idade</span>
        <input type="text" class="input-age" v-model="person.age" />
      </div>
    </div>
  </template>
  
  <script setup>
import { defineProps, reactive, watchEffect } from 'vue';
  
  const props = defineProps({
    person: Object,
  });
  
  const days = Array.from({ length: 31 }, (_, index) => index + 1);
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, index) => currentYear - index);
  
  const selectedDay = reactive(null);
  const selectedMonth = reactive(null);
  const selectedYear = reactive(null);
  
  // Watch the selected date and update the person's age
  watchEffect(() => {
    if (selectedDay && selectedMonth && selectedYear) {
      const selectedDate = new Date(selectedYear, selectedMonth - 1, selectedDay);
      const currentDate = new Date();
      const age = currentDate.getFullYear() - selectedDate.getFullYear();
      person.age = age.toString();
    }
  });
  </script>
  
  <style scoped>
  .h1-label {
    margin-bottom: 0.5rem;
    font-size: 24px;
    margin-bottom: 10px;
    color: #000000;
  }
  
  .birthdate-selects {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  
  .select {
    border: 1px solid #d8d8d8;
    border-radius: 4px;
    padding-left: 10px;
    margin-right: 10px;
    font-size: 14px;
    line-height: 1.43;
    color: #000000;
  }
  
  .age-location-section {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }
  
  .age-label {
    padding-top: 20px;
    margin-bottom: 10px;
    color: #000000;
  }
  
  .input-age {
    border: 1px solid #d8d8d8;
    border-radius: 4px;
    padding-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    font-size: 14px;
    line-height: 
    1.43;
  color: #000000;
}

@media (max-width: 767px) {
  .birthdate-section {
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    align-items: center;
  }

  .birthdate-selects {
    justify-content: center;
  }
}
</style>