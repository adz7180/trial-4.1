// src/firebase.js

import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAmjrr3NJok1lBtPfncRg73CLEMqF0HP1k",
  authDomain: "hexanest-c98dd.firebaseapp.com",
  projectId: "hexanest-c98dd",
  storageBucket: "hexanest-c98dd.appspot.com",
  messagingSenderId: "236347193395",
  appId: "1:236347193395:web:7ac1f6b806ab9eec6bcb46",
  measurementId: "G-3FDPF67LQC"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Services
const auth = getAuth(app);
const db = getFirestore(app);

// Role Checking Logic
export const checkUserRole = async (user) => {
  const adminEmail = "adamhaymour@gmail.com";
  const lifetimeFreeEmail = "rockwellestatehomes@yahoo.ca";

  if (!user) return null;
  const email = user.email;

  if (email === adminEmail) return 'admin';
  if (email === lifetimeFreeEmail) return 'free';
  return 'standard';
};

export { auth, db };
