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

const decryptCode = {
    'ai'    : 'a',
    'enter' : 'e',
    'imes'  : 'i',
    'ober'  : 'o',
    'ufat'  : 'u'
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
    
    let encryptedMessage = '';

    for (let i = 0; i < text.length; i++) {
        
        if (text[i] === 'a') {
            encryptedMessage += encryptCode.a;
        } else if (text[i] === 'e') {
            encryptedMessage += encryptCode.e;
        } else if (text[i] === 'i') {
            encryptedMessage += encryptCode.i;
        } else if (text[i] === 'o') {
            encryptedMessage += encryptCode.o;
        } else if (text[i] === 'u') {
            encryptedMessage += encryptCode.u;
        } else {
            encryptedMessage += text[i];
        }            
    }

    return encryptedMessage;

}

let decryptFunction = (text) => {
    
    let encryptedMessage = text.split(' ');
    let decryptedMessage = '';
    let word = '';

    for (let i = 0; i < encryptedMessage.length; i++) {

        word = encryptedMessage[i];
        
        if (word.includes(encryptCode.a) || word.includes(encryptCode.e) || word.includes(encryptCode.i) || word.includes(encryptCode.o) || word.includes(encryptCode.u)) {
            word = word.replaceAll('ai', decryptCode.ai);
            word = word.replaceAll('enter', decryptCode.enter);
            word = word.replaceAll('imes', decryptCode.imes);
            word = word.replaceAll('ober', decryptCode.ober);
            word = word.replaceAll('ufat', decryptCode.ufat);
            decryptedMessage += word + ' ';
        } else {
            decryptedMessage += word + ' ';
        }
        
    }

    return decryptedMessage;

}


let showMessageEncrypted = () => {
    
    resultTitle.classList.add('invisible');
    resultParagraph.classList.add('invisible');
    img.classList.add('invisible');
    copy.classList.add('visible');

    let message = getText();

    if (message.length === 0) {
        result.innerHTML = 'Primero debe ingresar un texto valido';
    } else if (isValid(message)) {
        result.innerHTML = encryptFunction(message);
    } else {
        result.innerHTML = 'El texto ingresado no es valido';
    }
}

let showMessageDecrypted = () => {

    resultTitle.classList.add('invisible');
    resultParagraph.classList.add('invisible');
    img.classList.add('invisible');
    copy.classList.add('visible');

    let message = getText();

    
    if (message.length === 0) {
        result.innerHTML = 'Primero debe ingresar un texto valido';
    } else if (isValid(message)) {
        result.innerHTML = decryptFunction(message);
    } else {
        result.innerHTML = 'El texto ingresado no es valido';
    }

}
    

let copyMessage = () => {
    navigator.clipboard.writeText(result.innerHTML);
    copy.innerHTML = 'Texto copiado !!!';
    copy.classList.remove('textCopied');
    copy.classList.add('copy');

    setTimeout(() => {
        copy.classList.remove('textCopied');
        copy.innerHTML = 'Copiar';
        copy.classList.remove('copy');
    }, 1500)
}




text.addEventListener('input', getText);
encrypt.addEventListener('click', showMessageEncrypted);
decrypt.addEventListener('click', showMessageDecrypted);
copy.addEventListener('click', copyMessage);

