document.addEventListener('DOMContentLoaded', () => {
	console.log("calculator");
	let display = document.querySelector('.pole');

	let clear = document.querySelector('.clear');
	let plus = document.querySelector('.plus');
	let minus = document.querySelector('.minus');
	let division = document.querySelector('.division');
	let multiplication = document.querySelector('.multiplication');
	let percent = document.querySelector('.percent');
	let equal = document.querySelector('.equal');
	let dote = document.querySelector('.dote');

	let one = document.querySelector('.one');
	let two = document.querySelector('.two');
	let three = document.querySelector('.three');
	let four = document.querySelector('.four');
	let five = document.querySelector('.five');
	let six = document.querySelector('.six');
	let seven = document.querySelector('.seven');
	let eight = document.querySelector('.eight');
	let neun = document.querySelector('.neun');
	let zero = document.querySelector('.zero');

	// Перевіряє, чи останній символ є оператором
	function isLastCharOperator() {
		const operators = ['+', '-', '/', '*', '%'];
		let lastChar = display.value.slice(-1);
		return operators.includes(lastChar);
	}

	// Очищення екрану
	clear.addEventListener('click', () => {
		display.value = '';
	});

	// Додавання операторів
	plus.addEventListener('click', () => {
		if (!isLastCharOperator()) {
			display.value += '+';
		} else {
			display.value = display.value.slice(0, -1) + '+';
		}
	});

	minus.addEventListener('click', () => {
		if (!isLastCharOperator()) {
			display.value += '-';
		} else {
			display.value = display.value.slice(0, -1) + '-';
		}
	});

	division.addEventListener('click', () => {
		if (!isLastCharOperator()) {
			display.value += '/';
		} else {
			display.value = display.value.slice(0, -1) + '/';
		}
	});

	multiplication.addEventListener('click', () => {
		if (!isLastCharOperator()) {
			display.value += '*';
		} else {
			display.value = display.value.slice(0, -1) + '*';
		}
	});

	percent.addEventListener('click', () => {
		if (!isLastCharOperator()) {
			display.value += '%';
		} else {
			display.value = display.value.slice(0, -1) + '%';
		}
	});

	dote.addEventListener('click', () => {
		if (!isLastCharOperator()) {
			display.value += '.';
		} else {
			display.value = display.value.slice(0, -1) + '.';
		}
	});

	// Додавання цифр
	one.addEventListener('click', () => {display.value += '1';});
	two.addEventListener('click', () => {display.value += '2';});
	three.addEventListener('click', () => {display.value += '3';});
	four.addEventListener('click', () => {display.value += '4';});
	five.addEventListener('click', () => {display.value += '5';});
	six.addEventListener('click', () => {display.value += '6';});
	seven.addEventListener('click', () => {display.value += '7';});
	eight.addEventListener('click', () => {display.value += '8';});
	neun.addEventListener('click', () => {display.value += '9';});
	zero.addEventListener('click', () => {display.value += '0';});

    // Перевірка на знак %
		percent.addEventListener('click', () => {
			let currentValue = display.value;
	
			// Якщо є число і % не додано, обчислюємо відсоток
			if (currentValue) {
				// Перевіряємо, чи є вже відсоток
				if (currentValue.includes('%')) {
					// Якщо є % в кінці, перетворюємо на число і ділимо на 100
					display.value = (parseFloat(currentValue) / 100).toString();
				} else {
					// Якщо % не було, додаємо його
					display.value += '%';
				}
			}
		});
	// Обчислення виразу при натисканні `=`
	equal.addEventListener('click', () => {
		try {
			// Виконання обчислення і округлення до 4 знаків після коми
			display.value = parseFloat(eval(display.value)).toFixed(2);
		} catch {
			display.value = 'Error'; // Якщо помилка, вивести 'Error'
		}
	});	

});

// function addOperating(operator){
// 	let currentValue = display.value;

// 	if (d.includes(currentValue.slice(-1))) {
// 		display.value = currentValue.slice(0, -1) + operator;
// } else {
// 		display.value += operator;}
// }