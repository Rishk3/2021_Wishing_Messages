import firebase from "firebase"

//newyar config
const firebaseConfig = {
  apiKey: "AIzaSyBlE51gQom9n5xrvVFF0eHcaQh_nDIms_Q",
  authDomain: "e-clone-f7200.firebaseapp.com",
  projectId: "e-clone-f7200",
  storageBucket: "e-clone-f7200.appspot.com",
  messagingSenderId: "1029714255657",
  appId: "1:1029714255657:web:5768ecd44c8ab4c303e138",
  measurementId: "G-16FP6YHTZP"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider()
export {auth,provider};
export default db;
 