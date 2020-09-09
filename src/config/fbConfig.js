import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBUorqKjnR9VrxVuDAAbrPfp3ByOzMo0Lo",
    authDomain: "redux-store-a42a4.firebaseapp.com",
    databaseURL: "https://redux-store-a42a4.firebaseio.com",
    projectId: "redux-store-a42a4",
    storageBucket: "redux-store-a42a4.appspot.com",
    messagingSenderId: "546439302349",
    appId: "1:546439302349:web:b3acf642858bf0fc506d84",
    measurementId: "G-N39P9LGY29"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;