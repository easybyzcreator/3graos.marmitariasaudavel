import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaXVfz89N5VjcDR8RasPERvtGp7eQc-fs",
  authDomain: "app-marmitinhas-fit-cris.firebaseapp.com",
  projectId: "app-marmitinhas-fit-cris",
  storageBucket: "app-marmitinhas-fit-cris.firebasestorage.app",
  messagingSenderId: "439112252517",
  appId: "1:439112252517:web:5e34b219b63ec456d69a8c",
  measurementId: "G-VKCVLZ59QE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export let analytics: any = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      try {
        analytics = getAnalytics(app);
      } catch (e) {
        console.warn("Analytics not initialized:", e);
      }
    }
  }).catch(() => {});
}

