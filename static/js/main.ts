function addedClickableButton() {
  const button = document.getElementById("button") as HTMLButtonElement;
  const text = document.getElementById("text") as HTMLElement;
  button.addEventListener("click", () => {
    text.textContent = `Coding For ${2026 - 2020}`;
  });
}

// function changeTextClickable() {
//   const text = document.getElementById("yearsCoding") as HTMLElement;
//   text.textContent = `Coding For ${2026 - 2020}`;
// }

addedClickableButton();
