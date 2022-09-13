let screen = document.getElementById('screen');
screen.disabled = true;
let firstnumber = 0
screen.innerHTML = '0'
function show(number) {
    screen.value += `${number}`

}

function calc() {
    let x = screen.value
    let y = eval(x);
    screen.value = `${y}`
}


function clearScreen() {
    screen.value = ''

}


let b = `1*1`
let a = eval(b)
console.log(a);