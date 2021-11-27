let a = +prompt('a:', '');
let b = +prompt('b:', '');
let method = prompt('+, -, *, /');

function calc() {
    if (method == '+') {
        return a + b;
    } else if (method == '-') {
        return a - b;
    } else if (method == '*') {
        return a * b;
    } else if (method == '/') {
        return a / b;
    }
}

alert(calc());