import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  
  apiKey: "AIzaSyDqrdM7DuuKk4wi4D1mLUr46mL_tExFzgE",
  authDomain: "complaint-forum-cd29a.firebaseapp.com",
  projectId: "complaint-forum-cd29a",
  storageBucket: "complaint-forum-cd29a.appspot.com",
  messagingSenderId: "756239644532",
  appId: "1:756239644532:web:36c0da47ff811c692cde21"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

