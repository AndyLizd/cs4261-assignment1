import * as firebase from 'firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyBUZtgGlNkZP7Z_mymxM-Os0ER96PECnbA",
    authDomain: "cs4261-assignment1-67f47.firebaseapp.com",
    databaseURL: "https://cs4261-assignment1-67f47-default-rtdb.firebaseio.com",
    projectId: "cs4261-assignment1-67f47",
    storageBucket: "cs4261-assignment1-67f47.appspot.com",
    messagingSenderId: "548272786662",
    appId: "1:548272786662:web:c73b2aed28a29df5c8ff27"
};

let app = firebase.initializeApp(firebaseConfig);
export const db = app.database();