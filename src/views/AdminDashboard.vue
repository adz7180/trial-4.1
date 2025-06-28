<template>
  <div class="admin-dashboard" v-if="isAuthorized">
    <div class="header">
      <h1>Admin Dashboard</h1>
      <p>View, manage, and moderate all company builds posted on the platform.</p>
    </div>

    <div class="build-list">
      <div
        class="build-card"
        v-for="build in allBuilds"
        :key="build.id"
      >
        <img :src="build.previewImage" alt="Preview" />
        <div class="build-info">
          <h3>{{ build.name }}</h3>
          <p>{{ build.description }}</p>
          <span class="company">Company: {{ build.company }}</span>
          <div class="status">Status: {{ build.visibility }}</div>
          <div class="featured">Featured: {{ build.featured ? 'Yes' : 'No' }}</div>
          <div class="actions">
            <button @click="toggleVisibility(build)">
              {{ build.visibility === 'public' ? 'Make Private' : 'Make Public' }}
            </button>
            <button @click="toggleFeatured(build)">
              {{ build.featured ? 'Unfeature' : 'Set Featured' }}
            </button>
            <button class="delete" @click="deleteBuild(build.id)">
              Delete Build
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase';
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default {
  name: 'AdminDashboard',
  data() {
    return {
      allBuilds: [],
      isAuthorized: false,
    };
  },
  async mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user && user.email === 'adamhaymour@gmail.com') {
        this.isAuthorized = true;
        this.fetchAllBuilds();
      } else {
        this.isAuthorized = false;
        this.$router.push('/'); // Redirect unauthorized users
      }
    });
  },
  methods: {
    async fetchAllBuilds() {
      const querySnapshot = await getDocs(collection(db, 'builds'));
      this.allBuilds = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    },
    async toggleVisibility(build) {
      const docRef = doc(db, 'builds', build.id);
      const newVisibility = build.visibility === 'public' ? 'private' : 'public';
      await updateDoc(docRef, { visibility: newVisibility });
      await this.fetchAllBuilds();
    },
    async toggleFeatured(build) {
      const docRef = doc(db, 'builds', build.id);
      const newFeatured = !build.featured;
      await updateDoc(docRef, { featured: newFeatured });
      await this.fetchAllBuilds();
    },
    async deleteBuild(id) {
      await deleteDoc(doc(db, 'builds', id));
      await this.fetchAllBuilds();
    }
  }
};
</script>

<style scoped>
.admin-dashboard {
  background: radial-gradient(circle at top, #f9fbfd, #e7ebf0);
  min-height: 100vh;
  padding: 50px 70px;
  display: flex;
  flex-direction: column;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  font-size: 3rem;
  background: linear-gradient(to right, #007bff, #00b7ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.header p {
  color: #666;
  font-size: 1.1rem;
}

.build-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.build-card {
  display: flex;
  gap: 20px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(20px);
}

.build-card img {
  width: 160px;
  height: 120px;
  object-fit: cover;
  border-radius: 14px;
}

.build-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.build-info h3 {
  margin: 0;
}

.company {
  font-weight: 500;
  color: #007bff;
}

.status, .featured {
  font-size: 0.9rem;
  padding: 4px 12px;
  border-radius: 30px;
  background: #eaeaea;
  display: inline-block;
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.actions button {
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
}

.actions .delete {
  background: #dc3545;
}
</style>
