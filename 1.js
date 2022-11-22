const celsius = Number.parseInt(prompt ('Введите число (градусы Цельсия)'));
const fahrenheit = (9/5) * celsius + 32;
/* parseFloat(y).toFixed(1)  - один это знаки после запятой*/;
alert (`Цельсий: ${celsius} , Фаренгейт: ${fahrenheit.toFixed(1)}`);