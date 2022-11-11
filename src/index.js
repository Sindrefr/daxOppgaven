import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc,
    query, where,
    orderBy, serverTimestamp,
    updateDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBuKuMtCroteJV8NLEizAANZu4qD2PAMhE",
    authDomain: "daxoppgave-s.firebaseapp.com",
    projectId: "daxoppgave-s",
    storageBucket: "daxoppgave-s.appspot.com",
    messagingSenderId: "269799635248",
    appId: "1:269799635248:web:38c0b80c4b5362731a30f5"
};

initializeApp(firebaseConfig)

const db = getFirestore()

const colRef = collection(db, 'users')


onSnapshot(colRef, snapshot => {
    let users = [];
    snapshot.docs.forEach(doc => {
        users.push({...doc.data(), id: doc.id})
    })
    console.log(users)
})

const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(colRef, {
    username: signupForm.username.value,
    password: signupForm.password.value,
  })
  .then(() => {
    signupForm.reset()
  })
})
