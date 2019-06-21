var tempC = prompt("1. Введите температуру в градусах Цельсия", "");
var tempF = tempC * 1.8 + 32;
alert("А по Фаренгейту — "+tempF+"°");

document.write("<p><strong>1.</strong> Температура по Цельсию — " + tempC + "°, температура по Фаренгейту — " + tempF + "°</p>");

var admin;
var name = "Василий";

document.write("<p><strong>2.</strong> name = " + name+"<br>");

admin = name;

document.write("admin = " + admin+"</p>");

var task3 = 1000 + "108";
document.write("<p><strong>3.</strong> 1000 + \"108\" = " + task3 + "</p>");

document.write("<p><strong>4.</strong> <em>async</em> — скрипт выполняется сразу после загрузки, <em>defer</em> — после разбора DOM; загрузка ведётся параллельно с обработкой страницы</p>");