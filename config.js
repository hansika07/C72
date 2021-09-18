import * as firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyDdtqOXfdBJNhQHtjPL3rdZ16MgfpnL5Fw",
    authDomain: "wilyapp-a035e.firebaseapp.com",
    projectId: "wilyapp-a035e",
    storageBucket: "wilyapp-a035e.appspot.com",
    messagingSenderId: "548109584473",
    appId: "1:548109584473:web:218606ed874b2d4abfc948"
};
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();