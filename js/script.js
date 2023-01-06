const encryptCode = {
    'a' : 'ai',
    'e' : 'enter',
    'i' : 'imes',
    'o' : 'ober',
    'u' : 'ufat'
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



