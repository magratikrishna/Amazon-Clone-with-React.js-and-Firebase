import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCFsdvNJ9ux_Gj-TC1ww2HtJ_D4_vd3DS0",
    authDomain: "clone-c0330.firebaseapp.com",
    databaseURL: "https://clone-c0330.firebaseio.com",
    projectId: "clone-c0330",
    storageBucket: "clone-c0330.appspot.com",
    messagingSenderId: "900118339087",
    appId: "1:900118339087:web:24830f5cc6f5eeb2338d7a",
    measurementId: "G-T7MNP67MLE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };