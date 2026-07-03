function addedClickableButton() {
  const button = document.getElementById("button") as HTMLButtonElement;
  const text = document.getElementById("text") as HTMLElement;
  setButton(button, text);
}

function setButton(btn: HTMLButtonElement, text: HTMLElement) {
  return btn.addEventListener("click", () => {
    text.textContent = `Coding For ${2026 - 2020}`;
  });
}
