// Import the functions you need from the SDKs you need
import { initializeApp, getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmJMMPnRP_PkFvvBGRamAHG7fBq1ZAIkg",
  authDomain: "auth-complete-projec.firebaseapp.com",
  projectId: "auth-complete-projec",
  storageBucket: "auth-complete-projec.appspot.com",
  messagingSenderId: "20472972531",
  appId: "1:20472972531:web:460ecb683e8436291ea386",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
