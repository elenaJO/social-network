$(document).ready(function() {
  $('.button-collapse').sideNav();
  /* firebase */
  var config = {
    apiKey: 'AIzaSyBTyPXp0vll8d2Fvi5nViLsKntlNxapEFY',
    authDomain: 'red-social-a1aeb.firebaseapp.com',
    databaseURL: 'https://red-social-a1aeb.firebaseio.com',
    projectId: 'red-social-a1aeb',
    storageBucket: 'red-social-a1aeb.appspot.com',
    messagingSenderId: '445743781768'
  };
  firebase.initializeApp(config);
  firebase.database().ref('/usuarios/').once('value').then(function(snapshot) {
    var usuariosArray = snapshot.val();
    var keys = Object.keys(usuariosArray);
    for (var i = 0; i < keys.length; i++) {
      var currentObject = usuariosArray[keys[i]];
      var container = '<div class="row">' +
          '<div class="col s 12 align-center">' +
            '<img src = \'' + currentObject.foto + '\'class=\'circle responsive-img col s3\' >' +
            '<p class="black-text col s9">' + currentObject.nombre + '</p>' +
          '</div>' +
        '</div>';
      $('#seccion').append(container);
      console.log(currentObject.nombre);
      console.log(currentObject.foto);
    }
  });
  // funcion para buscar los usuarios
  $('#search').on('keyup', function() {
    var nombre = $(this).val();
    $('.align-center').hide();
    $('.align-center').each(function() {
      var find = $(this).text();
      if (find.indexOf(nombre) !== -1) {
        $(this).show();
      }
    });
  });
});