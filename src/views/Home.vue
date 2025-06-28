<template>
  <div class="home">
    <div class="navbar">
      <div class="logo">HexaNest</div>
      <div class="nav-links">
        <router-link to="/scan">Scan Blueprint</router-link>
        <router-link to="/customize">Customize</router-link>
        <router-link to="/public">Public Builds</router-link>
        <router-link to="/explore">Explore</router-link>
      </div>
    </div>

    <div class="hero">
      <div class="hero-content">
        <h1>Design Your Dream Home in Ultra-Realistic 3D</h1>
        <p>
          Scan, customize, and visualize your perfect home with hyper-realism.
          Fully interactive. Fully yours.
        </p>
        <div class="buttons">
          <router-link to="/scan" class="btn primary">Scan Blueprint</router-link>
          <router-link to="/customize" class="btn secondary">Start Customizing</router-link>
        </div>
      </div>
      <div class="hero-image">
        <img src="/hero-preview.png" alt="Home Preview" />
      </div>
    </div>

    <div class="features">
      <div class="feature-card">
        <img src="/icons/scan-icon.png" />
        <h3>Scan to 3D</h3>
        <p>Upload floor plans and instantly generate walkable 3D models.</p>
      </div>
      <div class="feature-card">
        <img src="/icons/edit-icon.png" />
        <h3>Fully Customizable</h3>
        <p>Every wall, floor, roof, window, and material — fully editable.</p>
      </div>
      <div class="feature-card">
        <img src="/icons/share-icon.png" />
        <h3>Public & Private Builds</h3>
        <p>Browse public projects or create private masterpieces.</p>
      </div>
    </div>

    <div class="footer">
      <p>&copy; 2025 HexaNest — The Future of Home Design</p>
    </div>
  </div>
</template>

<style scoped>
.home {
  background: linear-gradient(to bottom, #f9fbfd, #eaeef3);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid #ddd;
}

.logo {
  font-size: 26px;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.nav-links a:hover {
  color: #007bff;
}

.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 80px;
}

.hero-content {
  max-width: 50%;
}

.hero-content h1 {
  font-size: 3.8rem;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-content p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
}

.buttons {
  display: flex;
  gap: 20px;
}

.btn {
  padding: 12px 24px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
}

.btn.primary {
  background-color: #007bff;
  color: white;
}

.btn.primary:hover {
  background-color: #0065d8;
}

.btn.secondary {
  background-color: #28a745;
  color: white;
}

.btn.secondary:hover {
  background-color: #218838;
}

.hero-image img {
  width: 550px;
  border-radius: 30px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
}

.features {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 80px 60px;
}

.feature-card {
  background: white;
  border-radius: 20px;
  padding: 30px;
  flex: 1;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-8px);
}

.feature-card img {
  width: 60px;
  margin-bottom: 20px;
}

.feature-card h3 {
  margin-bottom: 10px;
  font-size: 1.4rem;
}

.feature-card p {
  color: #666;
  font-size: 1rem;
}

.footer {
  text-align: center;
  padding: 20px;
  background: #fafafa;
  border-top: 1px solid #ddd;
  margin-top: auto;
}
</style>
