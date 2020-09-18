import Firebase from 'firebase/app'


const firebaseConfig = {
    apiKey: "AIzaSyCZcACazELHRrF_6BhrprX8uHt4la3Mwj0",
    authDomain: "mymessage-f0ca7.firebaseapp.com",
    databaseURL: "https://mymessage-f0ca7.firebaseio.com",
    projectId: "mymessage-f0ca7",
    storageBucket: "mymessage-f0ca7.appspot.com",
    messagingSenderId: "557366886503",
    appId: "1:557366886503:web:2f4901aaf43df04c5bd4c2"
  };
export  const Fb = Firebase.initializeApp(firebaseConfig);

