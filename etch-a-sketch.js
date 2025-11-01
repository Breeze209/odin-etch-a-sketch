const container = document.querySelector('.divs');
const changeBtn = document.querySelector('.change');
const resetBtn = document.querySelector('.clear-btn');
const chooseBtn = document.querySelector('.choose-btn');
const randomBtn = document.querySelector('.random-btn');
const defaultBtn = document.querySelector('.default-btn');
const darkerBtn = document.querySelector('.darkening-btn');
let divs = 0;
let pixelsRow;
let pixels;
let newDiv;
let color;
let randomColor;
let col1;
let col2;
let col3;
let modus;
let darker = 'deacti';

getPixelAmount();

function getPixelAmount() {
    pixelsRow = prompt('How many pixels per row do you want to have? (Max: 100)');
    if (!pixelsRow) {
        return;
    }
    
    pixelsRow = Number(pixelsRow);
    
    if (!Number.isInteger(pixelsRow) || pixelsRow <= 0) {
        alert('ERROR! You need to input a number');
        return;
    } else if (pixelsRow > 100) {
        pixelsRow = 100;
    }

    pixels = pixelsRow * pixelsRow;

    for (let i = 1; i <= pixels; i++) {
        newDiv = document.createElement('div');
        newDiv.classList.add('newDiv');
        newDiv.style.flexBasis = `${100 / pixelsRow}%`;
        newDiv.style.backgroundColor = 'white';
        container.appendChild(newDiv);
    }
    
    divs = document.querySelectorAll('.newDiv');
}

changeBtn.addEventListener('click', () => {
    if (divs) {
        divs.forEach(element => {
            element.remove();
        });
        getPixelAmount();
        giveMode();
    } else {
        getPixelAmount();
        giveMode();
    }
});

function getRandomColor() {
    col1 = Math.floor(Math.random() * 256);
    col2 = Math.floor(Math.random() * 256);
    col3 = Math.floor(Math.random() * 256);
    return randomColor = `rgb(${col1}, ${col2}, ${col3})`;
}

function drawDefault() {
    divs.forEach(e => {
            e.addEventListener('mouseover', (event) => {
                let targetDiv = event.target;
                targetDiv.style.backgroundColor = 'black';
                targetDiv.style.opacity = '1';
            });            
    });
}

chooseBtn.addEventListener('click', () => {
    color = prompt('What color do you want to draw in?');
    color = color.toLowerCase();
    console.log(color);
    modus = 'choose';
    giveMode();
});

function drawChosenColor() {
    divs.forEach(e => {
        e.addEventListener('mouseover', (event) => {
            let targetDiv = event.target;
            targetDiv.style.backgroundColor = `${color}`;
            targetDiv.style.opacity = '1';
        });            
    });
}

function drawRandomColor() {
    getRandomColor();
    divs.forEach(e => {
            e.addEventListener('mouseover', (event) => {
                let targetDiv = event.target;
                targetDiv.style.backgroundColor = randomColor;
                targetDiv.style.opacity = '1';
                getRandomColor();
            });            
    });
}

function drawDarker() {
    darker = 'acti';
    if (divs) {
        divs.forEach(element => {
            element.remove();
        });
        getPixelAmount();
    } else {
        getPixelAmount();
    }
    divs.forEach(e => {
            e.addEventListener('mouseover', (event) => {
                let targetDiv = event.target;
                if (targetDiv.style.backgroundColor == 'white') {
                    targetDiv.style.backgroundColor = 'black';
                    targetDiv.style.opacity = '0.1';
                } else {
                    targetDiv.style.opacity = `${Number(targetDiv.style.opacity) + 0.1}`;
                }
            });            
    });
}

function resetDivs() {
    divs.forEach((e) => {
        e.style.backgroundColor = 'white';
    });
}

resetBtn.addEventListener('click', resetDivs);

defaultBtn.addEventListener('click', () => {
    modus = 'default';
    giveMode();
});

randomBtn.addEventListener('click', () => {
    modus = 'random';
    giveMode();
});

darkerBtn.addEventListener('click', () => {
    modus = 'darker';
    giveMode();
});

function giveMode() {
    switch (modus) {
        case 'default':
            checkActi();
            drawDefault();
            console.log(1);
            break;

        case 'random':
            checkActi();
            drawRandomColor();
            console.log(2);
            break;

        case 'darker':
            drawDarker();
            console.log(3);
            break;

        case 'choose':
            checkActi();
            drawChosenColor();
            console.log(4);
            break;

        default:
            checkActi();
            drawDefault();
            console.log(5);
    }
}

function checkActi() {
    if (darker === 'acti') {
        if (divs) {
            divs.forEach(div => {
                div.style.backgroundColor = 'white';
            });
            darker = 'deacti';
        }
    }
}

giveMode();