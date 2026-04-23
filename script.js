//your JS code here. If required.
let codes = document.querySelectorAll(".code");

//codes[0].focus();
//add event
codes.forEach((input, index) => {
	input.addEventListener("input", (e) => {
		let value = e.target.value;

		if (!/^[0-9]$/.test(value)) {
         input.value = "";
          return;
        }

		//Jump to nxt box
		if(value && index < codes.length - 1){
			codes[index + 1].focus();
		}
	});
	input.addEventListener("keydown", (e) => {

    // BACKSPACE behavior
    if (e.key === "Backspace") {

      // if current box empty → go to previous
      if (input.value === "" && index > 0) {
        codes[index - 1].focus();
      } else {
        // delete current value
        input.value = "";
      }
    }

  });
	
})
