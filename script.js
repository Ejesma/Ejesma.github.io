const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 


const encryptButton = document.querySelector("#btn-encrypt");
const decryptButton = document.querySelector('#btn-decrypt');
const copyButton = document.querySelector('#btn-copy');

function encrypt(){
    let text = document.getElementById('textarea').value.toLowerCase();
    text = removeAccents(text);
    let encryptedText = [];
    
    for(let i = 0; i < text.length; i++){
        if(text[i] == 'a'){
            encryptedText.push('ai');
        }
        else if(text[i] == 'e'){
            encryptedText.push('enter');
        }
        else if(text[i] == 'i'){
            encryptedText.push('imes');
        }
        else if(text[i] == 'o'){
            encryptedText.push('ober');
        }
        else if(text[i] == 'u'){
            encryptedText.push('ufat');
        }
        else{
            encryptedText.push(text[i]);
        }
    }
    encryptedText = encryptedText.join('');
    console.log(encryptedText);
    
    document.getElementById('hero').style.display = 'none';
    document.getElementById('right-text').style.display = 'none';
    document.getElementById('right-p').innerText = encryptedText;
    copyButton.style.display = 'inline';
}

encryptButton.addEventListener('click', encrypt);

function decrypt(){
    let text = document.getElementById('textarea').value.toLowerCase();
    text = removeAccents(text);
    let decryptedText = text.replace(/ai/igm,'a').replace(/enter/igm,'e').replace(/imes/igm,'i').replace(/ober/igm,'o').replace(/ufat/igm,'u'); 
    
    document.getElementById('hero').style.display = 'none';
    document.getElementById('right-text').style.display = 'none';
    document.getElementById('right-p').innerText = decryptedText;
    copyButton.style.display = 'inline';
}

decryptButton.addEventListener('click', decrypt);

function copy(){
    let text = document.getElementById('textarea');
    let content = document.getElementById('right-p');
    content.select();
    document.execCommand("copy");
    text.value = "";
    alert('¡Copiado!');
}

copyButton.addEventListener('click', copy);