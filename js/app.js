let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

btn1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 1!");
		item = "1";
		tg.MainButton.show();
	}
});

btn2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 2!");
		item = "2";
		tg.MainButton.show();
	}
});

btn3.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 3!");
		item = "3";
		tg.MainButton.show();
	}
});

btn4.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 4!");
		item = "4";
		tg.MainButton.show();
	}
});

btn5.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 5!");
		item = "5";
		tg.MainButton.show();
	}
});

btn6.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 6!");
		item = "6";
		tg.MainButton.show();
	}
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);

// Добавляем обработчик события для каждой кнопки "Add"
let addButtons = document.querySelectorAll(".btn");
addButtons.forEach(function(button, index) {
    let quantityElement = document.getElementById(`quantity${index + 1}`);
    let quantity = 0; // Изначальное количество товара

    button.addEventListener("click", function() {
        // При нажатии увеличиваем количество товара на 1
        quantity++;
        // Обновляем отображение количества товара
        quantityElement.innerText = quantity;

        // Создаем кнопку "+"
        let plusButton = document.createElement("button");
        plusButton.innerText = "+";
        plusButton.classList.add("btn");
        plusButton.classList.add("plus");
        plusButton.classList.add("btn-animate"); // Анимация
        plusButton.classList.add("show"); // Показываем кнопку с анимацией
        plusButton.addEventListener("click", function() {
            // При нажатии на кнопку "+" увеличиваем количество товара на 1
            quantity++;
            // Обновляем отображение количества товара
            quantityElement.innerText = quantity;
        });

        // Создаем кнопку "-"
        let minusButton = document.createElement("button");
        minusButton.innerText = "-";
        minusButton.classList.add("btn");
        minusButton.classList.add("minus");
        minusButton.classList.add("btn-animate"); // Анимация
        minusButton.classList.add("show"); // Показываем кнопку с анимацией
        minusButton.addEventListener("click", function() {
            // При нажатии на кнопку "-" уменьшаем количество товара на 1, если оно больше 0
            if (quantity > 0) {
                quantity--;
                // Обновляем отображение количества товара
                quantityElement.innerText = quantity;
            }

            // Если количество стало равным 0, скрываем кнопки "+", "-"
            if (quantity === 0) {
                plusButton.classList.remove("show");
                minusButton.classList.remove("show");
            }
        });

        // Добавляем кнопки "+" и "-" к элементу с товаром
        button.parentNode.appendChild(plusButton);
        button.parentNode.appendChild(minusButton);
    });
});
