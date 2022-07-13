// var x = document.querySelector('[data-previous-operand]')
// var y = document.getElementById('previous-operand')
// var z = document.getElementsByClassName('previous-operand')[0]
// console.log(x, y, z)
const previousOperandElement = document.querySelector('[data-previous-operand]')
const currentOperandElement = document.querySelector('[data-current-operand]')
const clearButton = document.querySelector('[data-clear]')
const deleteButton = document.querySelector('[data-delete]')
const equalsButton = document.querySelector('[data-equals]')
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')

class Calculator {
    constructor(previousOperandElement, currentOperandElement) {
        this.previousOperandElement = previousOperandElement
        this.currentOperandElement = currentOperandElement
        this.clear()
        this.updateDisplay()
    }

    clear() {
        this.currentOperand = '0'
        this.previousOperand = ''
    }

    delete() {

    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return 
        if (this.currentOperand[0] === '0' &&
             number !== '.' &&
              !this.currentOperand.includes(".")) this.currentOperand = number
        else this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {

    }

    calculate() {

    }

    updateDisplay() {
        this.currentOperandElement.innerText = this.currentOperand
        this.previousOperandElement.innerText = this.previousOperand
    }
}


const calculator = new Calculator(previousOperandElement, currentOperandElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

clearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})



window.addEventListener('load', () => {
    console.log("Hello Calculator!")
})