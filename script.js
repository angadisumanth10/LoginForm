//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
//   import { getDatabase,ref,set,get,child } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";




//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyBk-S0EjzQxhdgWlOwAra2G-rYoGNEoGCw",
//     authDomain: "creativetutorial-3c6d7.firebaseapp.com",
//     projectId: "creativetutorial-3c6d7",
//     storageBucket: "creativetutorial-3c6d7.appspot.com",
//     messagingSenderId: "1052381241122",
//     appId: "1:1052381241122:web:631a323087dea2ee498f7b"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

//   //get ref to daatabase services
//   const db = getDatabase(app);

//   document.getElementById("submit").addEventListener('click', function(e){
//     set(ref(db, 'user/' + document.getElementById("username").value),
//     {
//         username: document.getElementById("username").value,
//         email: document.getElementById("email").value,
//         PhoneNumber: document.getElementById("phone").value
//     });
//     alert("Login Successful!!")
//   })
