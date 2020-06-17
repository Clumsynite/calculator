let digits = document.querySelector('#digits');
let calculation = document.querySelector('#calculation');
calculation.textContent="";
let history = [], log = [];

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
    // if(btn.id==''){console.log(btn)}
    if(btn.id===undefined){btn.id = btn.key;};
    if(digits.textContent.length<=10){
        if(calculation.textContent===""){
            if(digits.textContent==0){
                digits.textContent=btn.id;
            }else{
                digits.textContent += btn.id;
            }
        }else{
            calculation.textContent = "";
            if(calculation!==''&&(digits.textContent.length>=1||digits.textContent==='0')){
                digits.textContent = '';
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
        digits.textContent =digits.textContent + '.';
    }
}

function backSpace(){
    if(digits.textContent.length>1){digits.textContent = (digits.textContent.substring(0,digits.textContent.length-1))} else{digits.textContent = 0};
}
function clearScreen(){
    digits.textContent = 0;
    calculation.textContent = 0;
    log=[];
}
function clearAll(){
    digits.textContent = 0;
    calculation.textContent = '';
    history = [];
    log = [];
}

function operation(symbol){
    if(digits.textContent==='0'&&calculation.textContent===''){return ;}
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
                    log[i-1] = operator(Number(log[i-1]), Number(log[i+1]), log[i]);
                    log.splice(i,i+1);
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
    if(log.length===1){    
        digits.textContent = log.toString();
        history.push(log);
        log = [];
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
            if(btn.id==='clearScreen'){clearScreen();}
            if(btn.id==='clearAll'){clearAll();}
            if(btn.id==='add'){operation('+');}
            if(btn.id==='subtract'){operation('-');}
            if(btn.id==='multiply'){operation('*');}
            if(btn.id==='divide'){operation('/');}
            if(btn.id==='equals'){calculate();}
        });
    });
}
calc();

document.addEventListener('keydown', function(event) {
    console.log(event);
    if(!isNaN(Number(event.key))){writeNumber(event);}
    if(event.key==='Backspace'){backSpace();}
    if(event.key==='.'){decimal();}
    if(event.key==='+'){operation('+');}
    if(event.key==='-'){operation('-');}
    if(event.key==='*'){operation('*');}
    if(event.key==='/'){operation('/');}
    if(event.key==='Enter'||event.key==='='){calculate();}
});