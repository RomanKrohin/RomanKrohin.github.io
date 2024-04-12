let itemCounts = {}; // Объект для хранения количества каждого товара

// Обновленная функция для отрисовки кнопок плюс и минус с анимацией и отображением количества товаров
function renderPlusMinusButtons(itemDiv, itemId) {
    // Создание кнопки плюс
    let plusButton = document.createElement("button");
    plusButton.innerText = "+";
    plusButton.classList.add("btn");
    plusButton.classList.add("plus");
    plusButton.classList.add("btn-animate"); // Добавление класса анимации
    plusButton.classList.add("show"); // Добавление класса для показа кнопки с анимацией
    plusButton.addEventListener("click", function() {
        itemCounts[itemId]++;
        updateItemCount(itemDiv, itemId);
    });

    // Создание кнопки минус
    let minusButton = document.createElement("button");
    minusButton.innerText = "-";
    minusButton.classList.add("btn");
    minusButton.classList.add("minus");
    minusButton.classList.add("btn-animate"); // Добавление класса анимации
    minusButton.classList.add("show"); // Добавление класса для показа кнопки с анимацией
    minusButton.addEventListener("click", function() {
        if (itemCounts[itemId] > 0) {
            itemCounts[itemId]--;
            updateItemCount(itemDiv, itemId);
        }
    });

    // Создание элемента для отображения количества товара
    let quantityElement = document.createElement("div");
    quantityElement.classList.add("quantity");
    quantityElement.innerText = itemCounts[itemId];

    // Добавление кнопок и элемента количества в div для товара
    itemDiv.appendChild(plusButton);
    itemDiv.appendChild(minusButton);
    itemDiv.appendChild(quantityElement);
}

// Добавление обработчиков событий для кнопок Add
let addButtons = document.querySelectorAll(".btn");
addButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        let itemDiv = this.parentNode;
        let itemId = itemDiv.id; // Получение идентификатора товара
        // Удаление кнопки Add
        itemDiv.removeChild(button);
        // Проверка наличия счетчика для данного товара
        if (!itemCounts[itemId]) {
            itemCounts[itemId] = 0;
        }
        // Отрисовка кнопок плюс и минус с анимацией и элемента количества
        renderPlusMinusButtons(itemDiv, itemId);
        // Увеличение счетчика товара
        itemCounts[itemId]++;
        updateItemCount(itemDiv, itemId);
    });
});

// Функция для обновления количества товаров
function updateItemCount(itemDiv, itemId) {
    // Находим элемент с количеством товаров для данного товара
    let quantityElement = itemDiv.querySelector(`#${itemId} .quantity`);
    // Обновляем отображение количества
    quantityElement.innerText = itemCounts[itemId];
    // Если количество товара больше нуля, отображаем элемент с количеством, иначе скрываем
    if (itemCounts[itemId] > 0) {
        quantityElement.style.display = "block";
    } else {
        quantityElement.style.display = "none";
    }
}
