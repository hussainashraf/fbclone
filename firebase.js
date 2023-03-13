import firebase from 'firebase'
import "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyC795njoq_jJaRz5rrDXi-yNzGwmjWlBVA",
    authDomain: "fbclone-98bfe.firebaseapp.com",
    projectId: "fbclone-98bfe",
    storageBucket: "fbclone-98bfe.appspot.com",
    messagingSenderId: "907641884677",
    appId: "1:907641884677:web:2d2fbd9145ab7c74884c6c"
  };

  const app = !firebase.apps.length?firebase.initializeApp(firebaseConfig) : firebase.app()
  const db = app.firestore();
  const storage = firebase.storage();
  export{db,storage};