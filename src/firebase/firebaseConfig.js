import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC3xLtY_1CrsEKCIie88RzbNbgXg0fJlPA",
  authDomain: "salon-emilie.firebaseapp.com",
  projectId: "salon-emilie",
  storageBucket: "salon-emilie.firebasestorage.app",
  messagingSenderId: "1050950938397",
  appId: "1:1050950938397:web:ad6579396cea4d18d7bbf4",
  measurementId: "G-RXJWT3KJVF",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);