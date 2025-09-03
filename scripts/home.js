let container = document.querySelector(".container");
for (let i=0; i<256; i++){
  let box = document.createElement("div");
  box.classList.add("box");
  container.appendChild(box);
}

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
