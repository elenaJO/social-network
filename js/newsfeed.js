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

  // variables necesarias para funcionalidad

  var $textArea = $('#textarea1');
  var $postButton = $('#postButton');
  var $date = moment().format('LT'); 
  var $newsfeedPostUl = $('#newsfeed-post');
  var $valueTextTarea = $textArea.val();
  var $postButton2 = $('button[type=submit]');
  console.log($postButton2);

  // habilitar funcion de postear (boton POST)
  $textArea.on('keyup', function(event) { 
    // Si textArea no contiene nada o contiene un vacío el boton se desabilita
    if ($(this).val().length === 0 || $(this).val().length === ' ') {
      $postButton2.attr('disabled', true); // desabilita el boton
      // textArea contiene algo
    } else if ($(this).val().length >= 1) {
      $postButton2.attr('disabled', false); // habilita el boton
    }
  });
  
  // BUTTON
  $(document).ready(function() {
    $('.button-collapse').sideNav();
  });
});


// twitter
// window.addEventListener('load', function(event) {
//     // boton habilitado/desabilitado y contador
//     textArea.on('keyup', function(event) {
//       caracteresTweet.textContent = (140 - textArea.value.length);
  
//       if (textArea.value.length === 0 || textArea.value === ' ') {
//         boton.disabled = true; // desabilita el boton
//       } else if (textArea.value.length >= 1 && textArea.value.length < 120) {
//         boton.disabled = false; // habilita el boton
//         caracteresTweet.classList.add('correct'); // agrega color azul
//       } else if (textArea.value.length >= 120 && textArea.value.length < 130) {
//         boton.disabled = false; // habilita el boton
//         caracteresTweet.classList.add('color1');  // agrega color verde
//       } else if (textArea.value.length >= 130 && textArea.value.length < 140) {
//         boton.disabled = false; // habilita el boton
//         caracteresTweet.classList.add('color2'); // agrega color fuxia
//       } else {
//         boton.disabled = true; // desabilita el boton
//         caracteresTweet.classList.add('incorrect'); // agrega color rojo
//       }
//     });
// var area = document.getElementById('tweet-space');
// var boton = document.getElementById('twittear');
// var lista = document.getElementById('newsfeed-tweets');
// var textArea = document.getElementById('textArea');
// var date = moment().format('LT'); 
// var caracteresTweet = document.getElementById('caracteres');

// // función general
// window.addEventListener('load', function(event) {
//   // boton habilitado/desabilitado y contador
//   textArea.addEventListener('keyup', function(event) {
//     caracteresTweet.textContent = (140 - textArea.value.length);

//     if (textArea.value.length === 0 || textArea.value === ' ') {
//       boton.disabled = true; // desabilita el boton
//     } else if (textArea.value.length >= 1 && textArea.value.length < 120) {
//       boton.disabled = false; // habilita el boton
//       caracteresTweet.classList.add('correct'); // agrega color azul
//     } else if (textArea.value.length >= 120 && textArea.value.length < 130) {
//       boton.disabled = false; // habilita el boton
//       caracteresTweet.classList.add('color1');  // agrega color verde
//     } else if (textArea.value.length >= 130 && textArea.value.length < 140) {
//       boton.disabled = false; // habilita el boton
//       caracteresTweet.classList.add('color2'); // agrega color fuxia
//     } else {
//       boton.disabled = true; // desabilita el boton
//       caracteresTweet.classList.add('incorrect'); // agrega color rojo
//     }
//   });
//   // evento de "twittear"
//   boton.addEventListener('click', function(event) {
//     if (textArea.value) { 
//       var li = document.createElement('li');
//       var tweet = document.createElement('p');
    
//       tweet.textContent = textArea.value;
//       tweet.classList.add('li'); 
//       li.appendChild(tweet);
//       lista.appendChild(tweet);
//       textArea.value = ' '; // para que textarea aparezca nuevamente en lbanco
//     }
//   });

  
// });