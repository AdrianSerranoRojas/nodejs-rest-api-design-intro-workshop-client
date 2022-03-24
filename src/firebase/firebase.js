import firebase from "firebase/app";
import "firebase/auth";

if (!firebase.apps.length) {
  // Paste your config object here ⬇️
  const firebaseConfig = {
    apiKey: "AIzaSyACQjE4-v122YhoBKuJYxwj4VOYDo9a5Fw",
    authDomain: "nodejs-firebase-app-9d6de.firebaseapp.com",
    projectId: "nodejs-firebase-app-9d6de",
    storageBucket: "nodejs-firebase-app-9d6de.appspot.com",
    messagingSenderId: "72503611103",
    appId: "1:72503611103:web:79b41194335b2d40a2236a",
  };

  firebase.initializeApp(firebaseConfig);
} else {
  // if already initialized, use that one
  firebase.app();
}

export const auth = firebase.auth();

export function singInWithGoogle() {
  const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

  return auth.signInWithPopup(GoogleAuthProvider);
}

export function singInWithEmailAndPassword(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function singUpWithEmailAndPassword(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function sendPasswordResetEmail(email) {
  return auth.sendPasswordResetEmail(email);
}

export function signOut() {
  return auth.signOut();
}

export function getCurrentUserToken() {
  if (!auth.currentUser) {
    return null;
  }

  return auth.currentUser.getIdToken();
}

export function getCurrentUserEmail() {
  if (!auth.currentUser) {
    return null;
  }

  return auth.currentUser.email;
}
