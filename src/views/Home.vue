<template>
  <div class="home">
    <div class="hero">
      <div class="hero-content">
        <h1>Design Your Dream Home</h1>
        <p>Scan blueprints. Customize in 3D. Build with confidence.</p>
        <div class="hero-buttons">
          <router-link to="/scan" class="btn primary">Scan Blueprint</router-link>
          <router-link to="/customize" class="btn secondary">Customize</router-link>
        </div>
      </div>
      <img src="@/assets/hero-preview.png" class="hero-preview" />
    </div>

    <div class="features">
      <div class="feature">
        <img src="@/assets/drag-icon.png" />
        <h3>Drag & Edit</h3>
        <p>Move windows, doors, walls, and furniture in real time.</p>
      </div>
      <div class="feature">
        <img src="@/assets/share-icon.png" />
        <h3>Share or Download</h3>
        <p>Export your model or share it with contractors instantly.</p>
      </div>
      <div class="feature">
        <img src="@/assets/edit-icon.png" />
        <h3>Full Customization</h3>
        <p>Change floors, lighting, walls, chandeliers, furniture, and more.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.home {
  background: linear-gradient(to bottom, #f5faff, #e0e7ef);
  min-height: 100vh;
  padding: 60px 80px;
  overflow-x: hidden;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  padding-bottom: 80px;
  border-bottom: 2px solid #eef2f6;
}

.hero-content {
  max-width: 600px;
}

.hero-content h1 {
  font-size: 4rem;
  line-height: 1.1;
  background: linear-gradient(to right, #007bff, #00b7ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
}

.hero-content p {
  font-size: 1.25rem;
  color: #666;
  margin-top: 18px;
  margin-bottom: 32px;
}

.hero-buttons {
  display: flex;
  gap: 20px;
}

.btn {
  padding: 14px 32px;
  font-size: 1rem;
  border-radius: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 14px 36px rgba(0, 123, 255, 0.2);
  text-decoration: none;
  text-align: center;
}

.btn.primary {
  background: linear-gradient(135deg, #007bff, #00b7ff);
  color: white;
}

.btn.secondary {
  background: white;
  border: 2px solid #007bff;
  color: #007bff;
}

.btn.secondary:hover {
  background: #f0f8ff;
}

.hero-preview {
  max-width: 550px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}

.features {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-top: 80px;
  flex-wrap: wrap;
}

.feature {
  flex: 1;
  background: white;
  padding: 40px;
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.feature:hover {
  transform: translateY(-6px);
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.08);
}

.feature img {
  width: 60px;
  margin-bottom: 18px;
}

.feature h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #007bff;
}

.feature p {
  color: #555;
  font-size: 1rem;
}
</style>
