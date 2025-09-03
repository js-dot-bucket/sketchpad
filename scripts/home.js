let container = document.querySelector(".container");
function createGrid(row) {
  for (let i=0; i<(row ** 2); i++){
    let box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
  }
}
createGrid(16);

let mousedown = false;

document.body.addEventListener("mouseup", (e) => {
  mousedown = false;
  e.preventDefault();
});

["mousemove", "mousedown", "mouseup", "dragstart"].forEach((event) => { container.addEventListener(event, (e) => {
    e.preventDefault();
    if (e.target.classList.contains("box")) {
      if (e.type === "mousedown") {
        mousedown = true;
        e.target.style.backgroundColor = "blue";
      }
      if (e.type === "mousemove" && mousedown) {
        e.target.style.backgroundColor = "blue";
      }
    }
  });
});

let button = document.querySelector(".btn");

button.addEventListener("click", () => {
  let number = prompt("Enter no. of square per side you want below 50");
  if (number > 50) return;
  container.style.cssText = `width: ${number * 20}px`;
  let grid = document.querySelectorAll(".box");
  grid.forEach( box => box.remove());
  createGrid(number);
});
