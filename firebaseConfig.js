import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrCQCfeeW541Sn6vwj2RZrADRiEElOZ3g",
  authDomain: "ecommerce-crud-assignment.firebaseapp.com",
  projectId: "ecommerce-crud-assignment",
  storageBucket: "ecommerce-crud-assignment.appspot.com",
  messagingSenderId: "471352560488",
  appId: "1:471352560488:web:2288b66ec2dda3e45b24dd",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
