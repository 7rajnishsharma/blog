
let firebaseConfig = {
    apiKey: "AIzaSyCxwzZeJI-wuKvjw3T5xAOlkfU_i8P426Y",
    authDomain: "blogging-website-2ea9d.firebaseapp.com",
    projectId: "blogging-website-2ea9d",
    storageBucket: "blogging-website-2ea9d.appspot.com",
    messagingSenderId: "109741051447",
    appId: "1:109741051447:web:55cb55129b14a4ba3d39b2"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
    auth.signOut();
    location.reload();
}

