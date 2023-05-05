<template>
    <div class="page-menu">
      <h1 class="page-title">App Menu</h1>
      <div class="card-grid">
        <router-link to="/calendar" class="card" v-for="(option, index) in options" :key="index">
          <div class="card-content">
            <h2>{{ option.title }}</h2>
            <p>{{ option.description }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const options = [
    {
      title: 'Search Friends',
      description: 'Find and connect with friends.',
      route: '/searchview',
    },
    {
      title: 'Add Friends',
      description: 'Expand your social network.',
      route: '/addperson',
    },
    {
      title: 'See Task List',
      description: 'Manage your tasks and to-do list.',
      route: '/calendar',
    },
    {
      title: 'Suggestion',
      description: 'Explore new features and recommendations.',
      route: '/suggestion',
    },
  ];
  
  const router = useRouter();
  
  const navigateToRoute = (route) => {
    router.push(route);
  };
  </script>
  
  <style scoped>
.page-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f3f3f3;
}

.page-title {
  font-size: 36px;
  margin-bottom: 20px;
  color: #333333;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin-top: 30px;
}

.card {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-content {
  margin-top: 20px;
}

.card h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333333;
}

.card p {
  font-size: 16px;
  color: #666666;
}

.card:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  z-index: -1;
  background: linear-gradient(to right bottom, #007bff, #00b8ff);
  border-radius: 8px;
  transition: opacity 0.3s ease-in-out;
}

.card:hover:before {
  opacity: 0.4;
}

.router-link-active .card:before {
  opacity: 0.8;
}

.router-link{
opacity: 0.8;
}

.router-link-active .card:hover:before {
opacity: 0.9;
}

.card-content::before {
content: '';
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
opacity: 0;
z-index: -1;
background-color: rgba(255, 255, 255, 0.5);
transition: opacity 0.3s ease-in-out;
}

.card:hover .card-content::before {
opacity: 1;
}

.router-link-active .card-content::before {
background-color: rgba(255, 255, 255, 0.8);
}

@media (max-width: 767px) {
.card-grid {
grid-template-columns: 1fr;
}
}
</style>