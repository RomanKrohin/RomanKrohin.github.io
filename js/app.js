let tg = window.Telegram.WebApp;

let all_cost = [0, 0, 0, 0, 0, 0];

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        all_cost[0]++;
        updateMainButton();
        item = "1";

        let plusButton = document.createElement("button");
        plusButton.innerText = "+";
        plusButton.classList.add("btn");
        plusButton.classList.add("plus");
        plusButton.addEventListener("click", function () {
            all_cost[0]++;
            updateMainButton();
        });

        let minusButton = document.createElement("button");
        minusButton.innerText = "-";
        minusButton.classList.add("btn");
        minusButton.classList.add("minus");
        minusButton.addEventListener("click", function () {
            if (all_cost[0] > 0) {
                all_cost[0]--;
                updateMainButton();
            }
        });

        let addButton = document.getElementById(`btn${item}`);
        addButton.insertAdjacentElement('afterend', plusButton);
        addButton.insertAdjacentElement('afterend', minusButton);

        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;
usercard.appendChild(p);

// Функция для обновления текста главной кнопки
function updateMainButton() {
    tg.MainButton.setText(all_cost[0] * 10);
}
