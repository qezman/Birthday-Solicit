// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaJLJw2GUC50DxxvN3Sn-gWxYqL00UhTc",
  authDomain: "birthday-app-c5fcf.firebaseapp.com",
  projectId: "birthday-app-c5fcf",
  storageBucket: "birthday-app-c5fcf.appspot.com",
  messagingSenderId: "921889173296",
  appId: "1:921889173296:web:d19f323631d84f539762f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app