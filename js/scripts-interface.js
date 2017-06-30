var UserProfile = require('./../js/scripts.js').UserProfileModule;
// var userInput;
$(document).ready(function() {
  $('#search').on('keyup', function(event) {
    console.log(event.target.value);
    // userInput = event.target.value;
    var userGit = new UserProfile;
    userGit.getProfile();
    // console.log(userInput);
  });
});
