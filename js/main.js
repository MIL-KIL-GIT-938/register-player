var result = document.getElementById('result');
var number = 0;
var aut = "";

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
        number++;
        result.innerHTML = 'Ты нажал(а) ' + number + ' раз';
    }
}
