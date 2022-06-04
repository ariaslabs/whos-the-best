import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMErqjYEuq9DPoCtHwxA3fxgRohJSlEJc",
  authDomain: "whos-the-best-c832b.firebaseapp.com",
  projectId: "whos-the-best-c832b",
  storageBucket: "whos-the-best-c832b.appspot.com",
  messagingSenderId: "782211707737",
  appId: "1:782211707737:web:0dc64ecc67d198940b9248",
  measurementId: "G-EPBQ435514"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);