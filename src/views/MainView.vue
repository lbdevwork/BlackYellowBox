<template>
    <div id="main-view">
      <Header />
      <Search />
      <FriendItem
        v-for="person in PeopleStorage.people"
        :key="person.id"
        :id="person.id"
        :image_alt="person.image_alt"
        :heading1="person.name"
        :heading12="person.age"
        :button="person.button"
        :heading11="person.location"
        :image_src="person.image_src"
      />
      <main>
        <!-- You can add any other content or components you want to display here -->
      </main>
    </div>
  </template>
  
  <script setup>
  import Header from "../components/global/Header.vue";
  import Search from "../components/items/search-bar.vue";
  import FriendItem from "../components/items/cards/friend-item.vue";
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
  .main-container {
  display: grid;
  grid-template-rows: auto auto 1fr;
  height: 100vh;
}

.page-content {
  padding: 1rem;
}
  </style>