//validating of form as declared in the HTML form

function formValidate(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMsg = document.getElementById('errorMsg');
    var message;
    var signUp = "Sign Up Sucessfully"

    errorMsg.style.padding ='20px' 

//email

     if(email.indexOf('@') == -1 || email.length < 5) {
         message = "Enter a valid Email"
         errorMsg.innerHTML = message
         return false
     }
// password 

     if(password.length < 5 ) {
        message = 'Enter a valid Password'
        errorMsg.innerHTML = message
        return false
    }
// sign up message

    if(password.length > 5 && email.indexOf('@') == -1 && email.length > 5)
        message = 'Sign up'
        errorMsg.innerHTML = signUp
        return false   
}
 
