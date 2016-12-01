import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyASG0wViWz6MrSeUUujElr7oHH1zHtfwXU",
    authDomain: "reacttodoapp-d2689.firebaseapp.com",
    databaseURL: "https://reacttodoapp-d2689.firebaseio.com",
    storageBucket: "reacttodoapp-d2689.appspot.com",
    messagingSenderId: "1069198457582"
  };
  firebase.initializeApp(config);

  var firebaseRef = firebase.database().ref();

  firebase.database().ref().set({
    app: {
      name: 'Todo App',
      version: '1.0.0'
    },
    isRunning: true,
    user: {
      name: 'Elizabeth',
      age: 25
    }
  });
  // .then(() => {
  //   console.log('Set worked!');
  // }, (e) => {
  //   console.log('Set failed');
  // })
  //
  // firebaseRef.child('user').set({
  //   name: 'Fred'
  // });
  //
  // firebaseRef.child('app').set({
  //   name: 'Todo App'
  // });

  // firebaseRef.update({
  //   isRunning: false,
  //   'app/name': 'Todo Application'
  // });
  //
  // firebaseRef.child('app').update({
  //   name: 'Todo Applicaiton'
  // }).then(() => {
  //   console.log('Update worked!');
  // }, (e) => {
  //   console.log('Update failed');
  // })

  // firebaseRef.update({
  //   'app/name': 'Todo Application',
  //   'user/name': 'Roxy'
  // })
  //
  // firebaseRef.child('app').update({ name: 'Todo Application'});
  // firebaseRef.child('user').update({ name: 'Patti'});

  // firebaseRef.child('app/name').remove();

  // firebaseRef.child('app').update({
  //   version: '2.0',
  //   name: null
  // });

  // firebaseRef.child('user/age').remove();
  //
  // firebaseRef.update({
  //   isRunning: null
  // });

// firebaseRef.once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e)
// });

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e)
// });
//
// firebaseRef.on('value', (snapshot) => {
//   console.log('Got value', snapshot.val());
// });
//
// firebaseRef.update({isRunning: false})

// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('User ref changed', snapshot.val())
// });
//
// firebaseRef.child('user').update({name: 'Rosa'});
//
// firebaseRef.child('app').update({name: 'Do these things!'});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
