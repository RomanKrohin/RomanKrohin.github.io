
    let tg = window.Telegram.WebApp;

    let all_cost = [0, 0, 0, 0, 0, 0];

    tg.expand();

    tg.MainButton.textColor = '#FFFFFF';
    tg.MainButton.color = '#2cab37';

    let item = "";

    let plusButton = document.createElement("button");
    plusButton.innerText = "+";
    plusButton.classList.add("btn");
    plusButton.classList.add("plus");
    plusButton.addEventListener("click", function () {
        all_cost[0]++;
        tg.MainButton.setText(all_cost[0] * 10);
        updateQuantityDisplay();
    });

    let minusButton = document.createElement("button");
    minusButton.innerText = "-";
    minusButton.classList.add("btn");
    minusButton.classList.add("minus");
    minusButton.addEventListener("click", function () {
        if (all_cost[0] > 0) {
            all_cost[0]--;
            tg.MainButton.setText(all_cost[0] * 10);
            updateQuantityDisplay();
        }
    });

    let usercard = document.getElementById("usercard");
    let q1 = document.getElementById("quantity1");

    function updateQuantityDisplay() {
        q1.innerText = all_cost[0];
    }

    let btn1 = document.getElementById("btn1");

    btn1.addEventListener("click", function () {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            all_cost[0]++;
            tg.MainButton.setText(all_cost[0] * 10);
            updateQuantityDisplay();
            showPlusMinusButtons();
            tg.MainButton.show();
        }
    });

    function showPlusMinusButtons() {
        btn1.style.display = "none";
        plusButton.style.display = "inline-block";
        minusButton.style.display = "inline-block";
    }

    function showAddButton() {
        btn1.style.display = "inline-block";
        plusButton.style.display = "none";
        minusButton.style.display = "none";
    }

    let p = document.createElement("p");
    p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;
    usercard.appendChild(p);

    updateQuantityDisplay();
    showAddButton();

    Telegram.WebApp.onEvent("mainButtonClicked", function () {
        tg.sendData(JSON.stringify(all_cost));
    });
