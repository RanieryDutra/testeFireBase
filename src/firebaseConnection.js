import firebase from 'firebase/app';
import 'firebase/database';

let config = {
    apiKey: "AIzaSyAYnlHP6TrDU7jAzWcUqYirylDKLs5NJ_A",
    authDomain: "alljobs-8f75a.firebaseapp.com",
    databaseURL: "https://alljobs-8f75a.firebaseio.com",
    projectId: "alljobs-8f75a",
    storageBucket: "alljobs-8f75a.appspot.com",
    messagingSenderId: "1091690749675",
    appId: "1:1091690749675:web:a90443b505365a2aac28ae",
    measurementId: "G-T226P8PWKK"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(config);
  }