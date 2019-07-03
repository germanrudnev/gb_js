//var number = []; // четыре цифры нашего числа
var attempts = 0; // число попыток
var moves = []; // зафиксированные ходы

generateNumber(); //сгенерировали неповторяющиеся значения массива
alert(number);
guessNumber();

function generateNumber(){
	number = [];//массив с уникальными цифрами
	var min = 1;
	var max = 9;
	
	// заполняем массив цифр в числе
	for(var i = 0; i < 4; i++){
		var part = Math.round(Math.random() * (max - min)+min);
		
		// первое число всегда уникально
		if(i == 0){
			number[0] = part;
		}
		else{ // пока не сгенерируется уникальное число, генерируем новые случайные числа
			while(number.indexOf(part) != -1){//элемент найден
				part = Math.round(min + Math.random() * (max - min));
			}
			
			number[i] = part;
		}
	}
}

function guessNumber(){
	var result = prompt("Введите число (-1 - закончить игру)", 0);
	var gameIsRunning = true;
	
	// пока игрок не угадал число
	while(gameIsRunning==true){
		// выход из игры
		if(parseInt(result) == -1){
			gameIsRunning = false;
		}
		// игрок ввел некорректные данные
		else if(parseInt(result) == 0 || isNaN(parseInt(result))){
			alert("Вы не ввели число");
			// запрашиваем по новой
			result = prompt("Введите число (-1 - закончить игру)", 0);
		}
		// проверяем число
		else{
			var answer = checkNumber(result);//answer[false,1,1]
			if(answer[0]){
				// число угадано, останавливаем игру и запускаем вывод ходов
                gameIsRunning = false;
                var checkingMoves = true;

				alert("Поздравляем! Вы угадали число. Кол-во попыток: " + attempts);

				while (checkingMoves == true) {
				    var attemptsResult = prompt("Номер своего хода, который хотите вывести: (-1 — закончить работу)", 1);
				    if (parseInt(attemptsResult) == -1) {
				        checkingMoves = false;
				    } else if (parseInt(attemptsResult) == 0 || isNaN(parseInt(attemptsResult))) {
				        alert("Это не номер хода");
				    } else if (parseInt(attemptsResult-1) > attempts) {
				        alert("Вы угадали число быстрее");
				    } else if (isNaN(parseInt(moves[attemptsResult-1]))) {
				    	alert("На " + attemptsResult + "-м ходу вы не ввели число");
				    } else {
				        alert(moves[attemptsResult-1]);
				        checkingMoves = false;
					}
				}}
			else{
				// следующий ход
				result = prompt("Быки: " + answer[1] + " Коровы: " + answer[2] + " Введите число (-1 - закончить игру)", 0);
			}
		}
	}
}

function checkNumber(myresult){//1234
	// каждая проверка увеличивает кол-во попыток на 1
	attempts++;
    moves.push(myresult);
	
	// массив результата
	// 0 - общий результат
	// 1 - быки
	// 2 - коровы
	var answer = [false, 0, 0];
	
	// раскладываем число на разряды
	console.log(myresult);
	console.log(number);
	
	/*s = "1234";
	mas = s.split("")
	*/
	
	/*
	var mas = [1,2,3,4];
	var mas2 = [];
	for(var i in mas){
		mas2[]=mas[i];
	}
	*/
	
	var ranks = myresult.split("");//массив, полученный из введенного числа
	
	for(var i = 0; i < ranks.length; i++){		
		// если по индексу значения совпадают, то это бык
		if(parseInt(ranks[i]) == number[i]){
			answer[1]++;
		}
		// если число вообще есть в массиве, то это корова
		else if(number.indexOf(parseInt(ranks[i])) != -1){
			answer[2]++;
		}
	}
	
	// если набралось 4 быка, то это победа
	if(answer[1] == 4){
		answer[0] = true;
	}
	
	return answer;
}