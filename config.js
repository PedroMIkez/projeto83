import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDzpZBgKTMen5oeTeRkwEEC44geiY7P3_Q",
  authDomain: "projeto78-55383.firebaseapp.com",
  projectId: "projeto78-55383",
  storageBucket: "projeto78-55383.appspot.com",
  messagingSenderId: "266991680172",
  appId: "1:266991680172:web:3d3988438512d78f383d09"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
