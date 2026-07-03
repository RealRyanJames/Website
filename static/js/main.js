"use strict";
function addedClickableButton() {
    const button = document.getElementById("button");
    const text = document.getElementById("text");
    setButton(button, text);
    changeTextClickable();
}
function changeTextClickable() {
    const text = document.getElementById("yearsCoding");
    text.textContent = `Coding For ${2026 - 2020}`;
}
function setButton(btn, text) {
    btn.addEventListener("click", () => {
        text.textContent = `Coding For ${2026 - 2020}`;
    });
}
addedClickableButton();
