let a = '';
let b = '';

let method = '';

let res = false;

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action = ['+', '-', 'x', '/', '%'];

let output = document.getElementById('field');

function clearAll() {
    a = '';
    b = '';

    method = '';
    res = false;
    output.textContent = 0;
}

document.querySelector('.clear').onclick = clearAll;

document.querySelector('.content').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('clear')) return;

    output.textContent = '';

    const key = event.target.textContent;

    if (numbers.includes(key)) {
        if (b === '' && method === '') {
            a += key;
            output.textContent = a;
        } else if (a !== '' && b !== '' && res) {
            b = key;
            res = false;
            output.textContent = b;
        } else {
            b += key;
            output.textContent = b;
        }
        return;
    }
    if (action.includes(key)) {
        method = key;
        output.textContent = method;
        console.table(a, b, method);
        return;

    }

    if (key === '=') {
        if (b === '') b = a;
        switch (method) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = (+a) - (+b);
                break;
            case "x":
                a = (+a) * (+b);
                break;
            case "/":
                if (b === '0') {
                    output.textContent = 'Fehler';
                    a='';
                    b='';
                    method='';
                    return;
                }
                a = (+a) / (+b);
                break;
            case "%":
                a = (+a) % (+b);
                break;
        }
        res = false;
        output.textContent = a;
        console.table(a, b, method);
    }
}
