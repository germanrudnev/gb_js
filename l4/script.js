function numberToObject (x)
{   this.init = function(Num) {
        if( 0 < parseInt(Num) && parseInt(Num)< 1000) {
            this.hundreds = parseInt(Num/100);
            this.tens = parseInt((Num - this.hundreds*100)/10);
            this.ones = parseInt(Num - this.tens*10 - this.hundreds*100);
            alert("Число: "+ x + "\nСотни: " + this.hundreds + "\nДесятки: " + this.tens + "\nЕдиницы: " + this.ones);
            document.write("<p><strong>1.</strong> Число: "+ x + "<br>Сотни: " + this.hundreds + "<br>Десятки: " + this.tens + "<br>Единицы: " + this.ones +"</p>");
        } else {
          if(typeof(this.ones) != "undefined") {
            delete this.hundreds;
            delete this.tens;
            delete this.ones;
          }
        }
      }

    if (x > 999 | x <= 0) {
        console.log("Преобразовать в объект можно число от 0 до 999");}
    else{
        this.init(x);
    }
}

var number;
number = prompt("ЗАДАНИЕ 1. Введите число, чтобы преобразовать его в объект из сотен, десятков и единиц");
numberToObject(number);
while (0 >= number > 999) {
    number = prompt("ЗАДАНИЕ 1. Введите число, чтобы преобразовать его в объект из сотен, десятков и единиц");
    numberToObject(number);
}