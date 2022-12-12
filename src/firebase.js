import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBadrD3jK3ICjmepG8vWqmRfC55If_gcPg",
    authDomain: "buyexperts-d86ec.firebaseapp.com",
    projectId: "buyexperts-d86ec",
    storageBucket: "buyexperts-d86ec.appspot.com",
    messagingSenderId: "999415907650",
    appId: "1:999415907650:web:347ab89665a432863374db",
    measurementId: "G-LF2JSHXNDR"
  };

  const Fire = firebase.initializeApp(firebaseConfig);

  export default Fire;