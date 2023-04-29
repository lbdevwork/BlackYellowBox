<template>
    <div id="main-view">
      <Header />
      
      <main>
        <ProfileCard />
       
        <!-- You can add any other content or components you want to display here -->
      </main>
    </div>
  </template>
  
  <script setup>
  import Header from "../components/global/Header.vue";
  import ProfileCard from "../components/items/cards/profile-card.vue";
  import { usePeopleStore } from '../stores/people.js'

  const PeopleStorage = usePeopleStore();

  PeopleStorage.checkNicks()
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
 
  </style>