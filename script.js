// let morph;

function validateForm() {
    let pass = document.querySelector("#password").value;
    let conPass = document.querySelector("#confirmPass").value;

    if(pass !== conPass){
        showError("confirmPass", "Password do not match");
        return false;
    }
    else{
        removeError("confirmPass");
        return true;
    }
}

function showError(boxID, msg){
    let box = document.querySelector(`.error-msg[data-for="${boxID}"]`);
    let input = document.querySelector(`#${boxID}`);
    
    box.innerText = msg;
}

function removeError(boxID){
    let box = document.querySelector(`.error-msg[data-for="${boxID}"]`);
    box.innerText = "";
}

document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector("form.content");
    let counter = 0;
    form.onsubmit = validateForm;

    setInterval(()=>{
        counter++;
        if(counter%2 != 0){
            changeToXSR();
        }
        else{
            changeToYamaha();
        }
    }, 5000)
});


function changeToXSR(){
    let logoText = document.querySelector(".logo-text");
    let counter = 0;

    logoText.innerText = "YAMAHA";

    let morph = setInterval(()=>{
        counter++;
        if(counter <= 4){
            logoText.innerText = jumbleLetter(6);
        }
        else if(counter <= 8){
            logoText.innerText = jumbleLetter(5);
        }
        else if(counter <= 12){
            logoText.innerText = jumbleLetter(4);
        }
        else if(counter <= 16){
            logoText.innerText = jumbleLetter(3);
        }
        else{
            logoText.innerText = "XSR";
            clear(morph);
        }
    }, 50);
}

function clear(interval){
    clearInterval(interval);
}

function changeToYamaha(){
    let logoText = document.querySelector(".logo-text");
    let counter = 0;


    let morph = setInterval(()=>{
        counter++;
        if(counter <= 4){
            logoText.innerText = jumbleLetter(3);
        }
        else if(counter <= 8){
            logoText.innerText = jumbleLetter(4);
        }
        else if(counter <= 12){
            logoText.innerText = jumbleLetter(5);
        }
        else if(counter <= 16){
            logoText.innerText = jumbleLetter(6);
        }
        else{
            logoText.innerText = "YAMAHA";
            clear(morph);
        }
    }, 50);
}


function jumbleLetter(length){
    let pool = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let jumbled = "";

    for(i = 0; i < length; i++){
        let randNum = Math.floor(Math.random() * pool.length-1) + 1;
        jumbled += pool[randNum];
    }
    

    return jumbled;
}