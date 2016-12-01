import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyASG0wViWz6MrSeUUujElr7oHH1zHtfwXU",
      authDomain: "reacttodoapp-d2689.firebaseapp.com",
      databaseURL: "https://reacttodoapp-d2689.firebaseio.com",
      storageBucket: "reacttodoapp-d2689.appspot.com",
      messagingSenderId: "1069198457582"
    };
    firebase.initializeApp(config);
} catch (e) {

}

  export var firebaseRef = firebase.database().ref();
  export default firebase;
