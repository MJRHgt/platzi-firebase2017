//This Open Google Account Authentication method
var btnLogin = document.getElementById('btnLogin')
var btnLogout = document.getElementById('btnLogout')

btnLogin.addEventListener('click', function(){
    //Handle Funtionallity
    event.preventDefault()  
    //Specify that the only permission I want to google sign is user contacts
    var provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
    firebase.auth().signInWithPopup(provider)
    .then(function(userData){
        console.log(userData)
    })
    .catch(function(error){
        console.log(error)
    })
})
btnLogout.addEventListener('click', function(){
    //Funcionallity
    event.preventDefault()  
    firebase.auth().signOut()
  
  
})

//When a User for any method of Authentication Init or Close sesion, this appear
firebase.auth().onAuthStateChanged(function(user){
    if(user){
        //If User is authenticated
        btnLogin.style.display = "none"
        btnLogout.style.display = "block"
    }else{        
        btnLogin.style.display = "block"
        btnLogout.style.display = "none"
    }
    
})