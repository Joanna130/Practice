
var firebaseConfig = {
    apiKey: "AIzaSyCjSmTtv3FpY3AZQXlanlFYCRUmnR-CDfo",
    authDomain: "class94-7c731.firebaseapp.com",
    databaseURL: "https://class94-7c731-default-rtdb.firebaseio.com",
    projectId: "class94-7c731",
    storageBucket: "class94-7c731.appspot.com",
    messagingSenderId: "30372804372",
    appId: "1:30372804372:web:7a5305927b891fb67b3401"
  };
  
  
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding User"
      });
  }