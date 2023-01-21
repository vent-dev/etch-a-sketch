const gridContainer = document.querySelector('.gridContainer');
const gridCounter = document.querySelector('.gridCounter');


function displayPrompt(){
    let gridCount = prompt("What is your grid size?");
    if (gridCount < 100){
        displayGrid(gridCount);
    } else {
        return;
    }

    gridCounter.remove();
}

function displayGrid(gridCount){
    for (let i = 0; i < gridCount; i++){
        const gridRow = document.createElement('div');
        for (let i = 0; i < gridCount; i++){
            const grid = document.createElement('p');
            grid.style.margin = '0';
            grid.style.padding = '.3rem';
            grid.style.backgroundColor = 'grey';
            gridRow.appendChild(grid);
            grid.addEventListener('mousemove', () => { grid.style.backgroundColor = 'black' });
        }
        gridContainer.appendChild(gridRow);
    }   
}