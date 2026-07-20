// =========================================================
// CONFIGURAZIONE FIREBASE
// =========================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDLqQY2FLbEJvkkglQE_Eq_bfR1GhYhw1U",
  authDomain: "torneo-bocce-pratieghi.firebaseapp.com",
  projectId: "torneo-bocce-pratieghi",
  storageBucket: "torneo-bocce-pratieghi.firebasestorage.app",
  messagingSenderId: "1002638493349",
  appId: "1:1002638493349:web:d80c5675e315aca71f6f4c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
