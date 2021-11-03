import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBRqK4rXHe-8ECdAxwn7i91uXQp1gSR9Zo",
  authDomain: "instagram-clone-a8b29.firebaseapp.com",
  projectId: "instagram-clone-a8b29",
  storageBucket: "instagram-clone-a8b29.appspot.com",
  messagingSenderId: "404761217265",
  appId: "1:404761217265:web:1777763f9763c2e3178150",
  measurementId: "G-YN33533V6K",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
