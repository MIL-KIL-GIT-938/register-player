function onTelegramAuth(user) {
    document.getElementById('hell_2').innerHTML = user.first_name;
}

var result = document.getElementById('result');
var number = 0;
var aut = document.getElementById('hell').textContent

function OnClickButton() {

    if (aut == 'Добро пожаловать незнакомец!') {
        alert('Авторизуйтесь! Через телеграмм!')
    } else {
        number++;
        result.innerHTML = 'Ты нажал(а) ' + number + ' раз';
    }
}
