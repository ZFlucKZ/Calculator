let btns = document.getElementsByClassName('btn');
let display = document.getElementById('display-num');

let firstNum;
let secondNum;
let operator;
let dot;

function resetCalculator() {
  firstNum = 0;
  secondNum = 0;
  operator = null;
  dot = 0;
  display.innerHTML = '';
}

resetCalculator();

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    data = btns[i].getAttribute('data-value');
    let temp = display.innerHTML;

    if (data == 'AC') {
      // Reset calculator
      resetCalculator();
    } else if (data == 'C') {
      // Reset Input instance number
      display.innerHTML = '';
      dot = 0;
    } else if (data == '+/-') {
      if (display.innerHTML[0] == '-') {
        display.innerHTML = temp.slice(1);
      } else {
        display.innerHTML = '-' + temp;
      }
    } else if (data == '/') {
      firstNum = temp;
      operator = data;
      display.innerHTML = '';
    } else if (data == '*') {
      firstNum = temp;
      operator = data;
      display.innerHTML = '';
    } else if (data == '-') {
      firstNum = temp;
      operator = data;
      display.innerHTML = '';
    } else if (data == '+') {
      firstNum = temp;
      operator = data;
      display.innerHTML = '';
    } else if (data == '=') {
      secondNum = display.innerHTML;
      display.innerHTML = eval(firstNum + ' ' + operator + ' ' + secondNum);
    } else if (data == '.') {
      if (dot == 0) {
        display.innerHTML += data;
        dot++;
      }
    } else {
      display.innerHTML += data;
    }
  });
}
