import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyCN9CU6JxWcTzIGCGy6Yu7dILbyO9GCE-U",
    authDomain: "contactform-ecommerce-44b58.firebaseapp.com",
    databaseURL: "https://contactform-ecommerce-44b58-default-rtdb.firebaseio.com",
    projectId: "contactform-ecommerce-44b58",
    storageBucket: "contactform-ecommerce-44b58.appspot.com",
    messagingSenderId: "156112784881",
    appId: "1:156112784881:web:47055da8775920a09d0850"
  };

  //initialize
  firebase.initializeApp(firebaseConfig);

  //reference
  var contactFormDB = firebase.database().ref('contactForm');

  document.getElementById('contactForm').addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('firstname');
    var lastname = getElementVal('lastname');
    var email = getElementVal('email');
    var webname = getElementVal('websitename');
    var message = getElementVal('message');

saveMessages(name, lastname, email, webname, message);
console.log(name, lastname, email, webname, message);
  }

  const saveMessages = (name, lastname, email, message) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name : name,
        lastname : lastname,
        email : email,
        webname : webname,
        message : message,
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }
