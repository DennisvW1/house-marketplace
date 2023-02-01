// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJnapLT1vteNr_B4kN3a-tEPBGra8axcI",
    authDomain: "house-marketplace-app-34d4b.firebaseapp.com",
    projectId: "house-marketplace-app-34d4b",
    storageBucket: "house-marketplace-app-34d4b.appspot.com",
    messagingSenderId: "421144363174",
    appId: "1:421144363174:web:8b5dfb1f60f496850ab467"
};

initializeApp(firebaseConfig);

export const db = getFirestore();  