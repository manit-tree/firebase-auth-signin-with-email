// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function signup() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var display_name = document.getElementById("display_name").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (result) {
      if (display_name.trim().length > 0) {
        return result.user
          .updateProfile({
            displayName: display_name,
          })
          .then(function () {
            firebase
              .auth()
              .currentUser.sendEmailVerification()
              .then(function () {
                console.log("email verification sent!");
                window.location.href = "home.html";
              });
          });
      } else {
        firebase
          .auth()
          .currentUser.sendEmailVerification()
          .then(function () {
            console.log("email verification sent!");
            window.location.href = "home.html";
          });
      }
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

function initApp() {
  var btn_signup = document.getElementById("btn-signup");

  btn_signup.addEventListener("click", function (evt) {
    evt.preventDefault();
    signup();
  });
}

window.onload = function () {
  initApp();
};
