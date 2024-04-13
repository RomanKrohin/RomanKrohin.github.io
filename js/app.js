document.getElementById("order-final").style.display="none"

let order_list = document.getElementById("order-list")
let tg = window.Telegram.WebApp;

let all_cost = [0, 0, 0, 0, 0, 0];

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
let m1 = false;
let m2 = false;
let m3 = false;
flag= 0


let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

function checkMainButton(){
	if (all_cost[0]+all_cost[1]+all_cost[2]>0){
		tg.MainButton.setText(all_cost[0] * 10+all_cost[1]*20+all_cost[2]*30)
	}
	else{
		tg.MainButton.hide();
	}
}


btn1.addEventListener("click", function () {
        all_cost[0] = all_cost[0] + 1;
		checkMainButton();
        updateQuantity(0, all_cost[0]);
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
					tg.MainButton.setText(all_cost[0] * 10+all_cost[1]*20+all_cost[2]*30);
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

btn2.addEventListener("click", function () {
	all_cost[1] = all_cost[1] + 1;
	checkMainButton();
	updateQuantity(1, all_cost[1]);
	item = "2";
	if (!m2 && all_cost[1]>0){
		m2= true
		let minusButton = document.createElement("button");
		minusButton.innerText = "del";
		minusButton.classList.add("btn");
		minusButton.classList.add("minus");
		minusButton.addEventListener("click", function () {
			if (all_cost[1] > 0) {
				all_cost[1]--;
				checkMainButton();
				updateQuantity(1, all_cost[1]);
				tg.MainButton.setText(all_cost[1] * 20);
				if (all_cost[1]==0){
					minusButton.remove();
					m2=false
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

btn3.addEventListener("click", function () {
	all_cost[2] = all_cost[2] + 1;
	checkMainButton();
	updateQuantity(2, all_cost[2]);
	item = "3";
	if (!m3 && all_cost[2]>0){
		m3= true
		let minusButton = document.createElement("button");
		minusButton.innerText = "del";
		minusButton.classList.add("btn");
		minusButton.classList.add("minus");
		minusButton.addEventListener("click", function () {
			if (all_cost[2] > 0) {
				all_cost[2]--;
				checkMainButton();
				updateQuantity(2, all_cost[2]);
				tg.MainButton.setText(all_cost[0] * 10+all_cost[1]*20+all_cost[2]*30);
				if (all_cost[2]==0){
					minusButton.remove();
					m3=false
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

function displayOrder(){
	order_list.innerText = `Cake - ${all_cost[0]}, Coke - ${all_cost[1]}, Burger -${all_cost[2]}`
}

Telegram.WebApp.onEvent("mainButtonClicked", function () {
	if (flag==0){
		document.getElementById("menu").style.display="none"
		document.getElementById("order-final").style.display="block"
		displayOrder()
		tg.MainButton.setText("Заказать")
		flag=1
	}
	else{
		tg.sendData(JSON.stringify(all_cost));
	}
});


function updateQuantity(index, quantity) {
    let quantityElement = document.getElementById(`quantity${index + 1}`);
    if (quantityElement) {
        quantityElement.innerText = quantity;
    }
}
