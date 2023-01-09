'use strict';

let encrypt         = document.querySelector('.encrypt-btn');
let decrypt         = document.querySelector('.decrypt-btn');
let text            = document.querySelector('.encrypt-input');
let img             = document.querySelector('.encrypt-result-img');
let result          = document.querySelector('.encrypt-result-text');
let resultTitle     = document.querySelector('.encrypt-result-title');
let resultParagraph = document.querySelector('.encrypt-result-paragraph');
let copy            = document.querySelector('.copy-btn');
let adviceIcon      = document.querySelector('.encrypt-comments-icon');
let adviceText      = document.querySelector('.encrypt-comments-paragraph');

const regExp = /[^a-z\s]/;

const encryptCode = {
    'a' : 'ai',
    'e' : 'enter',
    'i' : 'imes',
    'o' : 'ober',
    'u' : 'ufat'
}

function isValid(text) {
    if (regExp.test(text)) {
        return false;
    } else {
        return true;
    } 
}

let getText = () => {

    let textInput = text.value;

    if (isValid(textInput)) {
        adviceIcon.classList.remove('danger');
        adviceText.classList.remove('dangerText');
    } else {
        adviceIcon.classList.add('danger');
        adviceText.classList.add('dangerText');
    }
    return textInput;
}

let encryptFunction = (text) => {
    
    let newText = '';

    for (let i = 0; i < text.length; i++) {
        
        if (text[i] === 'a') {
            newText += encryptCode.a;
        } else if (text[i] === 'e') {
            newText += encryptCode.e;
        } else if (text[i] === 'i') {
            newText += encryptCode.i;
        } else if (text[i] === 'o') {
            newText += encryptCode.o;
        } else if (text[i] === 'u') {
            newText += encryptCode.u;
        } else {
            newText += text[i];
        }            
    }

    return newText;

}

let showMessage = () => {
    
    resultTitle.classList.add('invisible');
    resultParagraph.classList.add('invisible');
    img.classList.add('invisible');
    copy.classList.add('visible')

    let message = getText();

    if (message.length === 0) {
        result.innerHTML = 'Primero debe ingresar un texto valido';
    } else if (isValid(message)) {
        result.innerHTML = encryptFunction(message);
    } else {
        result.innerHTML = 'El texto ingresado no es valido.';
    }
}
 

text.addEventListener('input', getText);
encrypt.addEventListener('click', showMessage);
