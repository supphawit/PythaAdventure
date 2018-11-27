
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  console.log("Login Success")
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log("log out")
  });
}


// var userData ={
//   id: 101887533896764074416,
//   name: "Somsri Cat",
//   email: "arm.as.zxc@gmail.com",
//   imageURL: "https://lh4.googleusercontent.com/-JW-UTLa9aNE/AAAAAAAAAAI/AAAAAAAAAoo/c915uV4LM_s/s96-c/photo.jpg",
// }

// User.create(userData,function(err,user){
//   if (err){
//     return next(err)
//   }else{
//     return console.log("success")
//   }
// })