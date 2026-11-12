
let count = 0;

const display = document.querySelector('#count');

function update() {
    display.textContent = count;
    display.style.color = count < 0 ? 'red' : 'black';
}

document.querySelector('#plus').onclick = function () {
    count++;
    update();
};

document.querySelector('#minus').onclick = function () {
    count--;
    update();
};
