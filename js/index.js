var btnLogin = document.getElementById("btnLogin");

firebase.auth().onAuthStateChanged(function(user){
    if (user) {
      console.log(user);
      //nombre del usuario
      console.log(user.displayName);
    }else {
      console.log("no tenemos usuario");
    }
  });
  
  btnLogin.addEventListener("click", function(){
    //event.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    //defino en que leguaje le va a salir el Popup de autenticacion
    firebase.auth().languageCode = 'es';
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  });