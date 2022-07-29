import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBHsBaaKw02q1Lmbt_LQ7tYGXG6jApE1VQ",
    authDomain: "chatapp-d00a9.firebaseapp.com",
    projectId: "chatapp-d00a9",
    storageBucket: "chatapp-d00a9.appspot.com",
    messagingSenderId: "308937107084",
    appId: "1:308937107084:web:c3fa0283fac79de06ebda9",
    measurementId: "G-8L5LL2QDH6"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth= firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export{auth,provider};
  export default db;
  