console.log("2. Checking a password: flags and loop")

let password = "Dyksdf69";
let isNumber = false;
let isCaps = false;



function passwordCheckLoops(password) {

    for(let char of password) {
        if (char >= '0' && char <= '9') {
            isNumber = true;
            break;
        }
    };

    for(let char of password) {
        if (char >= 'A' && char <= 'Z') {
            isCaps = true;
            break;
        }
    };

    if (password.length < 8) {
        console.log("length must be 8 or more symbols")
    };

    if (!isNumber) {
        console.log("password must contain at least one number");
    };

    if (!isCaps) {
        console.log("password must contain at least one capital letter");
    }
}

console.log("2. Checking a password: flags and loop cleaner")
function passwordCheckFlags(password) {
    let isNumber = false; //let isNumber; undefined → значение (falsy).
    let isCaps = false; //
    let isLong = password.length>=8;


    for (let char of password){
        if(char >= '0' && char <='9') isNumber = true;
        if(char >= 'A' && char <='Z') isCaps = true;

        if(isNumber && isCaps && isLong) break;
    }

    if (!isNumber) console.log("password must contain at least one number");
    if (!isCaps) console.log("password must contain at least one Capital letter");
    if (!isLong) console.log("length mus be 8 or more symbols");

}

console.log("2. Checking a password: RegExp")
function passwordCheck(password) {
    const lengthCheck = /.{8,}/;
    const digitCheck = /\d/;       // \d → любая цифра
    const capsCheck = /[A-Z]/;     // заглавные буквы

    if (!lengthCheck.test(password)) {
        console.log("Password must be at least 8 characters");
    }
    if (!digitCheck.test(password)) {
        console.log("Password must contain at least one number");
    }
    if (!capsCheck.test(password)) {
        console.log("Password must contain at least one capital letter");
    }
}
