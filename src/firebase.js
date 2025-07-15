import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy1PR1bLrvOCZmcDWTn9KUCEih6hPju2o",
  authDomain: "fir-600e1.firebaseapp.com",
  projectId: "fir-600e1",
  storageBucket: "fir-600e1.firebasestorage.app",
  messagingSenderId: "185076290689",
  appId: "1:185076290689:web:6b2fd9f9c51e637659a980",
}

// Initialize Firebase only if it hasn't been initialized yet
let app
if (!getApps().length) {
  app = initializeApp(firebaseConfig)
} else {
  app = getApps()[0]
}

// Get Auth and Firestore instances
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app
