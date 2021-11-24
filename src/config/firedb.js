import firebase from 'firebase/compat/app';
import "firebase/compat/auth"


const firebaseConfig = {
    apiKey: "AIzaSyAfXQjrEM2oJyF3DPsYyHBE8xq3Q0g7G_o",
    authDomain: "my-new-app-f90fd.firebaseapp.com",
    projectId: "my-new-app-f90fd",
    storageBucket: "my-new-app-f90fd.appspot.com",
    messagingSenderId: "796576034209",
    appId: "1:796576034209:web:3f462d77fb7bcd5b50afe0",
    measurementId: "G-6G6NM0QB8F"
};

const firedb = firebase.initializeApp(firebaseConfig);

export default firedb;