var result = document.getElementById('result');
var number = 0;
var aut = document.getElementById('hell_2').textContent

function OnClickButton() {

    if (aut == 'незнакомец') {
        alert('Авторизуйтесь! Через телеграмм!')
    } else {
        number++;
        result.innerHTML = 'Ты нажал(а) ' + number + ' раз';
    }
}
