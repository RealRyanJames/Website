"use strict";
function addedClickableButton() {
    const button = document.getElementById("button");
    const text = document.getElementById("text");
    button.addEventListener("click", () => {
        text.textContent = `Coding For ${2026 - 2020} Years`;
    });
    text.addEventListener("mouseover", () => {
        addTextOver(text);
    });
}
function addTextOver(text) {
    text.textContent = `Coding For ${2026 - 2020} Years`;
}
// function changeTextClickable() {
//   const text = document.getElementById("yearsCoding") as HTMLElement;
//   text.textContent = `Coding For ${2026 - 2020}`;
// }
addedClickableButton();
