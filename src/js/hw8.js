//! Завдання 1 ===================================
const counterInput = document.querySelector('#value');
let counterValue = 0;

const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

export const plusOne = () => {
    counterValue += 1;
    counterInput.textContent = counterValue;
}

export const minusOne = () => {
    counterValue -= 1;
    counterInput.textContent = counterValue;
}

//! Завдання 2 ===================================
const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

export const setOutput = (event) => {
    outputText.textContent = event.currentTarget.value;
    if (outputText.textContent.trim() === '') {
        outputText.textContent = 'Anonymous';
    }
}
