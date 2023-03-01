import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBldMXO_JZiU1qfjyrI6lNmNfDQrP3TrkQ",
  authDomain: "chat-5d3a1.firebaseapp.com",
  projectId: "chat-5d3a1",
  storageBucket: "chat-5d3a1.appspot.com",
  messagingSenderId: "1075748390380",
  appId: "1:1075748390380:web:0fc2e573279fca22482cc9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);