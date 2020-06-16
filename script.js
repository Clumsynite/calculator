let digits = document.querySelector('#digits');
let calculation = document.querySelector('#calculation');
calculation.textContent="";
let history = [];

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
    if(digits.textContent.length<=10 && calculation.textContent===""){
        if(digits.textContent==0){
            digits.textContent=btn.id;
        }else{
        digits.textContent += btn.id;
        }
    }else{
        calculation.textContent = "";
        if(calculation!==''&&(digits.textContent>1||digits.textContent==='0')){
            digits.textContent = '';
        }
        // }else if(calculation!==''&&digits.textContent==='0'){
        //     digits.textContent = '';
        // }
        digits.textContent += btn.id;   
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
function clearScreen(){
    digits.textContent = 0;
    calculation.textContent = 0;
}
function clearAll(){
    digits.textContent = 0;
    calculation.textContent = '';
    history = [];
}
function addBtn(){
    if(digits.textContent==='0'){return ;}
    history.push(digits.textContent, '+');
    calculation.textContent = '+';
}
function subtractBtn(){
    if(digits.textContent==='0'){return ;}
    history.push(digits.textContent, '-');
    calculation.textContent = '-';
}
function operation(symbol){
    if(digits.textContent==='0'){return ;}
    history.push(digits.textContent, symbol);
    calculation.textContent = symbol;
}
function calculate(){
    history.push(digits.textContent);
    digits.textContent = 0;
    let total = 0;
    for(let i=0; i<history.length; i++){
        if(isNaN(history[i])){
            total += operator(Number(history[i-1]), Number(history[i+1]), history[i]);
        }
        if(i%2!=0){
            
        }
    }
    calculation.textContent = total;
}
function calc(){
    let buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if((btn.id).length==1){writeNumber(btn);}  
            if(btn.id==='backspace'){backSpace();}  
            if(btn.id==='neg'){negative();}
            if(btn.id==='decimal'){decimal();}
            if(btn.id==='clearScreen'){clearScreen();}
            if(btn.id==='clearAll'){clearAll();}
            if(btn.id==='add'){operation('+');}
            if(btn.id==='subtract'){operation('-');}
            if(btn.id==='equals'){calculate();}
        });
    });
}
calc();