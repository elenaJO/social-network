$(document).ready(function () {
  $('.button-collapse').sideNav();
  $('#foto').attr('src', localStorage.photo);
  var config = {
    apiKey: 'AIzaSyBTyPXp0vll8d2Fvi5nViLsKntlNxapEFY',
    authDomain: 'red-social-a1aeb.firebaseapp.com',
    databaseURL: 'https://red-social-a1aeb.firebaseio.com',
    projectId: 'red-social-a1aeb',
    storageBucket: 'red-social-a1aeb.appspot.com',
    messagingSenderId: '445743781768'
  };
  firebase.initializeApp(config);
  // var dbRef = firebase.database().ref('usuarios');
  $('#fileButton').change(function() {
    var file = event.target.files[0];
    var storageRef = firebase.storage().ref('/' + localStorage.name + '/' + file.name);
    var task = storageRef.put(file);
    task.on('state_changed',function(snapshot) {

    }, function(error) {

    }, function(error) {
      var postKey = firebase.database().ref('Posts/').push().key;
      var downloadURL = task.snapshot.downloadURL;
      var updates = {};
      var postData = {
        url: downloadURL,
        user: localStorage.id,
        name: localStorage.name
      };
      updates['/Posts/' + postKey] = postData;
      firebase.database().ref().update(updates);
      console.log(downloadURL);
    // },
    // var storageCarp = firebase.storage().ref('/' + localStorage.name + '/');
    // var filename = file.name;
    // var fileRef = storage.child(filename);
    // var reader = new FileReader();
    // reader.onload = function(event) {
    //   $('#agrego').attr('src', event.target.result);
    // };
    // reader.readAsDataURL(this.files[0]);
    });
  });
});