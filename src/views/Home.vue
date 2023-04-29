<template>
  <div id="app">
    <main>
      <section class="hero">
        <div class="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <router-link to="/mainview" class="cta-button">
             Get Started
          </router-link>
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; 2023 Company Name. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  height: 100%;
  width: 100%;
}

nav ul {
  display: flex;
  list-style: none;
  justify-content: center;
}

nav li {
  margin: 0 15px;
}

nav a {
  text-decoration: none;
  color: #333;
}

.hero {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-content {
  position: relative;
  text-align: center;
  color: #fff;
}

.hero-content h1 {
  font-size: calc(2rem + 2vw);
  margin-bottom: 20px;
}

.hero-content p {
  font-size: calc(1rem + 1vw);
  margin-bottom: 30px;
}

.cta-button {
  background: #fff;
  padding: 12px 24px;
  border-radius: 25px;
  color: #333;
  font-size: calc(1rem + 0.5vw);
  text-decoration: none;
}



footer {
  background: #333;
  padding: 20px 0;
  color: #fff;
  text-align: center;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
    align-items: center;
  }

  nav li {
    margin: 10px 0;
  }

  .hero {
    min-height: 100vh;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 1rem;
  }
}
</style>