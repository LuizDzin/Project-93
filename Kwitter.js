var firebaseConfig = {
    apiKey: "AIzaSyAJny7qqDebHqbLaAKziGFYbxKn_QYgWkg",
    authDomain: "projeto-93-b345d.firebaseapp.com",
    databaseURL: "https://projeto-93-b345d-default-rtdb.firebaseio.com",
    projectId: "projeto-93-b345d",
    storageBucket: "projeto-93-b345d.appspot.com",
    messagingSenderId: "50190038277",
    appId: "1:50190038277:web:8eb1baaf3977b626a0336c"
  };
  

firebase.initializeApp(firebaseConfig);

function addUser() {

newUser = document.getElementById("logIn").value;

localStorage.setItem("logIn", newUser);

}