<template>
  <div class="scan">
    <!-- Header -->
    <div class="header">
      <h1>Scan Blueprint to 3D</h1>
      <p>
        Upload your 2D floor plan or blueprint. Our AI instantly generates a
        fully walkable, hyper-realistic 3D model that you can fully customize in real time.
      </p>
    </div>

    <!-- Upload Section -->
    <div class="upload-area">
      <label for="file-upload" class="upload-box">
        <input type="file" id="file-upload" @change="handleFileUpload" hidden />
        <div v-if="!previewImage">
          <img src="@/assets/scan-icon.png" alt="Scan Icon" />
          <p>Click to upload your blueprint</p>
        </div>
        <div v-else>
          <img :src="previewImage" class="preview-image" />
          <p>Blueprint Loaded</p>
        </div>
      </label>

      <button
        class="generate-btn"
        :disabled="!blueprintFile"
        @click="generateModel"
      >
        Generate 3D Model
      </button>
    </div>

    <!-- 3D Viewer + Customizer -->
    <div v-if="modelUrl" class="workspace">
      <div class="viewer">
        <SceneViewer :modelUrl="modelUrl" ref="sceneViewer" />
      </div>
      <div class="customizer">
        <CustomizationPanel @set-material="applyMaterial" />
      </div>
    </div>
  </div>
</template>

<script>
import SceneViewer from '@/components/SceneViewer.vue';
import CustomizationPanel from '@/components/CustomizationPanel.vue';

export default {
  name: 'Scan',
  components: { SceneViewer, CustomizationPanel },
  data() {
    return {
      blueprintFile: null,
      previewImage: null,
      modelUrl: null
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.blueprintFile = file;
        this.previewImage = URL.createObjectURL(file);
      }
    },
    async generateModel() {
      //  Connect this to your AI backend API that converts blueprint to 3D
      const generatedModelPath = `/models/generated/scan-${Date.now()}.glb`;
      this.modelUrl = generatedModelPath;
    },
    applyMaterial(payload) {
      if (this.$refs.sceneViewer) {
        this.$refs.sceneViewer.applyMaterial(payload);
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/global.scss';

body {
  overflow-x: hidden;
}

.scan {
  background: radial-gradient(circle at top, #f9fbfd, #e7ebf0);
  min-height: 100vh;
  padding: 50px 70px;
  display: flex;
  flex-direction: column;
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  font-size: 3.2rem;
  background: linear-gradient(to right, #007bff, #00b7ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
}

.header p {
  color: #666;
  font-size: 1.15rem;
}

/* Upload Area */
.upload-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
}

.upload-box {
  background: rgba(255, 255, 255, 0.85);
  border: 2px dashed #007bff;
  border-radius: 20px;
  padding: 40px 60px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s;
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
}

.upload-box:hover {
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-4px);
}

.upload-box img {
  width: 60px;
  margin-bottom: 12px;
}

.upload-box p {
  color: #007bff;
  font-weight: 600;
}

.preview-image {
  width: 200px;
  border-radius: 16px;
  margin-bottom: 12px;
  object-fit: cover;
}

/* Generate Button */
.generate-btn {
  padding: 14px 32px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #007bff, #00b7ff);
  color: white;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 14px 40px rgba(0, 123, 255, 0.3);
  transition: 0.3s;
}

.generate-btn:hover {
  transform: translateY(-4px);
}

.generate-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
  box-shadow: none;
}

/* Workspace */
.workspace {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.viewer {
  flex: 2;
  background: white;
  border-radius: 30px;
  padding: 20px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.05);
}

.customizer {
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

  .viewer,
  .customizer {
    width: 100%;
  }
}
</style>
