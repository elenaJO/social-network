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
  // evento de posteo
  $(function() {
    var feed = new Firebase('https://red-social-a1aeb.firebaseio.com/'); 
    var index = 0;
    
    feed.on('child_added', function(snapshot) {
      var data = snapshot.val();
      var card = '<div class="card">'+
            '<div class="header">'+
              '<div class="user-panel">'+
                '<div class="pull-left">'+
                  '<div class="user-img pull-left" style="background-image: url()"></div>'+
                  '<div class="user-info pull-left">'+
                    'Alexandra'+
                    '<Br/>'+
                    '<small>11/28/16 10:55PM</small>'+
                  '</div>'+
                '</div>'+
  
                '<div class="pull-right feed-menu">'+
                  '<i class="fa fa-ellipsis-v"></i>'+
                '</div>'+
                '<div class="clearfix"></div>'+
              '</div>'+
            '</div>'+
  
            '<div class="body">'+
            '	<div class="text">'+ data.desc +'</div>';
        if(data.img != "") {
          card +=	'<div class="img">'+
                '<img src="' + data.img + '" />'+
                          '</div>';
        }
            
          card += '</div></div>';
        $('#loading_spin').hide("fast");
        $('.loadNewsfeed').prepend(card);
    });
  // var feed = new Firebase('https://red-social-a1aeb.firebaseio.com/');  //link de database firebase

  // var index = 0;

  

  // $postButton2.on('click', function(event) {
  //   if ($textArea.val()) {

  //     var $div= $('<div></div>'); // creo un div contenedor
  //     var date = moment().format('LT'); // moment.js
  //     var $li = $( '<li></li>' ).text($textArea.val()); // li obtiene contenido de textarea
  //     var $liDate = $('<li></li>').text(date); // li obtiene datos del momento
  //     // $($liDate).prependTo('#newsfeed-post');
  //     // $($li).appendTo('#newsfeed-post');
  //     // var postInformation = ($li)
  //     $($div).html($liDate);
  //     // $($div).text($li);
      

  //     $($div).prependTo( "#newsfeed-post" );

  //     // 
  //     // $($div).text($li); // contenido de textarea pasa al div
  //    // contenido de momento pasa al div

  //     // $($div).prependTo( "#newsfeed-post" );
  //     // console.log($li);
  //     // console.log($div);
  //   }
  // });

  // // BUTTON
  // $(document).ready(function() {
  //   $('.button-collapse').sideNav();
  });

});
