(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// var apiKey = require('./../.env').apiKey;
var apiKey = "1d2c105357c360a3715c3c653c1c0641820e0033";
var userInput;
UserProfile = function() {
}

UserProfile.prototype.getProfile = function(userInput) {
   $.get('https://api.github.com/users/' + userInput + '?access_token=' + apiKey).then(function(response) {
    console.log(response);
    $('#profile').html(`
      <div class="row">
        <div class="col-md-3">
          <img class="img-responsive" src="${response.avatar_url}" alt="user-image" title="${response.name}">
          <hr>
          <h4>User Bio</h4>
          <p>${response.bio}<p>
          <hr>
        </div>
        <div class="col-md-6">
          <h3>User Details</h3>
          <hr>
          <div class="well">
            <ul class="list-group">
              <li class="list-group-item"><h5>Name:</h5>${response.name}</li>
              <li class="list-group-item"><h5>Email:</h5> ${response.email}</li>
              <li class="list-group-item"><h5>Location:</h5> ${response.location}</li>
              <li class="list-group-item"><h5>Hireable: ${response.hireable}</li>
            </ul>
          </div>
        </div>
      </div>
        `)
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};
exports.UserProfileModule = UserProfile;

},{}],2:[function(require,module,exports){
var UserProfile = require('./../js/scripts.js').UserProfileModule;

var userInput;
$(document).ready(function() {
  $('#search').on('keyup', function(event) {
    console.log(event.target.value);
    userInput = event.target.value;
    var userGit = new UserProfile;
    userGit.getProfile();
    // console.log(userInput);
  });
});

},{"./../js/scripts.js":1}]},{},[2]);
