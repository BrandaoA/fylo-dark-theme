

function validateMail() {
    let mail = document.getElementById("text").value;
    
    const errorMessage = document.querySelector(".error-msg");

    var regx = /^([a-zA-Z0-9\.\_]+)@([a-zA-Z0-9]+)[.]([a-z]{2,4})$/

    if (regx.test(mail)) {
        errorMessage.innerHTML ="Email address is valid";
        errorMessage.style.color = "hsl(176, 68%, 64%)";
    } else  {
      errorMessage.innerHTML ="Please enter a valid email address";
      errorMessage.style.color = "hsl(0, 100%, 63%)";

    }
}