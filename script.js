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
    gridContainer.style.cssText = 'display: flex; border: 2rem solid red; border-radius: 1rem; flex-direction: row; width: fit-content;';

    for (let i = 0; i < gridCount; i++){
        const gridRow = document.createElement('div');
        for (let i = 0; i < gridCount; i++){
            const grid = document.createElement('p');
            grid.style.cssText = 'margin: 0; padding: .3rem; background-color: grey;';
            gridRow.appendChild(grid);
            grid.addEventListener('mousemove', () => { grid.style.backgroundColor = 'black' });
        }
        gridContainer.appendChild(gridRow);
    }   
}