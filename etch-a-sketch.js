const container = document.querySelector('.divs');
const changeBtn = document.querySelector('.change');
const resetBtn = document.querySelector('.clear-btn');
let divs = 0;
let pixelsRow;
let pixels;
let newDiv;

getPixelAmount();

function getPixelAmount() {
    pixelsRow = prompt('How many pixels do you want to have? (Max: 100)');
    if (!pixelsRow) {
        return;
    }
    
    pixelsRow = Number(pixelsRow);
    pixels = pixelsRow * pixelsRow;
    
    if (!Number.isInteger(pixels) || pixels <= 0) {
        alert('ERROR! You need to input a number');
        return;
    } else if (pixelsRow > 100) {
        pixels = 100;
    } else {
        for (let i = 1; i <= pixels; i++) {
            newDiv = document.createElement('div');
            newDiv.classList.add('newDiv');
            newDiv.style.flexBasis = `${100 / pixelsRow}%`;
            container.appendChild(newDiv);
        }
    }
    divs = document.querySelectorAll('.newDiv');
}

changeBtn.addEventListener('click', () => {
    if (divs) {
        divs.forEach(element => {
            element.remove();
        });
        getPixelAmount();
        drawDefault();
    } else {
        getPixelAmount();
        drawDefault();
    }
});

function drawDefault() {
    divs.forEach(e => {
            e.addEventListener('mouseover', (event) => {
                let targetDiv = event.target;
                targetDiv.style.backgroundColor = 'black';
            });            
    });
}

function resetDivs() {
    divs.forEach((e) => {
        e.style.backgroundColor = 'white';
    });
}

resetBtn.addEventListener('click', resetDivs);

drawDefault();