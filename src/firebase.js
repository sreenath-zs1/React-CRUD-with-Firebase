import * as firebase from "firebase";

const firebaseConfig = {

  apiKey: "AIzaSyDbh8XqGyCYSLZS170EHutwDh6gPpm1DaY",

  authDomain: "react-app-7ed54.firebaseapp.com",

  databaseURL: "https://react-app-7ed54-default-rtdb.firebaseio.com",

  projectId: "react-app-7ed54",

  storageBucket: "react-app-7ed54.appspot.com",

  messagingSenderId: "161458709233",

  appId: "1:161458709233:web:8360a1060f96202ae4ff50"

};

  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();
