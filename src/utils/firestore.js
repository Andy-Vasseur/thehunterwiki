// Imports
import { getDocs, getDoc, doc, collection } from "firebase/firestore";
import { db } from "../firebaseconfig";

// Get all the reserves from the database
const getAllReserves = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Get a reserve by its ID from the database
const getReserveByID = async (collectionName, id) => {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("No such document!");
  }
};

// Get all the animals from the database
const getAllAnimals = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Export the functions
export { getAllReserves, getReserveByID, getAllAnimals };
