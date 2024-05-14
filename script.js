document.addEventListener('DOMContentLoaded', function() {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const swapButton = document.getElementById('swapButton');

    const swapValues = () => {
        [input1.value, input2.value] = [input2.value, input1.value];
    };

    swapButton.addEventListener('click', swapValues);
});

document.addEventListener('DOMContentLoaded', function() {
    const square = document.querySelector('.square');
    const decreaseButton = document.getElementById('decreaseButton');
    const increaseButton = document.getElementById('increaseButton');

    let squareSize = 200;

    decreaseButton.addEventListener('click', function() {
        squareSize -= 15;
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
    });

    increaseButton.addEventListener('click', function() {
        squareSize += 15;
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const doubleButton = document.getElementById('doubleButton');
    const listItems = document.querySelectorAll('#myList li');

    function doubleListItems() {
        listItems.forEach(function(item) {
            let currentValue = parseInt(item.textContent);
            item.textContent = currentValue * 2;
        });
    }

    doubleButton.addEventListener('click', doubleListItems);
});


document.addEventListener('DOMContentLoaded', function() {
    const categoriesList = document.getElementById('categories');

    if(categoriesList) {
        const categoriesItems = categoriesList.querySelectorAll('.item');

        console.log(`Total categories: ${categoriesItems.length}`);

        categoriesItems.forEach(category => {
            const categoryName = category.querySelector('h2').textContent;

            const categoryItems = category.querySelectorAll('ul li');

            console.log(`Category: ${categoryName}`);
            console.log(`Number of items: ${categoryItems.length}`);
        });
    } else {
        console.error('Element with id "categories" not found.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const emailInput = loginForm.elements['email'];
        const passwordInput = loginForm.elements['password'];

        if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
            alert('All form fields must be filled in');
        } else {
            const formData = {
                email: emailInput.value.trim(),
                password: passwordInput.value.trim()
            };

            console.log(formData);

            loginForm.reset();
        }
    });
});


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

document.addEventListener('DOMContentLoaded', function() {
    const colorSpan = document.querySelector('.color');
    const changeColorButton = document.querySelector('.change-color');
    const task9 = document.getElementById('task9');

    changeColorButton.addEventListener('click', function() {
        const randomColor = getRandomHexColor();
        task9.style.backgroundColor = randomColor;
        colorSpan.textContent = randomColor;
    });
});

const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
    const amount = input.value;
    if (amount < 1 || amount > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
    }

    let top = 0;
    for (let i = 0; i < amount; i++) {
        const size = 30 + i * 10;
        const color = getRandomHexColor();
        const div = document.createElement('div');
        div.className = 'box';
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = color;
        div.style.top = `${top}px`;
        top += size + 5;
        boxesContainer.appendChild(div);
    }
    input.value = '';
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}