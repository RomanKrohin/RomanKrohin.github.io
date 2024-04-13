let tg = window.Telegram.WebApp;

let all_cost = [0, 0, 0, 0, 0, 0];

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
let m1 = false;

let item = "";

let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        all_cost[0] = all_cost[0] + 1;
        updateQuantity(0, all_cost[0]);
        tg.MainButton.setText(all_cost[0] * 10);
        item = "1";
        if (!m1 && all_cost[0]>0){
			m1= true
			let minusButton = document.createElement("button");
			minusButton.innerText = "del";
			minusButton.classList.add("btn");
			minusButton.classList.add("minus");
			minusButton.addEventListener("click", function () {
				if (all_cost[0] > 0) {
					all_cost[0]--;
					updateQuantity(0, all_cost[0]);
					tg.MainButton.setText(all_cost[0] * 10);
				}
			});
			let addButton = document.getElementById(`btn${item}`);

			
			addButton.insertAdjacentElement('afterend', minusButton);
		}
        tg.MainButton.show();
    }
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
 // Отправляем данные в Telegram
    }
}
