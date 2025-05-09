// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";

  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAKMkYi9PP2yLFcMYvrEI6OIOLHJ_RjM3c",
    authDomain: "contact-us-form-9cf28.firebaseapp.com",
    projectId: "contact-us-form-9cf28",
    storageBucket: "contact-us-form-9cf28.firebasestorage.app",
    messagingSenderId: "330483540744",
    appId: "1:330483540744:web:0bece02dddc85fd76cc2bd"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  //input
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const contact = document.getElementById('contact').value;

  //submit button
  const submit = document.getElementById('submit');
  submit.addEventListener("click",function(event) {
    event.preventDefault()
    
       //input
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const contact = document.getElementById('contact').value;

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Account")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("errorMessage")
    // ..
  });


  })

