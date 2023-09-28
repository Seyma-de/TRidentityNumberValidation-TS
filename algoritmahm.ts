let submitBtn = document.querySelector(".btn-primary")! as HTMLButtonElement;
let resultMessage = document.querySelector(".result")! as HTMLParagraphElement;
let girilenDeger = document.querySelector(".num")! as HTMLParagraphElement;
let inputEntered = document.getElementById("tcNum")! as HTMLInputElement;
let form = document.querySelector("#myForm")! as HTMLFormElement;

let check: boolean = true;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let enteredNumber: string = inputEntered.value;

  let digits: string[] = enteredNumber.split("");
  let tek: number = 0;
  let cift: number = 0;
  let digitsTotal: number = 0;

  let numbers: RegExp = /^[0-9]+$/;

  girilenDeger.innerHTML = `${enteredNumber}`;

  if (!enteredNumber.match(numbers)) {
    resultMessage.innerHTML = "&#10060; Sadece rakam girebilirsiniz";
    inputEntered.value = "";
  } else if (digits.length !== 11) {
    resultMessage.innerHTML =
      "&#10060; TC Kimlik Numarasi 11 haneli olmalidir.";
    inputEntered.value = "";
  } else if (digits[0] == "0") {
    resultMessage.innerHTML = "&#10060; TC Kimlik Numarasi 0 ile baslayamaz";
    inputEntered.value = "";
  } else {
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
      for (let i = 0; i < 10; i++) {
        digitsTotal += parseInt(digits[i]);
      }
      console.log(digitsTotal);

      if (digitsTotal % 10 == parseInt(digits[10])) check = true;
      else check = false;
    } else {
      check = false;
    }

    check == false
      ? (resultMessage.innerHTML = "&#10060;INVALID TR ID Number ")
      : (resultMessage.innerHTML = "&#9989;VALID TR ID Number ");
    inputEntered.value = "";
  }
});
