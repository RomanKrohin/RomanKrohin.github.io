let tg = window.Telegram.WebApp;

let all_cost = [0, 0, 0, 0, 0, 0]

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
let q1 = document.getElementById("quantity1"); // Заменил на строку в кавычках
let item = "";
let addButton = document.getElementById("btn1"); // Получаем кнопку "Add"

// Функция для скрытия кнопки "Add"
function hideAddButton() {
    addButton.style.display = "none";
}

// Функция для отображения кнопки "Add"
function showAddButton() {
    addButton.style.display = "block";
}

// Функция для скрытия кнопок "+" и "-"
function hidePlusMinusButtons() {
    document.querySelectorAll(".plus, .minus").forEach(button => {
        button.style.display = "none";
    });
}

// Функция для отображения кнопок "+" и "-"
function showPlusMinusButtons() {
    document.querySelectorAll(".plus, .minus").forEach(button => {
        button.style.display = "inline-block";
    });
}

addButton.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        all_cost[0] = all_cost[0] + 1;

        tg.MainButton.setText(all_cost[0] * 10);
        item = "1";
        let plusButton = document.createElement("button");
        plusButton.innerText = "+";
        plusButton.classList.add("btn");
        plusButton.classList.add("plus");
        plusButton.addEventListener("click", function () {
            all_cost[0]++;
            q1.innerText = all_cost[0]
            tg.MainButton.setText(all_cost[0] * 10);
        });

        let minusButton = document.createElement("button");
        minusButton.innerText = "-";
        minusButton.classList.add("btn");
        minusButton.classList.add("minus");
        minusButton.addEventListener("click", function () {
            if (all_cost[0] > 0) {
                all_cost[0]--;
                q1.innerText = all_cost[0]
                tg.MainButton.setText(all_cost[0] * 10);
            }
        });

        addButton.insertAdjacentElement('afterend', plusButton);
        addButton.insertAdjacentElement('afterend', minusButton);
        hideAddButton(); // Скрываем кнопку "Add"
        showPlusMinusButtons(); // Показываем кнопки "+" и "-"
        tg.MainButton.show();
    }
});

// Проверка количества товаров для скрытия/отображения кнопок и кнопки "Add"
function checkItemQuantity() {
    if (all_cost[0] > 0) {
        hideAddButton(); // Если товары есть, скрываем кнопку "Add"
        showPlusMinusButtons(); // Показываем кнопки "+" и "-"
    } else {
        showAddButton(); // Если товаров нет, показываем кнопку "Add"
        hidePlusMinusButtons(); // Скрываем кнопки "+" и "-"
    }
}

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(JSON.stringify(all_cost));
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);

checkItemQuantity(); // Вызываем функцию при загрузке страницы для проверки количества товаров
