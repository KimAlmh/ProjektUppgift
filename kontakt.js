function validateEmail() {
  
    var emailValue = document.getElementById("email").value;
    var email = document.getElementById("email");
    var re = /^\b[A-ZÅÄÖåäö0-9._%+-]+@[A-ZÅÄÖåäö0-9.-]+\.[A-Z]{2,4}\b$/i;
    if (re.test(emailValue)) {
        email.style.border = "green solid 2px";
        return true;
    }
    else if (emailValue === ""){
        email.style.border = "1px solid #e6e6e6";
    }
    else {
        email.style.border = "red solid 2px";
        return false;
    }
}