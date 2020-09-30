// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      window.location.href = "home.html";
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode === "auth/wrong-password") {
        alert("Wrong password.");
      } else {
        alert(errorMessage);
      }

      console.log(errorCode, errorMessage);
    });
}

function initApp() {
  var frm_login = document.getElementById("frm-login");

  frm_login.addEventListener("submit", function (evt) {
    evt.preventDefault();
    login();
  });
}

window.onload = function () {
  initApp();
};
