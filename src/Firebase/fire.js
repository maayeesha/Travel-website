import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDpGxUmKHMvvGAGgV0g3grXSS2UQNXMa-s",
    authDomain: "roam-82e86.firebaseapp.com",
    projectId: "roam-82e86",
    storageBucket: "roam-82e86.appspot.com",
    messagingSenderId: "500710878492",
    appId: "1:500710878492:web:ce51fc23e0bc6305ddded9"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
