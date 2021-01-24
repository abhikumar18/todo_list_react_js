import firebase from "firebase";
const firebaseApp = firebase.initializeApp (
{
    apiKey: "AIzaSyA1xQRsu6sxw_uPbpV8EoHRa-aVBObQ9uQ",
    authDomain: "todo-list-react-254a7.firebaseapp.com",
    databaseURL: "https://todo-list-react-254a7-default-rtdb.firebaseio.com",
    projectId: "todo-list-react-254a7",
    storageBucket: "todo-list-react-254a7.appspot.com",
    messagingSenderId: "544620058126",
    appId: "1:544620058126:web:268e65c2b231364ef44e5f",
    measurementId: "G-EFVC72PKXE"
});

const db = firebaseApp.firestore();

export default db;