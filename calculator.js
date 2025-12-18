const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');

let a = '';
let b = '';
let op = '';

function add(x, y) {
  return x + y;
}

function substract(x, y) {
  return x - y;
}

function product(x, y) {
  return x * y;
}

function division(x, y) {
  return x / y;
}

function clearAll() {
  a = '';
  b = '';
  op = '';
  screen.value = '';
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;

    if (!isNaN(value)) {
      if (op === '') {
        a += value;
        screen.value = a;
      } else {
        b += value;
        screen.value = a + op + b;
      }
    }

    if (['+', '-', '*', '/'].includes(value)) {
      if (a !== '') {
        op = value;
        screen.value = a + op;
      }
    }

    if (btn.id === 'equals') {
      let result;

      if (op === '+') result = add(Number(a), Number(b));
      if (op === '-') result = substract(Number(a), Number(b));
      if (op === '*') result = product(Number(a), Number(b));
      if (op === '/') result = division(Number(a), Number(b));

      screen.value = result;
      a = result.toString();
      b = '';
      op = '';
    }

    if (btn.id === 'clear') {
      clearAll();
    }
  });
});
