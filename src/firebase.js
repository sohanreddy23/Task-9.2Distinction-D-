import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyADBxas-4TsnRBUrzDWBEBd8bD10hGyt74",
  authDomain: "deakin-task.firebaseapp.com",
  projectId: "deakin-task",
  storageBucket: "deakin-task.appspot.com",
  messagingSenderId: "693444255941",
  appId: "1:693444255941:web:7b0f75e67558a894c5d0ac",
  measurementId: "G-4F7K3VTC2T"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)