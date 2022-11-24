const firebaseConfig = {
    apiKey: "AIzaSyBuKuMtCroteJV8NLEizAANZu4qD2PAMhE",
    authDomain: "daxoppgave-s.firebaseapp.com",
    projectId: "daxoppgave-s",
    storageBucket: "daxoppgave-s.appspot.com",
    messagingSenderId: "269799635248",
    appId: "1:269799635248:web:38c0b80c4b5362731a30f5"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  