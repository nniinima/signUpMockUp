var password = document.getElementById("passwordField")
  , confirm_password = document.getElementById("validateField");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  };
};

function strValidation(element, lenMin, lenMax){
    if (element.value.length >= lenMin && element.value.length <= lenMax) {
        element.classList.add('valid')
        element.classList.remove('invalid')
        switch(element.id){
            case "firstName":
                document.getElementById("first name warning").innerHTML = "";
                break;
            case "secondName":
                document.getElementById("second name warning").innerHTML = "";
                break;
            case "passwordField":
                document.getElementById("password warning").innerHTML = "";
                break;
            case "validateField":
                document.getElementById("password validation warning").innerHTML = "";
                break;
        };
    }else {
        element.classList.add('invalid')
        element.classList.remove('valid')
        switch(element.id){
            case "firstName":
                document.getElementById("first name warning").innerHTML = "should be between " + lenMin + " and " + lenMax + " characters long.";
                break;
            case "secondName":
                document.getElementById("second name warning").innerHTML = "should be between " + lenMin + " and " + lenMax + " characters long.";
                break;
            case "passwordField":
                document.getElementById("password warning").innerHTML = "should be between " + lenMin + " and " + lenMax + " characters long.";
                break;
            case "validateField":
                document.getElementById("password validation warning").innerHTML = "should be between " + lenMin + " and " + lenMax + " characters long.";
                break;
        };
    };
}

function eMailValidation(eMailId){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eMail.value)){
        eMailId.classList.add('valid');
        eMailId.classList.remove('invalid');
    }else {
        eMailId.classList.add('invalid');
        eMailId.classList.remove('valid');
    };
}

function phoneValidation(phoneId) {
    if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phoneId.value)){
        phoneId.classList.add('valid');
        phoneId.classList.remove('invalid');
        document.getElementById("phone number warning").innerHTML = "";
    }else {
        phoneId.classList.add('invalid');
        phoneId.classList.remove('valid');
        document.getElementById("phone number warning").innerHTML = "<div class='tooltip'>Check format<span class='tooltiptext'>Valid Formats:<br>(123) 456-7890<br>(123)456-7890<br>123-456-7890<br>123.456.7890<br>1234567890<br>+31636363634<br>075-63546725</span></div>";
    };
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

document.getElementById("firstName").onkeyup = function(){
    if (this.classList.contains('invalid') || this.classList.contains('valid')){
        strValidation(this, 2, 50);
    }
};

document.getElementById("firstName").onchange = function(){
    strValidation(this, 2, 50);
};

document.getElementById("secondName").onkeyup = function(){
    if (this.classList.contains('invalid') || this.classList.contains('valid')){
        strValidation(this, 2, 50);
    }
};

document.getElementById("secondName").onchange = function(){
    strValidation(this, 2, 50);
};

document.getElementById("eMail").onkeyup = function(){
    if (this.classList.contains('invalid') || this.classList.contains('valid')){
        eMailValidation(this);
    }
};

document.getElementById("eMail").onchange = function(){
    eMailValidation(this);
};

document.getElementById("phoneNumber").onkeypress = function(e) {
    var chr = String.fromCharCode(e.which);
    if ("abcdefghijklmnopqrstuvwxyzåäöABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ!#¤%&=?@£$€{/[]}`´^¨~*'§½<>|;,\"\\".indexOf(chr) >= 0)
        return false;
};

document.getElementById("phoneNumber").onkeyup = function(){
    if (this.classList.contains('invalid') || this.classList.contains('valid')){
        phoneValidation(this);
    }
};

document.getElementById("phoneNumber").onchange = function(){
    phoneValidation(this);
}

document.getElementById("passwordField").onchange = function(){
    strValidation(this, 8, 20);
};

document.getElementById("passwordField").onkeyup = function(){
    if (this.classList.contains('valid') || this.classList.contains('invalid')) {
    strValidation(this, 8, 20);
    }
};

document.getElementById("validateField").onchange = function(){
    if (this.value ==  document.getElementById("passwordField").value) {
        this.classList.add('valid');
        this.classList.remove('invalid');
        document.getElementById("password validation warning").innerHTML = "";
    }else {
        this.classList.add('invalid');
        this.classList.remove('valid');
        document.getElementById("password validation warning").innerHTML = "Passwords do not match.";
    };
    if (this.classList.contains('valid')) {
        strValidation(this, 8, 20);
    }
}