var result = document.getElementById('result');
var number = 0;

function OnClickButton() {
    number++;
    result.innerHTML = 'Ты нажал(а) ' + number + ' раз';
}