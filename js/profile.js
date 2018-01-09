$(document).ready(function() {
  $('.button-collapse').sideNav();
  $('#name-user').text(localStorage.name);
  $('#foto').attr('src',localStorage.photo);
  var $seguidores = $('#seguidores');
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyBTyPXp0vll8d2Fvi5nViLsKntlNxapEFY',
    authDomain: 'red-social-a1aeb.firebaseapp.com',
    databaseURL: 'https://red-social-a1aeb.firebaseio.com',
    projectId: 'red-social-a1aeb',
    storageBucket: 'red-social-a1aeb.appspot.com',
    messagingSenderId: '445743781768'
  };
  console.log(localStorage.id);
  firebase.initializeApp(config);
  var dbRef = firebase.database().ref('usuarios');
  var dbRefUsu = dbRef.child(localStorage.id);
  dbRefUsu.on('value', function(snap) {
    $seguidores.text((snap.val()['seguidores']));
  });
});