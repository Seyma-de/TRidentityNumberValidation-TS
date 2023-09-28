var submitBtn = document.querySelector(".btn-primary");
var resultMessage = document.querySelector(".result");
var girilenDeger = document.querySelector(".num");
var inputEntered = document.getElementById("tcNum");
var form = document.querySelector("#myForm");
var check = true;
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var enteredNumber = inputEntered.value;
    var digits = enteredNumber.split("");
    var tek = 0;
    var cift = 0;
    var digitsTotal = 0;
    var numbers = /^[0-9]+$/;
    girilenDeger.innerHTML = "".concat(enteredNumber);
    if (!enteredNumber.match(numbers)) {
        resultMessage.innerHTML = "&#10060; Sadece rakam girebilirsiniz";
        inputEntered.value = "";
    }
    else if (digits.length !== 11) {
        resultMessage.innerHTML =
            "&#10060; TC Kimlik Numarasi 11 haneli olmalidir.";
        inputEntered.value = "";
    }
    else if (digits[0] == "0") {
        resultMessage.innerHTML = "&#10060; TC Kimlik Numarasi 0 ile baslayamaz";
        inputEntered.value = "";
    }
    else {
        tek =
            parseInt(digits[0]) +
                parseInt(digits[2]) +
                parseInt(digits[4]) +
                parseInt(digits[6]) +
                parseInt(digits[8]);
        cift =
            parseInt(digits[1]) +
                parseInt(digits[3]) +
                parseInt(digits[5]) +
                parseInt(digits[7]);
        console.log(tek);
        console.log(cift);
        if ((tek * 7 - cift) % 10 == parseInt(digits[9])) {
            for (var i = 0; i < 10; i++) {
                digitsTotal += parseInt(digits[i]);
            }
            console.log(digitsTotal);
            if (digitsTotal % 10 == parseInt(digits[10]))
                check = true;
            else
                check = false;
        }
        else {
            check = false;
        }
        check == false
            ? (resultMessage.innerHTML = "&#10060; GECERSIZ TC Kimlik No")
            : (resultMessage.innerHTML = "&#9989; GECERLI TC Kimlik No");
        inputEntered.value = "";
    }
});
