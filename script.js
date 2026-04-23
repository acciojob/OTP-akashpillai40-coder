let codes = document.querySelectorAll(".code");

document.addEventListener("DOMContentLoaded", () => {
  //codes[0].focus();
});

codes.forEach((input, index) => {

  input.addEventListener("input", (e) => {
    let value = e.target.value;

    if (!/^[0-9]$/.test(value)) {
      input.value = "";
      return;
    }

    if (value && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });
///Backspace logic
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {

      if (index > 0) {
        codes[index - 1].focus();
        codes[index - 1].value = "";
      }

    }
  });

});