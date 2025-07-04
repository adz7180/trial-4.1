<template>
  <div class="home">
    <!-- Navbar -->
    <nav class="navbar">
      <img src="@/assets/logo.png" class="logo" />
      <ul class="nav-links">
        <li><router-link to="/scan">Scan to 3D</router-link></li>
        <li><router-link to="/customize">Customize</router-link></li>
        <li><router-link to="/public">Explore Public</router-link></li>
      </ul>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Design Your Dream Home</h1>
        <p>Scan, customize, and visualize homes in hyper-realistic 3D.</p>
        <div class="buttons">
          <router-link to="/scan" class="btn primary">Scan Blueprint</router-link>
          <router-link to="/customize" class="btn secondary">Start Designing</router-link>
        </div>
      </div>
      <div class="hero-image">
        <img src="@/assets/hero-preview.png" alt="Hero Preview" />
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="feature">
        <img src="@/assets/scan-icon.png" />
        <h3>Scan Blueprints</h3>
        <p>Upload 2D plans and convert them to 3D models instantly.</p>
      </div>
      <div class="feature">
        <img src="@/assets/edit-icon.png" />
        <h3>Fully Customize</h3>
        <p>Change floors, walls, furniture, lighting — every detail.</p>
      </div>
      <div class="feature">
        <img src="@/assets/share-icon.png" />
        <h3>Explore & Share</h3>
        <p>Publish your designs or explore community builds.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>
@import '@/assets/global.scss';

body {
  overflow-x: hidden;
}

.home {
  width: 100%;
  background: linear-gradient(to bottom, #f9fbfd, #e7ebf0);
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 70px;
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  width: 150px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 30px;
}

.nav-links li a {
  color: #333;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}

.nav-links li a:hover {
  color: #007bff;
}

/* Hero */
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 70px;
}

.hero-content {
  max-width: 600px;
}

.hero-content h1 {
  font-size: 3.8rem;
  margin-bottom: 20px;
  background: linear-gradient(to right, #007bff, #00b7ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-content p {
  color: #555;
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.hero-content .buttons {
  display: flex;
  gap: 20px;
}

.btn {
  padding: 14px 30px;
  border-radius: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;
}

.primary {
  background: linear-gradient(135deg, #007bff, #00b7ff);
  color: white;
}

.primary:hover {
  transform: translateY(-4px);
}

.secondary {
  background: white;
  border: 2px solid #007bff;
  color: #007bff;
}

.secondary:hover {
  background: #007bff;
  color: white;
  transform: translateY(-4px);
}

.hero-image img {
  width: 500px;
  border-radius: 30px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
}

/* Features */
.features {
  display: flex;
  justify-content: center;
  gap: 60px;
  padding: 80px 70px;
  background: white;
}

.feature {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 30px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
  transition: 0.3s;
}

.feature:hover {
  transform: translateY(-5px);
}

.feature img {
  width: 60px;
  margin-bottom: 20px;
}

.feature h3 {
  margin-bottom: 12px;
  background: linear-gradient(to right, #007bff, #00b7ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.feature p {
  color: #666;
  font-size: 1rem;
}

@media (max-width: 1200px) {
  .hero {
    flex-direction: column;
    text-align: center;
    gap: 50px;
  }

  .hero-image img {
    width: 90%;
  }

  .features {
    flex-direction: column;
    align-items: center;
  }
}
</style>
