let gridCount = 16;
const gridContainer = document.querySelector('.gridContainer');


for (let i = 0; i < gridCount; i++){
    const gridRow = document.createElement('div');
    for (let i = 0; i < gridCount; i++){
        const grid = document.createElement('p');
        grid.style.cssText = 'margin: 0; padding: 1rem; background-color: red';
        grid.addEventListener('mouseover', () => { grid.style.backgroundColor = 'blue' });
        gridRow.appendChild(grid);
    }
    gridContainer.appendChild(gridRow);
}