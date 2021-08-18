import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDKBY-3wsmdrY8xR61xxcOnPOkS-dJ00PI",
    authDomain: "moneyflow-50d29.firebaseapp.com",
    projectId: "moneyflow-50d29",
    storageBucket: "moneyflow-50d29.appspot.com",
    messagingSenderId: "613177909065",
    appId: "1:613177909065:web:b686d025cd0a214cd20498"
};

firebase.initializeApp(firebaseConfig)

export const firebaseInstance = firebase;
export const authService = firebase.auth()
export const dbService = firebase.firestore()