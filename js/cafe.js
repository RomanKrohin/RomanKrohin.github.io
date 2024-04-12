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
