let varA = ''
let varB = ''
let varC = 0
let opr = ''
let textSlot = document.getElementById('slotNumber')
let blockA = true;

function inputNumber(number) {
    blockA ? varA += number : varB += number
    consoleAll()
    showText()
}

function inputOperation(operation) {
    opr = operation
    varB != '' ? !blockA ? calculate(true) : '' : ''
    varA != '' && varB == '' && blockA == false ? '' : blockA = !blockA
    consoleAll()
    showText()
}

function calculate(change) {
    consoleAll()
    let a = parseFloat(varA) || 0
    let b = parseFloat(varB) || 0
    console.log('ab', a, b)
    varC = opr == '+' ? a + b : opr == '-' ? a - b : opr == '*' ? a * b : opr == '/' ? a / b : varA
    varA = varC
    varB = ''
    opr = ''
    blockA = change ? blockA : true
    consoleAll()
    showText()
}
const clearVariable = () => {
    varA = ''
    varB = ''
    varC = 0
    opr = ''
    blockA = true;
    showText()
}

const consoleAll = () => {
    console.log(varA, opr, varB, '=', varC, blockA)
}
const showText = () => {
    textSlot.innerHTML = `${varA} ${opr} ${varB}`
}