const inputEls = document.querySelectorAll("input:required");

inputEls.forEach(function (inputEl) {
  inputEl.addEventListener("invalid", function (event) {
    const labelEl = event.target.parentNode.querySelector("label");
    event.target.setCustomValidity(labelEl.textContent);
    event.target.parentNode.classList.add("show-error-msg");

    setTimeout(() => {
      event.target.parentNode.classList.remove("show-error-msg");
    }, 3000);
  });
});
