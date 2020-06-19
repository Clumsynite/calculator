let digits = document.querySelector('#digits');
let calculation = document.querySelector('#calculation');
calculation.textContent="";
let history = [], log = [], c = [];

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
    
    if(btn.code==='Space'){return;};
    if(btn.id===undefined){btn.id = btn.key;};
    if(digits.textContent.length<=10){
        if(calculation.textContent===""&&c.length===0){
            if(digits.textContent==0 && !digits.textContent.endsWith('.')){
                digits.textContent=btn.id;
            }else{
                digits.textContent += btn.id;
            }
        }else{
            calculation.textContent = "";
            if(calculation!==''&&(digits.textContent.length>=1||digits.textContent==='0')){
                digits.textContent = '';
                c=[];
            }
            digits.textContent += btn.id;
        }
    }
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
        digits.textContent = digits.textContent + '.';
    }
}

function backSpace(){
    if(digits.textContent.length>1){digits.textContent = (digits.textContent.substring(0,digits.textContent.length-1))} else {digits.textContent = 0};
}
function clearScreen(){
    digits.textContent = 0;
    calculation.textContent = '';
    log=[];
}
function operation(symbol){
    if((digits.textContent==='0'&&calculation.textContent==='')||digits.textContent.length>10){return ;}
        log.push(digits.textContent, symbol);
    if(digits.textContent==='0'&&!isNaN(Number(calculation.textContent))){
        digits.textContent = log[-1];
        log.push(digits.textContent, symbol);
    }
    calculation.textContent = symbol;
    if(symbol==='*'){calculation.textContent='X';}
}

function calculate(){
    log.push(digits.textContent);
    while(log.length>1){
        for(let i=0; i<log.length; i++){
            if(isNaN(log[i])){
                if(log[i]==='/'){
                    if(log[i+1]==="0"){
                        log[i-1] = "Are you trying to test me"
                        log.splice(i,i+1);
                    }else {   
                        log[i-1] = operator(Number(log[i-1]), Number(log[i+1]), log[i]);
                        log.splice(i,i+1);   
                    }
                }else if(log[i]==='*'){
                    log[i-1] = operator(Number(log[i-1]), Number(log[i+1]), log[i]);
                    log.splice(i,i+1);
                }else if(log[i]==='+'){
                    log[i-1] = operator(Number(log[i-1]), Number(log[i+1]), log[i]);
                    log.splice(i,i+1);
                }else if(log[i]==='-'){
                    log[i-1] = operator(Number(log[i-1]), Number(log[i+1]), log[i]);
                    log.splice(i,i+1);
                }
            }
        }
    }    
    digits.textContent = log;
    history.push(log);
    log = [];
    c[0] = 1;
}

(function ( ){
    let buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', () => {
            if((btn.id).length==1){writeNumber(btn);}  
            if(btn.id==='backspace'){backSpace();}  
            if(btn.id==='neg'){negative();}
            if(btn.id==='decimal'){decimal();}
            if(btn.id==='clearScreen'){clearScreen();}
            if(btn.id==='add'){operation('+');}
            if(btn.id==='subtract'){operation('-');}
            if(btn.id==='multiply'){operation('*');}
            if(btn.id==='divide'){operation('/');}
            if(btn.id==='equals'){calculate();}
        });
    });
}());

document.addEventListener('keydown', function(event) {
    if(!isNaN(Number(event.key))){writeNumber(event);}
    if(event.key==='Backspace'){backSpace();}
    if(event.key==='.'){decimal();}
    if(event.key==='+'){operation('+');}
    if(event.key==='-'){operation('-');}
    if(event.key==='*'){operation('*');}
    if(event.key==='/'){operation('/');}
    if(event.key==='Enter'||event.key==='='){calculate();}
    if(event.code==='KeyC'){clearScreen();}
});