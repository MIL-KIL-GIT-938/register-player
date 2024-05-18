const fs = require('fs');

// Создаем новый текстовый файл
fs.writeFileSync('test.txt', 'Привет, мир!');

// Читаем содержимое текстового файла
const data = fs.readFileSync('test.txt', 'utf8');

// Выводим содержимое файла в консоль
console.log(data);