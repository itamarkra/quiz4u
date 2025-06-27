import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBlIrjPNddZpk33E0cMergIxJP-qhK8PE4",
  authDomain: "quizforeveryone-c5e23.firebaseapp.com",
  projectId: "quizforeveryone-c5e23",
  storageBucket: "quizforeveryone-c5e23.appspot.com",
  messagingSenderId: "911496855643",
  appId: "1:911496855643:web:0e487bfcfee1a83b5f7f7e"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
