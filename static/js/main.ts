type Colors = string | number | string[];

window.onload = () => {
  function getColorHandler(): Colors[] {
    return ["red", "green", "blue"];
  }

  function addedClickableButton() {
    const button = document.getElementById("button") as HTMLButtonElement;
    const text = document.getElementById("text") as HTMLElement;
    button.addEventListener("click", () => {
      text.textContent = `Coding For ${2026 - 2020} Years`;
    });

    const colors = getColorHandler();

    let color = ["red", "green", "blue"];

    const randomColor = Math.floor(Math.random() * color.length);
    const colorWindow = color[randomColor];
    text.style.color = colorWindow;

    text.addEventListener("mouseover", () => {
      addTextOver(text);
    });
  }
  addedClickableButton();
};

function addTextOver(text: HTMLElement) {
  text.textContent = `Coding For ${2026 - 2020} Years`;
}

// function changeTextClickable() {
//   const text = document.getElementById("yearsCoding") as HTMLElement;
//   text.textContent = `Coding For ${2026 - 2020}`;
// }
