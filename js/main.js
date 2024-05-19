var result = document.getElementById('result');
var number = 0;
var Timer = 0;
var Timer_2 = 4;
var aut = "";
var clickCounter = 0; // Объявляем переменную clickCounter и инициализируем ее значением 0
// Получаем элемент по его идентификатору
var element = document.getElementById('result_2');
var result_3 = document.getElementById('result_3');

function onTelegramAuth(user) {
    aut = user.first_name;
    document.getElementById('hell_2').innerHTML = aut;
    if (aut === '') {
        document.getElementById('hell').textContent = 'Добро пожаловать незнакомец!';
    } else {
        document.getElementById('hell').textContent = 'Привет, ' + aut + '!';
    }
}

function OnClickButton() {
    if (aut === '') {
        alert('Авторизуйтесь! Через телеграмм!');
    } else {
        clickCounter++; // Увеличиваем значение переменной clickCounter на 1
        result.innerHTML = 'Ты нажал(а) ' + clickCounter + ' раз'; // Обновляем содержимое элемента с id "result"

        clearInterval(Timer); // Останавливаем таймер, если он был запущен ранее

        Timer = setInterval(function () {
            clearInterval(Timer); // Останавливаем таймер после 3 секунд
            console.log("Таймер завершен");
            var resetBtn = document.getElementById("bt"); // Получаем кнопку с id "bt"
            resetBtn.disabled = true; // Делаем кнопку неактивной
            element.style.display = 'block';
            result_3.innerHTML = 'Ты нажал(а) ' + clickCounter + ' раз';
        }, 3000); // Таймер на 3 секунды
    }
}
