// Синтаксис переключения в строгий режим всего скрипта
"use strict";

let count = 2 // Количество товара
let price = 220 // Цена товара
let percent = 15 // Скидка в процентах

//Введите ваше решение ниже
let sum = 2 * 220 - (2 * 220 / 100 * 15)
Math.floor
console.log(sum);

document.addEventListener('DOMContentLoaded', () => {
    const messageContainer = document.getElementById('messageContainer');
    const template = document.getElementById('messageTemplate').content;

    function showMessage(type, text) {
        const clone = document.importNode(template, true);
        const messageDiv = clone.querySelector('.message');
        messageDiv.classList.add(type);
        messageDiv.querySelector('.content').textContent = text;
        messageContainer.appendChild(clone);
    }

    showMessage('success', 'Операция выполнена успешно!');
    showMessage('error', 'Произошла ошибка при выполнении операции.');
});

document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { title: 'Товар 1', description: 'Описание товара 1', price: '100 долл.' },
        { title: 'Товар 2', description: 'Описание товара 2', price: '200 долл.' },
        { title: 'Товар 3', description: 'Описание товара 3', price: '300 долл.' },
    ];
    const productList = document.getElementById('productList');
    const template = document.getElementById('productTemplate').content;

    products.forEach(product => {
        const clone = document.importNode(template, true);
        clone.querySelector('.title').textContent = product.title;
        clone.querySelector('.description').textContent = product.description;
        clone.querySelector('.price').textContent = product.price;
        productList.appendChild(clone);
    });
});

const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');
const itemTemplate = document.getElementById('itemTemplate');

addButton.addEventListener('click', () => {
    const newItem = itemTemplate.content.cloneNode(true);
    itemList.appendChild(newItem);
});

const updateButton = document.getElementById("updateDetails");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("favSuperHeroDialog");
dialog.returnValue = "favSuperHero";

function openCheck(dialog) {
    if (dialog.open) {
        console.log("Диалог начат");
    } else {
        console.log("Диалог завершен");
    }
}

updateButton.addEventListener("click", () => {
    dialog.showModal();
    openCheck(dialog);
});

cancelButton.addEventListener("click", () => {
    dialog.close();
    openCheck(dialog);
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('image').addEventListener('change', function (event) {
    const preview = document.getElementById('preview');
    preview.innerHTML = '';

    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = '200px';
            preview.appendChild(img);
        }
        reader.readAsDataURL(file);
    }
});

const input = document.getElementById('username');
const message = document.getElementById('message');

input.addEventListener('focus', function () {
    message.textContent = 'Введите ваше имя пользователя';
});

input.addEventListener('blur', function () {
    if (input.value.trim() === '') {
        message.textContent = 'Имя пользователя не может быть пустым';
    } else {
        message.textContent = '';
    }
});

const usernameInput = document.getElementById('username');
const hint = document.getElementById('username-hint');
const error = document.getElementById('username-error');

usernameInput.addEventListener('focus', function () {
    hint.style.display = 'block';
});

//const input = document.getElementById('username');
//const message = document.getElementById('message');

//form.addEventListener('focus', function () {
//    message.textContent = 'Введите ваше имя пользователя';
//});

//form.addEventListener('blur', function () {
//    if (input.value.trim() === '') {
//        message.textContent = 'Имя пользователя не может быть пустым';
//    } else {
//        message.textContent = '';
//    }
//});

//const form = document.getElementById('my-form');
//const log = document.getElementById('log');

//form.addEventListener('reset', function () {
//    log.textContent = 'Форма была сброшена!';
//});

//const usernameInput = document.getElementById('username');
//const hint = document.getElementById('username-hint');
//const error = document.getElementById('username-error');

//document.addEventListener('DOMContentLoaded', function () {
//    const selectElement = document.getElementById('color-select');

//    selectElement.addEventListener('change', function () {
//        alert('Вы выбрали цвет: ' + selectElement.value);
//    });
//});

//usernameInput.addEventListener('blur', function () {
//    error.style.display = usernameInput.value === '' ? 'block' : 'none';
//});

//const usernameInput = document.getElementById('username');
//const hint = document.getElementById('username-hint');
//const error = document.getElementById('username-error');

//usernameInput.addEventListener('focus', function () {
//    hint.style.display = 'block';
//});

//const form = document.getElementById('my-form');

//form.addEventListener('submit', function (event) {
//    const username = document.getElementById('username').value;
//    if (username === '') {
//        alert('Пожалуйста, введите имя пользователя.');
//        event.preventDefault(); // предотвращаем отправку формы
//    }
//});

//function submitForm() {
//    document.getElementById('myForm').submit();
//}

//function myFunction() {
//    alert('Button clicked!');
//}

//function changeColor() {
//    document.getElementById('text').style.color = 'blue';
//}

//function calculateSum() {
//    const num1 = parseFloat(document.getElementById('num1').value) || 0;
//    const num2 = parseFloat(document.getElementById('num2').value) || 0;
//    const sum = num1 + num2;
//    document.getElementById('result').value = sum;
//}