const box = document.querySelector('.box');
const input = document.querySelector('input');

const changeColor = () => {
    box.style.background = input.value;
}

input.addEventListener('input', changeColor);



// Chang color with hex code
const hexInput = document.querySelector('#hex-input');

const changeColorWithHex = () => {
    const hexCode = hexInput.value;
    const isValidHex = /^#([0-9A-F]{3}){1,2}$/i.test(hexCode);

    if (isValidHex) {
        box.style.background = hexCode;
    }
}
hexInput.addEventListener('input', changeColorWithHex);
