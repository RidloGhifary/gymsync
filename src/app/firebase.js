import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKeTYNLx8W7rTXIL8HCk_F3RGNfdPPjW8",
  authDomain: "gymsync-gym.firebaseapp.com",
  projectId: "gymsync-gym",
  storageBucket: "gymsync-gym.appspot.com",
  messagingSenderId: "205116863113",
  appId: "1:205116863113:web:849cb05f1850faed5e4c58",
  measurementId: "G-49E2L13DCY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);