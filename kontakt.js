let isEmailCorrect = false;

function validateEmail() {
    var emailValue = document.getElementById("email").value;
    var email = document.getElementById("email");
    var button = document.getElementById("submit");
    var re = /^\b[A-ZÅÄÖåäö0-9._%+-]+@[A-ZÅÄÖåäö0-9.-]+\.[A-Z]{2,4}\b$/i;
    if (re.test(emailValue)) {
        email.style.border = "1px solid #e6e6e6";
        isEmailCorrect = true;
        button.style.backgroundColor = "#00ad5f";
        button.style.pointerEvents = "auto";
    }
    else if (emailValue === ""){
        email.style.border = "1px solid #e6e6e6";
        isEmailCorrect = false;

        button.style.backgroundColor = "grey";
        button.style.pointerEvents = "none";
    }
    else {
        email.style.border = "red solid 2px";
        isEmailCorrect = false;
        button.style.backgroundColor = "grey";
        button.style.pointerEvents = "none";
    }
}

function validateSubmit(){
    if(!isEmailCorrect){
        alert("Email not correct!");
        return false;
    }
    return true;

}