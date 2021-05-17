import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCdB0H4_m9_4N5rHX3f8qtw4_B4kI5Df9E",
    authDomain: "whatsapp-mern-6aefa.firebaseapp.com",
    projectId: "whatsapp-mern-6aefa",
    storageBucket: "whatsapp-mern-6aefa.appspot.com",
    messagingSenderId: "59540135662",
    appId: "1:59540135662:web:d4aa8fa79a4deaf50c9dff"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;