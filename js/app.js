let tg = window.Telegram.WebApp;

let all_cost = [0, 0, 0, 0, 0, 0];

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
let m1 = false;

let item = "";

let btn1 = document.getElementById("btn1");

function checkMainButton(){
	if (all_cost[0]>0){
		tg.MainButton.setText(all_cost[0] * 10)
	}
	else{
		tg.MainButton.hide();
	}
}


btn1.addEventListener("click", function () {
        all_cost[0] = all_cost[0] + 1;
		checkMainButton();
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
					checkMainButton();
					updateQuantity(0, all_cost[0]);
					tg.MainButton.setText(all_cost[0] * 10);
					if (all_cost[0]==0){
						minusButton.remove();
						m1=false
					}
				}
				else{
				}
			});
			let addButton = document.getElementById(`btn${item}`);

			
			addButton.insertAdjacentElement('afterend', minusButton);
		}
        tg.MainButton.show();
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(JSON.stringify(all_cost));
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;
usercard.appendChild(p);

function updateQuantity(index, quantity) {
    let quantityElement = document.getElementById(`quantity${index + 1}`);
    if (quantityElement) {
        quantityElement.innerText = quantity;
    }
}
