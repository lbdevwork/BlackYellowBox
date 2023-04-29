<template>
  <header class="navbar">
    <nav class="nav">
      <img class="logo-image" src="../../../public/logo-placeholder.jpg" alt="Logo" />
      <div class="menu-icon" @click="menuOpen = !menuOpen" v-if="!isWideScreen">
        <span></span>
        <span></span>
        <span></span>
        <div class="dropdown-menu" :class="{ open: menuOpen }">
          <a href="/" class="dropdown-link">Tasks</a>
          <a href="/about" class="dropdown-link">Friends</a>
          <a href="/services" class="dropdown-link">Notes</a>
          <a href="/contact" class="dropdown-link">New</a>
        </div>
      </div>
      <div class="nav-menu" v-if="isWideScreen">
        <a href="/" class="nav-link">Tasks</a>
        <a href="/about" class="nav-link">Friends</a>
        <a href="/services" class="nav-link">Notes</a>
        <a href="/contact" class="nav-link">New</a>
      </div>
      <div class="user-dropdown" v-if="isWideScreen">
        <img class="user-image" src="../../../public/placeholder.jpg" alt="User" @click="userMenuOpen = !userMenuOpen" />
        <div class="dropdown-menu" :class="{ open: userMenuOpen }">
          <a href="/profile" class="dropdown-link">Profile</a>
          <a href="/settings" class="dropdown-link">Settings</a>
          <a href="/logout" class="dropdown-link">Logout</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { computed, onMounted, onUnmounted } from '@vue/runtime-core';
const menuOpen = ref(false);
const userMenuOpen = ref(false);
const screenWidth = ref(window.innerWidth);

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
});

const isWideScreen = computed(() => screenWidth.value > 610);
</script>

<style scoped>
.navbar {
  display: grid;
  grid-template-columns: 1fr;
  background: linear-gradient(310deg, #5f2c82, #49a09d);
  padding: 1rem;
  position: relative;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nav {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1rem;
}

.nav-brand {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
}

.nav-menu {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 1rem;
  align-items: center;
  transition: max-height 0.3s ease-in-out;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.user-dropdown {
  position: relative;
}

.user-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
}

.logo-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: none;
  min-width: 200px;
}

.dropdown-menu.open {
  display: block;
}

.dropdown-link {
  display: block;
  color: #333;
  text-decoration: none;
  padding: 1rem;
  white-space: nowrap;
}
.dropdown-link:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
.menu-icon {
  display: none;
  flex-direction: column;
  position: absolute;
  justify-content: space-around;
  width: 24px;
  height: 16px;
  top: 2.5rem;
  right: 1.5rem;
  cursor: pointer;
}

.menu-icon span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: #fff;
}
@media screen and (max-width: 610px) {
  .nav {
    grid-template-columns: auto 1fr auto;
  }


 .nav-menu {
    display: none;
    grid-template-columns: auto;
    gap: 0;
    position: absolute;
    top: 100%;
    right: 0; /* Move menu to the right */
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    min-width: 200px;
    max-height: 20px;
  }


  .nav-menu.open {
    display: grid;
  }

  .nav-menu:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .nav-link {
    color: #333;
    background-color: rgba(0, 0, 0, 0.05);
  }

  .nav-link:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .menu-icon {
    display: flex;
  }

  .user-image{
    visibility: hidden;
  }
}
</style>