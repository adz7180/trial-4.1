<template>
  <div class="customize">
    <div class="header">
      <h1>Customize Your Dream Home</h1>
      <p>Choose a home size or load a model. Then fully customize every material in hyper-realistic 3D.</p>
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

    <!-- 3D Viewer + Customization Panel -->
    <div class="workspace">
      <div class="viewer-panel">
        <SceneViewer ref="sceneViewer" :modelUrl="modelUrl" @set-material="applyMaterial" />
      </div>
      <div class="customization-panel">
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
  components: { SceneViewer, CustomizationPanel },
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
  mounted() {
    if (this.$route.query.model) {
      this.modelUrl = this.$route.query.model;
    }
  },
  methods: {
    selectSize(size) {
      this.selectedSize = size;
      this.modelUrl = `/models/house${size}.glb`;
    },
    applyMaterial(payload) {
      this.$refs.sceneViewer?.applyMaterial(payload);
    }
  }
};
</script>

<style scoped>
.customize {
  background: linear-gradient(to bottom, #f5faff, #e2e8f0);
  min-height: 100vh;
  padding: 60px 80px;
  display: flex;
  flex-direction: column;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  font-size: 3.2rem;
  background: linear-gradient(to right, #007bff, #00b7ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.header p {
  color: #555;
  font-size: 1.15rem;
  margin-top: 10px;
}

.size-selector {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
}

.size-btn {
  background: white;
  border: 2px solid #ddd;
  border-radius: 18px;
  padding: 14px 28px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.size-btn:hover {
  background-color: #f0f4f9;
  transform: translateY(-3px);
}

.size-btn.active {
  background: linear-gradient(135deg, #007bff, #00b7ff);
  color: white;
  border: none;
  box-shadow: 0 14px 36px rgba(0, 123, 255, 0.3);
}

.workspace {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.viewer-panel {
  flex: 2;
  background: white;
  border-radius: 30px;
  padding: 20px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.05);
}

.customization-panel {
  flex: 1.2;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 30px;
  padding: 24px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(25px);
}

@media (max-width: 1200px) {
  .workspace {
    flex-direction: column;
  }

  .viewer-panel,
  .customization-panel {
    width: 100%;
  }
}
</style>
