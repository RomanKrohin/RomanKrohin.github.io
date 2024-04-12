// Обновленная функция для отрисовки кнопок плюс и минус с анимацией и отображением количества товаров
function renderPlusMinusButtons(itemDiv) {
  // Создание кнопки плюс
  let plusButton = document.createElement("button");
  plusButton.innerText = "+";
  plusButton.classList.add("btn");
  plusButton.classList.add("plus");
  plusButton.classList.add("btn-animate"); // Добавление класса анимации
  plusButton.classList.add("show"); // Добавление класса для показа кнопки с анимацией
  plusButton.addEventListener("click", function() {
      itemCount++;
      updateItemCount();
  });

  // Создание кнопки минус
  let minusButton = document.createElement("button");
  minusButton.innerText = "-";
  minusButton.classList.add("btn");
  minusButton.classList.add("minus");
  minusButton.classList.add("btn-animate"); // Добавление класса анимации
  minusButton.classList.add("show"); // Добавление класса для показа кнопки с анимацией
  minusButton.addEventListener("click", function() {
      if (itemCount > 0) {
          itemCount--;
          updateItemCount();
      }
  });

  // Создание элемента для отображения количества товара
  let quantityElement = document.createElement("div");
  quantityElement.classList.add("quantity");
  quantityElement.innerText = "0";

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
      // Удаление кнопки Add
      itemDiv.removeChild(button);
      // Отрисовка кнопок плюс и минус с анимацией и элемента количества
      renderPlusMinusButtons(itemDiv);
      // Увеличение счетчика товара
      itemCount++;
      updateItemCount();
  });
});

// Инициализация счетчика товара
updateItemCount();
