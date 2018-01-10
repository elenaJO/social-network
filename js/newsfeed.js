// Initialize Firebase
$(document).ready(function() {
  // configuración a firebase
  var config = {
    apiKey: 'AIzaSyBTyPXp0vll8d2Fvi5nViLsKntlNxapEFY',
    authDomain: 'red-social-a1aeb.firebaseapp.com',
    databaseURL: 'https://red-social-a1aeb.firebaseio.com',
    projectId: 'red-social-a1aeb',
    storageBucket: 'red-social-a1aeb.appspot.com',
    messagingSenderId: '445743781768'
  };
  firebase.initializeApp(config);
   // variables necesarias para funcionalidad

  var $textArea = $('#textarea1');
  var $postButton = $('#postButton');
  var $date = moment().format('LT');

  var $valueTextTarea = $textArea.val();
  var $postButton2 = $('a[type=submit]');

  // Evento de lectura de imagen 
  $('#file-select').on('click', function(event) {
    event.preventDefault();
    $('#file').click();
  });

  $('input[type=file]').change(function() {
    var file = (this.files[0].name).toString();

    var reader = new FileReader();
    $('#file-info').text('');
    $('#file-info').text(file);
    $postButton2.attr('disabled', false);

    $postButton.on('click', function(event){
      reader.onload = function(event) {
        $('#preview img').attr('src', event.target.result);
       
      };
      reader.readAsDataURL(this.files[0]);
     });
  });

   

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

});

