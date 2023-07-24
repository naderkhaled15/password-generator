const INPUT_FIELD = document.getElementById("generator-display--input"),
  COPY_ICON = document.querySelector(".copy-icon"),
  CHECK_ICON = document.querySelector(".check-icon"),
  SLIDER_RANGE = document.getElementById("generator-slider"),
  AMOUNT = document.querySelector(".generator-amount"),
  GENERATE_BUTTON = document.querySelector(".generator-button"),
  SMALL_CHARACTERS = document.getElementById("sChar"),
  LARGE_CHARACTERS = document.getElementById("cChar"),
  NUMBERS = document.getElementById("num"),
  SYMBOLS = document.getElementById("symbols");

AMOUNT.textContent = SLIDER_RANGE.value;

let capitalCh = "ABCDEFGHLJKLMNOPQRSTUVWXYZ";
let smallCh = "abcdefghljklmnopqrstuvwxyz";
let numbers = "0123456789";
let sympolCh = "~!@#$%^&*()_+=?><|:{}[]";
let password;

// generate password
const generatePassword = function () {
  let structure = capitalCh;
  password = "";

  if (SMALL_CHARACTERS.checked) {
    structure += smallCh;
  }

  if (NUMBERS.checked) {
    structure += numbers;
  }

  if (SYMBOLS.checked) {
    structure += sympolCh;
  }

  let range = Number(SLIDER_RANGE.value);
  for (let i = 0; i < range; i++) {
    let pass = Math.floor(Math.random() * structure.length);
    password += structure[pass];
  }
  INPUT_FIELD.value = password;
};

// change amount of link to slider
SLIDER_RANGE.addEventListener("input", function () {
  AMOUNT.innerText = SLIDER_RANGE.value;
});

// generate password button event
GENERATE_BUTTON.addEventListener("click", function () {
  generatePassword();
  COPY_ICON.classList.replace("hide", "copy-icon");
  CHECK_ICON.classList.replace("check-icon", "hide");
});

// copy password
COPY_ICON.addEventListener("click", function (e) {
  e.preventDefault();
  if (INPUT_FIELD.value) {
    navigator.clipboard.writeText(INPUT_FIELD.value);
    COPY_ICON.classList.replace("copy-icon", "hide");
    CHECK_ICON.classList.replace("hide", "check-icon");
  } else {
    INPUT_FIELD.placeholder = "press generate password";
  }
});
