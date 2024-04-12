let tg = window.Telegram.WebApp;

let all_cost =[0,0,0,0,0,0]


tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btn1 = document.getElementById("btn1");

function addPlusMinusButtons(item) {
    // Создаем кнопку "+" и добавляем обработчик события
    let plusButton = document.createElement("button");
    plusButton.innerText = "+";
    plusButton.classList.add("btn");
    plusButton.classList.add("plus");
    plusButton.addEventListener("click", function() {
        // Увеличиваем количество товара
        let quantityElement = document.getElementById(`quantity${item}`);
        let currentQuantity = parseInt(quantityElement.innerText);
        quantityElement.innerText = currentQuantity + 1;
    });

    // Создаем кнопку "-" и добавляем обработчик события
    let minusButton = document.createElement("button");
    minusButton.innerText = "-";
    minusButton.classList.add("btn");
    minusButton.classList.add("minus");
    minusButton.addEventListener("click", function() {
        // Уменьшаем количество товара, но не ниже 0
        let quantityElement = document.getElementById(`quantity${item}`);
        let currentQuantity = parseInt(quantityElement.innerText);
        if (currentQuantity > 0) {
            quantityElement.innerText = currentQuantity - 1;
        }
    });

    // Добавляем кнопки "+" и "-" после кнопки "Add"
    let addButton = document.getElementById(`btn${item}`);
    addButton.insertAdjacentElement('afterend', plusButton);
    addButton.insertAdjacentElement('afterend', minusButton);
}

btn1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		all_cost[0]=all_cost[0]+1
		tg.MainButton.setText(all_cost[0]*10);
		item = "1";
		let addButton = document.getElementById(`btn${item}`);
		addButton.insertAdjacentElement('afterend', plusButton);
		addButton.insertAdjacentElement('afterend', minusButton);

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