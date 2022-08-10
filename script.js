const container = document.querySelector("#container");
const sizeSelector = document.querySelector("#size");
makeGrid(16);
sizeSelector.addEventListener("click", () => makeGrid(getSize()));

function getSize() {
	return prompt("Enter the size of one side of the grid:");
}

function makeGrid(size) {
	clearGrid();

	if (size > 100) size = limitSize();
	container.setAttribute(
		`style`,
		`grid-template: 
        repeat(${size}, ${100 / size}%) / repeat(${size}, ${100 / size}%)`
	);

	for (let i = 0; i < size * size; i++) {
		let square = document.createElement("div");
		square.classList.add("squares");
		square.addEventListener("mousemove", () => square.classList.add("colored"));
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
