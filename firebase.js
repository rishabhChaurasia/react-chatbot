import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD3QyVL57wt1MyHm-DlD7Mhzf6t6SNxp9M",
  authDomain: "react-chatbot-300ba.firebaseapp.com",
  projectId: "react-chatbot-300ba",
  storageBucket: "react-chatbot-300ba.appspot.com",
  messagingSenderId: "180493520283",
  appId: "1:180493520283:web:01452bf71c527f1686653e",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const firestore = getFirestore(app);

export { auth, provider, app, storage, firestore };
