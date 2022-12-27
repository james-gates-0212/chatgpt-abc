import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// console.log(process.env.API_KEY)

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { firebaseConfig, app, auth }