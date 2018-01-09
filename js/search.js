$(document).ready(function() {
  $('.button-collapse').sideNav();
  /* firebase*/
  var config = {
    apiKey: 'AIzaSyBTyPXp0vll8d2Fvi5nViLsKntlNxapEFY',
    authDomain: 'red-social-a1aeb.firebaseapp.com',
    databaseURL: 'https://red-social-a1aeb.firebaseio.com',
    projectId: 'red-social-a1aeb',
    storageBucket: 'red-social-a1aeb.appspot.com',
    messagingSenderId: '445743781768'
  };
  firebase.initializeApp(config);

  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var $imagen = $('#seccion img');
    $imagen.attr('src', result.user.photoURL);
    var $nombre = $('#seccion #name');
    $nombre.text(result.user.displayName);
    console.log(result.user);
    console.log(result.user.displayName);
    console.log(result.user.photoURL);
  });

  $('#search').keyup(function() {
    var name = $(this).val();
    console.log(name);
  });
});