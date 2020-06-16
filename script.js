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

function write(btn){
    if(digits.textContent.length<=10){
        if(digits.textContent==0){
            digits.textContent=btn.id;
        }else{
        digits.textContent += btn.id;
        console.log(digits.textContent);
        }
    }
}
function clearOne(){
    if(digits.textContent.length>1){digits.textContent = (digits.textContent.substring(0,digits.textContent.length-1))} else{digits.textContent = 0};
}
function ngative(){
    if(digits.textContent.startsWith('-')){
        digits.textContent = digits.textContent.replace('-','');
    }else {
        digits.textContent = '-'+digits.textContent;
    }
}
function calc(){
    let buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if((btn.id).length==1){write(btn);}  
            if(btn.id==='backspace'){clearOne();}  
            if(btn.id==='neg'){ngative();}
        });
    });
}
calc();