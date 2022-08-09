for (let i = 0; i < 256; i++) {
	let square = document.createElement("div");
	square.classList.add("squares");
    square.addEventListener('mouseover', () => square.style.backgroundColor = "#000000");
	document.querySelector("#container").appendChild(square);
};