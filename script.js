const container = document.querySelector("#container");
const sizeBtn = document.querySelector("#size");
const rainbowBtn = document.querySelector("#rainbow");
const monoBtn = document.querySelector("#mono");
const clearBtn = document.querySelector("#clear");

let rainbow = true;
let gridSize = 16;

makeGrid(gridSize);

monoBtn.addEventListener("click", () => {
    rainbow = false;
    makeGrid()
});
rainbowBtn.addEventListener("click", () => {
    rainbow = true;
    makeGrid()
});
clearBtn.addEventListener("click", makeGrid);
sizeBtn.addEventListener("click", () => makeGrid(getSize()));

function getSize() {
    gridSize = prompt("Enter the size of one side of the grid:");
	return gridSize;
}

function makeGrid() {
	clearGrid();

	if (gridSize > 100) gridSize = limitSize();
	container.setAttribute(
		`style`,
		`grid-template: 
        repeat(${gridSize}, ${100 / gridSize}%) / repeat(${gridSize}, ${100 / gridSize}%)`
	);

	for (let i = 0; i < gridSize * gridSize; i++) {
		let square = document.createElement("div");
		square.classList.add("squares");
		square.addEventListener("mouseover", () => {
            if(rainbow) addRandomColor(square);
            else addMonoColor(square);
        });
		container.appendChild(square);
	}
}

function clearGrid() {
	while (container.firstChild) {
		container.removeChild(container.lastChild);
	}
}

function limitSize() {
	alert("max grid size - 100x100");
	return 100;
}

function addMonoColor(element) {
    let bgColor = window.getComputedStyle(element).backgroundColor;
    let currentAlpha = parseFloat(bgColor.split(',')[3]);

    if (currentAlpha == 0)
        element.style.backgroundColor = `rgba(0, 0, 0, 0.1)`;
    else
        element.style.backgroundColor = `rgba(0, 0, 0, ${currentAlpha + 0.1})`;
    console.log(bgColor);
}

function addRandomColor(element) {
    let bgColor = window.getComputedStyle(element).backgroundColor;
    let gradientColor = window.getComputedStyle(element).backgroundImage;

    let currentAlpha = parseFloat(gradientColor.split(',')[3]);

    if (bgColor == 'rgba(0, 0, 0, 0)')
        element.style.backgroundColor = randomRGB();
    else 
        element.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, ${currentAlpha + 0.1}), rgba(0, 0, 0, ${currentAlpha + 0.1}))`;
}

function randomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// function erase(element) {
//     element.style.backgroundColor = `rgba(0, 0, 0, 0)`;
//     element.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))`;
// }