//update text input with the slider's value
function updateInput(val){
    document.getElementById('textInput').value = val;
}

//Grid
let grid = document.querySelector('.container');
let clear = document.querySelector('#clear');
let slider = document.querySelector('#slider');

function buildGrid(gridSize){
    console.log("Grid Size " + gridSize);
    for(let i = 0; i < (gridSize * gridSize); i++){
        let gridItem = document.createElement('div');
        grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        grid.insertAdjacentElement('beforeend', gridItem);
    }

    let fullGrid = grid.querySelectorAll('div');
    fullGrid.forEach(item => item.addEventListener('mouseover', changeColor));
}

function changeColor(){
    this.style.background = '#000';
}

buildGrid(16);

//clear button click event handler
clear.addEventListener('click', () => {
    console.log("Clear Grid");
    let gridSize = grid.querySelectorAll('div');
    gridSize.forEach(item => item.style.background = '#fff');
});

//slider event handler
slider.addEventListener('mouseup', () => {
    let gridSize = grid.querySelectorAll('div');
    gridSize.forEach(item => item.remove());
    buildGrid(slider.value);
});