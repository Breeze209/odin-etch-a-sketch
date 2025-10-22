const container = document.querySelector('.divs');
const changeBtn = document.querySelector('.change');
let divs = 0;

getPixelAmount();

function getPixelAmount() {
    let pixelsRow = prompt('How many pixels do you want to have? (Max: 100)');
    pixelsRow = Number(pixelsRow);
    let pixels = pixelsRow * pixelsRow;
    let newDiv;

    if (!Number.isInteger(pixels) || pixels <= 0) {
        alert('ERROR! You need to input a number');
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
    } else {
        getPixelAmount();
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

drawDefault();