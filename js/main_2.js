function isNumber(g) { 
    return /^-?[\d.]+(?:e-?\d+)?$/.test(g);
}

function checkForm(thiss) {

    var name = thiss.name.value;
    var age = thiss.age.value;
    var password = thiss.password.value;
    var repass = thiss.repass.value;
    var state = thiss.state.value;

    var test = isNumber(age)

    if (name == '' || age == '' || password == '' || repass == '' || state == '') {
        alert('Введите все данные!');
    } else if (name.length > 20) {
        alert('Имя не может быть больше 20 символов!');
    } else if (age.length > 2) {
        alert('Не ври!');
    } else if (test != true) {
        alert('Возраст не может содержать буквы!');
    } else if (repass != password) {
        alert('Поле "проверка пароля" должно быть такое же как и поле "Пароль"!');
    }

    console.log(name);
    console.log(age);
    console.log(password);
    console.log(repass);
    console.log(state);

    return false;
}