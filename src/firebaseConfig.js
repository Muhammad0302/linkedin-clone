// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAaR_2yRIOkpjWb_Xr6q54gy4LPSl8pgIc",
    authDomain: "linkdin-clone-c193f.firebaseapp.com",
    projectId: "linkdin-clone-c193f",
    storageBucket: "linkdin-clone-c193f.appspot.com",
    messagingSenderId: "378735214284",
    appId: "1:378735214284:web:98ad296df3ebeb3a9e8c69",
    measurementId: "G-S9GFMEWY9D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();  
  const auth = firebase.auth(); 

  export {db,auth}

  