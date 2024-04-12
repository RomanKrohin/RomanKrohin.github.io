// Функция для отправки данных о выбранном товаре в Telegram
function sendData(item) {
    // Ваш код для отправки данных в Telegram
    console.log(`Выбран товар: ${item}`);
}

// Функция для обработки нажатия кнопки Add для товара
function handleAddButtonClick(item) {
    // Получение элемента с количеством товаров для данного элемента
    let quantityElement = document.querySelector(`#btn${item}`).nextElementSibling;

    // Получение текущего количества товаров
    let currentQuantity = parseInt(quantityElement.innerText);

    // Увеличение количества товаров на 1
    let newQuantity = currentQuantity + 1;

    // Обновление отображаемого количества товаров
    quantityElement.innerText = newQuantity;

    // Показывать кнопки плюс и минус только если количество товаров больше нуля
    if (newQuantity > 0) {
        document.querySelector(`#btn${item}`).classList.add("hidden");
        document.querySelector(`#plus${item}`).classList.remove("hidden");
        document.querySelector(`#minus${item}`).classList.remove("hidden");
    }

    // Отправка данных о выбранном товаре в Telegram
    sendData(item);
}

// Функция для обработки нажатия кнопки плюс для товара
function handlePlusButtonClick(item) {
    // Получение элемента с количеством товаров для данного элемента
    let quantityElement = document.querySelector(`#btn${item}`).nextElementSibling;

    // Получение текущего количества товаров
    let currentQuantity = parseInt(quantityElement.innerText);

    // Увеличение количества товаров на 1
    let newQuantity = currentQuantity + 1;

    // Обновление отображаемого количества товаров
    quantityElement.innerText = newQuantity;

    // Отправка данных о выбранном товаре в Telegram
    sendData(item);
}

// Функция для обработки нажатия кнопки минус для товара
function handleMinusButtonClick(item) {
    // Получение элемента с количеством товаров для данного элемента
    let quantityElement = document.querySelector(`#btn${item}`).nextElementSibling;

    // Получение текущего количества товаров
    let currentQuantity = parseInt(quantityElement.innerText);

    // Уменьшение количества товаров на 1, но не меньше нуля
    let newQuantity = Math.max(0, currentQuantity - 1);

    // Обновление отображаемого количества товаров
    quantityElement.innerText = newQuantity;

    // Скрытие кнопок плюс и минус, если количество товаров равно нулю
    if (newQuantity === 0) {
        document.querySelector(`#btn${item}`).classList.remove("hidden");
        document.querySelector(`#plus${item}`).classList.add("hidden");
        document.querySelector(`#minus${item}`).classList.add("hidden");
    }

    // Отправка данных о выбранном товаре в Telegram
    sendData(item);
}

// Добавление обработчиков событий для кнопок Add каждого товара
document
