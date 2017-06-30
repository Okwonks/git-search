var apiKey = require('./../.env').apiKey;
var apiKey = "1d2c105357c360a3715c3c653c1c0641820e0033"
// console.log(userInput);
UserProfile = function() {
};


UserProfile.prototype.getProfile = function(userInput) {
   $.get('https://api.github.com/users/' + userInput + '?access_token=' + apiKey).then(function(response) {
    // console.log(response);
    // $.get('https://api.github.com/users/' + userInput +'/repos').then(function(repository) {
    //   url: 'https://api.github.com/users/'+username+'/repos',
    //   sort: 'created: asc',
    //   per_page: 5
    // }).then(function(repository) {
    //   $.each(repos, function (index, repository){
    //         console.log(repository);
    //     $('#repos').append(`
    //                 <div class='well'>
    //                     <div class='row'>
    //                         <div class='col-md-7'>
    //                             <strong>${repo.name}<strong>: ${repo.description}
    //                         </div>
    //                         <div class='col-md-3'>
    //                             <span class="label label-default">Forks: ${repository.forks_count}</span>
    //                             <span class="label label-primary">Watchers: ${repository.watchers_count}</span>
    //                             <span class="label label-success">Stars: ${repository.stargazers_count}</span>
    //                         </div>
    //                         <div class='col-md-2'>
    //                         <a href='${repository.html_url}' target='_blank' class='btn btn-default'>Repo Page</a>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 `);
    //             });
    // });
    $('#profile').html(`
      <div class="row">
        <div class="col-md-3" id="user-image">
          <img class="img-responsive" src="${response.avatar_url}" alt="user-image" title="${response.name}">
          <hr>
          <h4>User Bio</h4>
          <p>${response.bio}<p>
          <hr>
          <span class="label label-primary">Followers ${response.followers}</span>
          <span class="label label-primary">Following ${response.following}</span>
        </div>
        <div class="col-md-6">
          <h3>User Details</h3>
          <hr>
          <div class="well">
            <ul class="list-group">
              <li class="list-group-item"><h5>Name:</h5>${response.name}</li>
              <li class="list-group-item"><h5>Email:</h5> ${response.email}</li>
              <li class="list-group-item"><h5>Location:</h5> ${response.location}</li>
              <li class="list-group-item"><h5>Hireable:</h5> ${response.hireable}</li>
            </ul>
          </div>
        </div>
      </div>
        `);
  }).fail(function(error) {
    // console.log(error.responseJSON.message);
  });
};
exports.UserProfileModule = UserProfile;
