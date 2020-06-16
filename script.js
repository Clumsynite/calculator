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

function writeNumber(){
    let numberBtn = document.querySelectorAll('button');
    numberBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            let digitValue = digits.textContent;
            if((btn.id).length==1){
                if(digitValue.length<=10){
                    if(digitValue==0){
                        digits.textContent=btn.id;
                    }else{
                    digits.textContent += btn.id;
                    console.log(digitValue);
                    }
                }
            }
        });
    });
}

function backspace(){
    let bkspc = document.querySelector('#backspace');
    bkspc.addEventListener('click', () => {
        let digitValue = digits.textContent;
        if(digitValue.length>1){digits.textContent = (digitValue.substring(0,digitValue.length-1))} else{digits.textContent = 0};
    });
}

//cwriteNumber();
// backspace();


function write(btn){
    let digitValue = digits.textContent;
    if(digitValue.length<=10){
        if(digitValue==0){
            digits.textContent=btn.id;
        }else{
        digits.textContent += btn.id;
        console.log(digitValue);
        }
    }
}
function clearOne(){
    let digitValue = digits.textContent;
    if(digitValue.length>1){digits.textContent = (digitValue.substring(0,digitValue.length-1))} else{digits.textContent = 0};
}

function calc(){
    let buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if((btn.id).length==1){
                write(btn);
            }  
            if(btn.id==='backspace'){
                clearOne();
            }  
        });
    });
}
calc();