// var apiKey = require('./../.env').apiKey;
var apiKey = "1d2c105357c360a3715c3c653c1c0641820e0033";

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
