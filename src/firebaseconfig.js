// Imports
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSUfCAY6iWkqjRIv9IDQgqKTYjbCT1Xkg",
  authDomain: "lebonchasseur-8454b.firebaseapp.com",
  projectId: "lebonchasseur-8454b",
  storageBucket: "lebonchasseur-8454b.appspot.com",
  messagingSenderId: "23818131611",
  appId: "1:23818131611:web:9f95e7c87ced408a444e3e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// Export the database
export { db };
