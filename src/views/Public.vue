<template>
  <div class="public">
    <div class="header">
      <h1>Explore Public Company Builds</h1>
      <p>View fully customizable designs posted by companies.</p>
    </div>

    <!-- Build List -->
    <div class="build-list">
      <div
        v-for="build in publicBuilds"
        :key="build.id"
        class="build-card"
        @click="selectBuild(build)"
      >
        <img :src="build.previewImage" alt="Build Preview" />
        <div class="build-info">
          <h3>{{ build.name }}</h3>
          <p>{{ build.description }}</p>
          <div class="company-tag">{{ build.company }}</div>
        </div>
      </div>
    </div>

    <!-- 3D Viewer & Customizer -->
    <div v-if="selectedBuild" class="workspace">
      <div class="viewer">
        <SceneViewer :modelUrl="selectedBuild.modelUrl" @set-material="applyMaterial" />
      </div>
      <div class="customizer">
        <CustomizationPanel @set-material="applyMaterial" />
      </div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase';
import SceneViewer from '@/components/SceneViewer.vue';
import CustomizationPanel from '@/components/CustomizationPanel.vue';

export default {
  name: 'Public',
  components: { SceneViewer, CustomizationPanel },
  data() {
    return {
      publicBuilds: [],
      selectedBuild: null
    };
  },
  async mounted() {
    await this.fetchPublicBuilds();
  },
  methods: {
    async fetchPublicBuilds() {
      const q = query(collection(db, 'builds'), where('visibility', '==', 'public'));
      const querySnapshot = await getDocs(q);
      this.publicBuilds = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },
    selectBuild(build) {
      this.selectedBuild = build;
    },
    applyMaterial(payload) {
      this.$refs.sceneViewer?.applyMaterial(payload);
    }
  }
};
</script>
