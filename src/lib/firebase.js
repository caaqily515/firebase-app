import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
   apiKey: "AIzaSyAmBNqAZTetnHXCQq_z_Powp_pjZr9hdTc",
  authDomain: "hazzazi-e4d41.firebaseapp.com",
  projectId: "hazzazi-e4d41",
  storageBucket: "hazzazi-e4d41.firebasestorage.app",
  messagingSenderId: "312984936695",
  appId: "1:312984936695:web:51762718f067a01484f3f2",
};

// Initialize Firebase only if it hasn't been initialized already
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app); 
