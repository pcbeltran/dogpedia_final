import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-Dsja8-OCDGQXya3XmUYYG9ClvAxAVJM",
  authDomain: "wikidogs-38171.firebaseapp.com",
  databaseURL: "https://wikidogs-38171.firebaseio.com",
  projectId: "wikidogs-38171",
  storageBucket: "wikidogs-38171.appspot.com",
  messagingSenderId: "818543450515",
  appId: "1:818543450515:web:fe2ebf5a30033c9fac3066"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const breedsCollection = db.collection("breeds");

export default db;
export { breedsCollection };
