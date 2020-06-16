let digits = document.querySelector('#digits');
function add(a,b){return a+b;}
function subtract(a,b){return a-b;}
function multiply(a,b){return a*b;}
function divide(a,b){return a/b;}

function operator(a,b,c){
    switch(c){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            return ;
    }
}

function writeNumber(btn){
    if(digits.textContent.length<=10){
        if(digits.textContent==0){
            digits.textContent=btn.id;
        }else{
        digits.textContent += btn.id;
        console.log(digits.textContent);
        }
    }
}
function backSpace(){
    if(digits.textContent.length>1){digits.textContent = (digits.textContent.substring(0,digits.textContent.length-1))} else{digits.textContent = 0};
}
function negative(){
    if(digits.textContent.startsWith('-')){
        digits.textContent = digits.textContent.replace('-','');
    }else {
        digits.textContent = '-'+digits.textContent;
    }
}
function decimal(){
    if(digits.textContent.endsWith('.')){
        digits.textContent = digits.textContent.replace('.','');
    }else if(digits.textContent.indexOf('.')<1){
        digits.textContent =digits.textContent + '.';
    }
}
function calc(){
    let buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if((btn.id).length==1){writeNumber(btn);}  
            if(btn.id==='backspace'){backSpace();}  
            if(btn.id==='neg'){negative();}
            if(btn.id==='decimal'){decimal();}
            if(btn.id==='decimal'){decimal();}
        });
    });
}
calc();