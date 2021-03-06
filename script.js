// creating variables to query all the DOM elements
const container = document.querySelector(".container");
const resetButton = document.querySelector(".resetGrid");

// create a function to remove all child nodes from a parent node
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// create a function to generate a grid of specific number of squares
function createGrid(numOfSquares) {
	removeAllChildNodes(container);
	container.style.gridTemplateColumns = `repeat(${numOfSquares}, auto)`;
	container.style.gridTemplateRows = `repeat(${numOfSquares}, auto)`;
	for (i = 1; i <= numOfSquares * numOfSquares; i++) {
		let grid = document.createElement("div");
		grid.className="grid grid-" + i;

		container.appendChild(grid);
	}
}

// create a function to generate a random color 
function randomColor(item) {
	let x = Math.floor(Math.random() * 256);
	let y = Math.floor(Math.random() * 256);
	let z = Math.floor(Math.random() * 256);
	let bgColor = `rgb(${x}, ${y}, ${z})`;
	item.style.backgroundColor = bgColor;
}

// create a function to change the color of a square based on a mouse hover
function changeColor(gridItems) {
	gridItems.forEach(item => {
		item.addEventListener("mouseover", event => {
			randomColor(item);
	})
	})
}

// create a function to clear the grid and reset the color back to black
function clearGrid(gridItems) {
	for (j = 0; j < gridItems.length; j++) {
		gridItems[j].style.backgroundColor = "black";
	}
}

// create a function to prompt user for a valid number of squares
function promptSquares() {
	let numOfSquares = 0;

	do {
		numOfSquares = prompt("How many squares per side? (Enter number less than 50 or greater than 2) ");
	} while(numOfSquares > 50 || numOfSquares < 2);

	return numOfSquares;
}

// create a function to reset the grid and prompt the user for number of squares
function resetButtonAction() {
	resetButton.addEventListener("click", event => {
		let gridItems = document.querySelectorAll(".grid");
		clearGrid(gridItems);
		let numOfSquares = promptSquares();
		createGrid(numOfSquares);
		gridItems = document.querySelectorAll(".grid");
		changeColor(gridItems);
	})
}


// create a main function to initialize the program
function main() {
	createGrid(16);
	let gridItems = document.querySelectorAll(".grid");
	clearGrid(gridItems);
	changeColor(gridItems);
	resetButtonAction();
}

main();