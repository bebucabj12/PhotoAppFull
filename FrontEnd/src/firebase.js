let firebase = require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyDSOBCu4AXjKBanlFKw8ISXPYgGh6Ioc7Q",
    authDomain: "pint2-dbc25.firebaseapp.com",
    databaseURL: "https://pint2-dbc25.firebaseio.com",
    projectId: "pint2-dbc25",
    storageBucket: "",
    messagingSenderId: "530684983250",
    appId: "1:530684983250:web:b0a13c3435d132fe"
  };

firebase.initializeApp(firebaseConfig)

export default firebase;
