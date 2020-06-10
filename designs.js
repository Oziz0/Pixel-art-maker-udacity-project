//Variables .
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const Size = document.getElementById('sizePicker');
const colorpicker = document.getElementById('colorPicker');
const pixelCanvas = document.getElementById('pixelCanvas');

// declaring the function when submiting. 
Size.addEventListener('submit', function(event) {
    pixelCanvas.innerHTML = '';
    event.preventDefault();
    makeGrid();
});

//making the grid.
function makeGrid() {
    for (let x = 0; x < height.value; x++) {
        const row = pixelCanvas.insertRow(0);
        for (let y = 0; y < width.value; y++) {
            row.insertCell(0);
        }
    }
}
//Color picking and painting.
pixelCanvas.addEventListener('click', function(event) {
    if (event.target.nodeName === 'TD') {
        event.target.style.backgroundColor = colorpicker.value;
    }
})