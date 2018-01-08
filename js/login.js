$(document).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyBTyPXp0vll8d2Fvi5nViLsKntlNxapEFY',
    authDomain: 'red-social-a1aeb.firebaseapp.com',
    databaseURL: 'https://red-social-a1aeb.firebaseio.com',
    projectId: 'red-social-a1aeb',
    storageBucket: 'red-social-a1aeb.appspot.com',
    messagingSenderId: '445743781768'
  };
  firebase.initializeApp(config);
  
  // provedor del servicio
  var provider = new firebase.auth.GoogleAuthProvider();

  $('#login').click(function() {
    // levantar la ventana de gmail y trae un result
    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log(result.user);
    });
  });
}); 