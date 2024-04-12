let tg = window.Telegram.WebApp;

let all_cost = [0, 0, 0, 0, 0, 0];

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {

});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(JSON.stringify(all_cost));
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;
usercard.appendChild(p);

// Функция для обновления количества товара и отправки данных в Telegram
function updateQuantity(index, quantity) {
    let quantityElement = document.getElementById(`quantity${index + 1}`); // Находим элемент, отображающий количество товара
    if (quantityElement) {
        quantityElement.innerText = quantity; // Обновляем количество товара
        tg.sendData(JSON.stringify(all_cost)); // Отправляем данные в Telegram
    }
}
