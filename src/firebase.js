import firebase from 'firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyBPXHR7mzmPzBQA6Ga9755CCbcCvyRGh0c",
    authDomain: "doctor-patient-platform-269c8.firebaseapp.com",
    databaseURL: "https://doctor-patient-platform-269c8.firebaseio.com",
    projectId: "doctor-patient-platform-269c8",
    storageBucket: "doctor-patient-platform-269c8.appspot.com",
    messagingSenderId: "364898567915",
    appId: "1:364898567915:web:3876ca82f7096bff6420ae",
    measurementId: "G-5656KMNDKL"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;