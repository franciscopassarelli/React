import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"






const firebaseConfig = {
  apiKey: "AIzaSyC_FaEec-f503g6AlzGtCRUkieT9J74MQk",
  authDomain: "app-coder-83a87.firebaseapp.com",
  projectId: "app-coder-83a87",
  storageBucket: "app-coder-83a87.appspot.com",
  messagingSenderId: "1088842078752",
  appId: "1:1088842078752:web:47c3ea19f47def63e77a45"
};



const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)