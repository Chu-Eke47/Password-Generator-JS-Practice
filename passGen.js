let btn = document.querySelector("#btn");
let closeError = document.querySelector(".closeError");
let errorMessage = document.querySelector(".errorMessage");
let errorMessagePassLength = document.querySelector(".errorMessagePassLength");

let errorMessageBox = document.querySelector(".errorMessageBox");
let closeErrorTwo = document.querySelector("closeErrorTwo");

closeError.addEventListener("click", (closeError) => {
  errorMessagePassLength.style.display = "none";
  errorMessage.style.display = "none";
  // errorMessageBox.classList.add("closeErrorTwo")
  // if(generate) {
  //   console.log("hello");
    
  // }
  // if (errorMessage.style.display="none") {
  //  closeError.style.display="none"
  // } else if ( errorMessagePassLength.style.display="none") {
  //   closeError.style.display="none"
  // }
});

btn.addEventListener("click", (generate) => {
  let passLength = document.querySelector("#passLength").value;
  passLength = Number(passLength);
  let checkUpperCase = document.querySelector("#passContUpper").checked;
  let checkLowerCase = document.querySelector("#passContLower").checked;
  let checkNumber = document.querySelector("#passContNumber").checked;
  let checkSpecial = document.querySelector("#passContSpecial").checked;

  let containsUpper;
  let containsLower;
  let containsNumber;
  let containsSpecial;
  let passwordCharacters;
  let passwordGenerated = document.querySelector(".password");

  checkUpperCase ? (containsUpper = true) : (containsUpper = false);
  checkLowerCase ? (containsLower = true) : (containsLower = false);
  checkNumber ? (containsNumber = true) : (containsNumber = false);
  checkSpecial ? (containsSpecial = true) : (containsSpecial = false);

  const charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charLower = "abcdefghijklmnopqrstuvwxyz";
  const charNumber = "1234567890";
  const charSpecial = '!"$%&*+@£';
  let charAll = "";

  containsUpper ? (charAll += charUpper) : (charAll += "");
  containsLower ? (charAll += charLower) : (charAll += "");
  containsNumber ? (charAll += charNumber) : (charAll += "");
  containsSpecial ? (charAll += charSpecial) : (charAll += "");

  let password = "";

  for (let i = 0; i < passLength; i++) {
    let randomIndex = Math.floor(Math.random() * charAll.length);
    password += charAll[randomIndex];
  }
  
  if (!containsUpper && !containsLower && !containsNumber && !containsSpecial) {
    password = "";
  }
  passwordGenerated.textContent = password;

  if (passLength === 0 || passLength < 8) {
    errorMessagePassLength.style.display = "flex";
  } else {
    errorMessagePassLength.style.display = "none";
  }
  if (!checkUpperCase && !checkLowerCase) {
    errorMessage.style.display = "flex";
  } else {
    errorMessage.style.display = "none";
  }

  if (passLength === 0) {
    closeError.style.display = "flex";
  } else if (!checkUpperCase && !checkLowerCase) {
    closeError.style.display = "flex";
  } else {
    closeError.style.display = "none";
  }
});
