// Initialize Firebase
$(document).ready(function() {
  var config = {
    apiKey: 'AIzaSyBTyPXp0vll8d2Fvi5nViLsKntlNxapEFY',
    authDomain: 'red-social-a1aeb.firebaseapp.com',
    databaseURL: 'https://red-social-a1aeb.firebaseio.com',
    projectId: 'red-social-a1aeb',
    storageBucket: 'red-social-a1aeb.appspot.com',
    messagingSenderId: '445743781768'
  };
  firebase.initializeApp(config);

  // obtener elementos
  var fileButton = document.getElementById('fileButton');

  // Vigilar selección archivo
  fileButton.addEventListener('change', function(e) {
    // obtener archivo
    var file = e.target.files[0];
    // crear un strorage ref
    var strorageRef = firebase.storage().ref('my_photos_' + file.name);

    // subir archivo
    var task = strorageRef.put(file);
  });

  // BUTTON
  $(document).ready(function() {
    $('.button-collapse').sideNav();
  });
});
