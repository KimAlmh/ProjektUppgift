let isEmailCorrect = false;

function validateEmail() {
  var emailValue = document.getElementById("email").value;
  var email = document.getElementById("email");
  var button = document.getElementById("submit");
  var emailError = document.getElementById("emailError");
  var re = /^\b[A-ZÅÄÖåäö0-9._%+-]+@[A-ZÅÄÖåäö0-9.-]+\.[A-Z]{2,4}\b$/i;
  if (re.test(emailValue)) {
    email.style.border = "1px solid #e6e6e6";
    isEmailCorrect = true;
    button.style.backgroundColor = "#00ad5f";
    button.style.pointerEvents = "auto";
    emailError.style.display = "none";
  } else if (emailValue === "") {
    email.style.border = "1px solid #e6e6e6";
    isEmailCorrect = false;

    emailError.style.display = "none";
    button.style.backgroundColor = "grey";
    button.style.pointerEvents = "none";
  } else {
    email.style.border = "red solid 2px";
    isEmailCorrect = false;
    button.style.backgroundColor = "grey";
    button.style.pointerEvents = "none";
    emailError.style.display = "flex";
  }
}

function validateSubmit() {
  if (!isEmailCorrect) {
    var emailError = document.getElementById("emailError");
    emailError.style.display = "flex";
    return false;
  }
  return true;
}
