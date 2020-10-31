const container = document.getElementById('container-div');

function sketch(gridSize) {
    container.style.setProperty('grid-template-rows', `repeat(${gridSize}, ${(1 / gridSize) * 600}px)`);
    container.style.setProperty('grid-template-columns', `repeat(${gridSize}, ${(1 / gridSize) * 650}px)`);

    for (let i = 0; i < gridSize * gridSize; i++) {
        const child = document.createElement('div');
        child.style.border = "1px solid teal";
        container.appendChild(child);
        child.addEventListener('mouseover', () => {
            let randomColor = Math.floor(Math.random() * 16777216).toString(16);
            if (document.querySelector('select').value === "random") {
                child.style.backgroundColor = `#${randomColor}`;
            } else {
                child.style.backgroundColor = "pink"; 
            }
        })
    }
}

sketch(20);

document.getElementById('reset-button').addEventListener('click', resetGrid);

function resetGrid() {
    container.innerHTML = "";

    let newGridSize = prompt("Enter new grid size(1-100):");
    if (newGridSize >= 1 && newGridSize <= 100) {
        sketch(newGridSize);
    } else {
        resetGrid();
    }
}