$(document).ready(function() {
  $('.logout').on('click', function(event) {
    firebase.auth().signOut().then(function() {
      console.log('saliste');
      window.location.href = 'login.html';
    });
  });
});