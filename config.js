import firebase from "firebase";
const firebaseConfig = {
 
    apiKey: "AIzaSyDab4t1oOm1OTrjFtmf50m865IJoWvjC3w",
    authDomain: "project-6ff6e.firebaseapp.com",
    databaseURL: "https://project-6ff6e-default-rtdb.firebaseio.com",
    projectId: "project-6ff6e",
    storageBucket: "project-6ff6e.appspot.com",
    messagingSenderId: "794310726808",
    appId: "1:794310726808:web:92e072c5bf966c85e1eced",
    measurementId: "G-QQ5X5FD5PW"
 
  };
firebase.initializeApp(firebaseConfig);
let database = firebase.database()

export { database }