var apiKey = "1d2c105357c360a3715c3c653c1c0641820e0033";
// var getRepo = function() {
//
// };

$(document).ready(function() {
  $('#search').on('keyup', function(event) {
    console.log(event.target.value);
    var userInput = event.target.value;
    $.get('https://api.github.com/users/' + userInput + '?access_token=' + apiKey).then(function(response) {
      console.log(response);
      $('#profile').html(`
        <p>${response.public_repos}</p>
        <p>${response.name}</p>
        <img src="${response.avatar_url}">
        `)
    }).fail(function(error) {
      console.log(error.responseJSON.message);
    });
    // console.log(userInput);
  });
});

// getRepo();
