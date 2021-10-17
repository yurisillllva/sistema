import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyB9mRaPlL76WGF7IfQcP1HEUXHJUwy3zfk",
    authDomain: "sistema-32a2b.firebaseapp.com",
    projectId: "sistema-32a2b",
    storageBucket: "sistema-32a2b.appspot.com",
    messagingSenderId: "1085436566982",
    appId: "1:1085436566982:web:489f3db3049046e05d26c7",
    measurementId: "G-D3PQ93XQMV"
  };
  
  
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;