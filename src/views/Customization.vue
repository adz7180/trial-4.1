<template>
  <div class="customize">
    <!-- Header -->
    <div class="header">
      <h1>Customize Your Dream Home</h1>
      <p>Select a home size to begin full customization in ultra-realistic 3D.</p>
    </div>

    <!-- House Size Selector -->
    <div class="size-selector">
      <button
        v-for="size in houseSizes"
        :key="size.value"
        :class="['size-btn', { active: selectedSize === size.value }]"
        @click="selectSize(size.value)"
      >
        {{ size.label }}
      </button>
    </div>

    <!-- 3D Viewer and Customization Panel -->
    <div class="workspace" v-if="modelUrl">
      <div class="viewer">
        <SceneViewer ref="sceneViewer" :modelUrl="modelUrl" @set-material="applyMaterial" />
      </div>
      <div class="panel">
        <CustomizationPanel @set-material="applyMaterial" />
      </div>
    </div>
  </div>
</template>

<script>
import SceneViewer from '@/components/SceneViewer.vue';
import CustomizationPanel from '@/components/CustomizationPanel.vue';

export default {
  name: 'Customize',
  components: {
    SceneViewer,
    CustomizationPanel
  },
  data() {
    return {
      selectedSize: '',
      modelUrl: '',
      houseSizes: [
        { label: '1500 sq ft', value: '1500' },
        { label: '1800 sq ft', value: '1800' },
        { label: '2000 sq ft', value: '2000' },
        { label: '2200 sq ft', value: '2200' },
        { label: '2400 sq ft', value: '2400' },
        { label: '3000 sq ft', value: '3000' },
        { label: '5000 sq ft', value: '5000' }
      ]
    };
  },
  methods: {
    selectSize(size) {
      this.selectedSize = size;
      this.modelUrl = `/models/house${size}.glb`;
    },
    applyMaterial(material) {
      this.$refs.sceneViewer?.applyMaterial(material);
    }
  }
};
</script>

<style scoped>
.customize {
  padding: 60px 80px;
  background: linear-gradient(to bottom, #fdfdfd, #eef1f5);
  min-height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(to right, #007bff, #00cfff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
}

.header p {
  font-size: 1.2rem;
  color: #666;
}

.size-selector {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 50px;
}

.size-btn {
  background: #ffffff;
  border: 2px solid #cdd4e0;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
}

.size-btn:hover {
  background: #f0f5fc;
  transform: translateY(-2px);
}

.size-btn.active {
  background: linear-gradient(135deg, #007bff, #00cfff);
  color: white;
  border: none;
  box-shadow: 0 12px 30px rgba(0, 123, 255, 0.3);
}

.workspace {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.viewer {
  flex: 2;
  background: #fff;
  border-radius: 30px;
  padding: 20px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.05);
}

.panel {
  flex: 1.2;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 30px;
  padding: 24px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(25px);
}

@media (max-width: 1200px) {
  .workspace {
    flex-direction: column;
  }

  .viewer,
  .panel {
    width: 100%;
  }
}
</style>
