import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

export default function FirebaseConfig() {
  const firebaseConfig = {
    apiKey: "AIzaSyCj5ixFyQqw8jEZ9b5fv2b36EDyBylArDw",
    authDomain: "linkci-ad651.firebaseapp.com",
    databaseURL: "https://linkci-ad651-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "linkci-ad651",
    storageBucket: "linkci-ad651.appspot.com",
    messagingSenderId: "311381215270",
    appId: "1:311381215270:web:b7fa6c77977341778fbee7",
    measurementId: "G-Q1KZY6RL08"
  }
  
  const app = initializeApp(firebaseConfig)
  return getDatabase(app)
}
