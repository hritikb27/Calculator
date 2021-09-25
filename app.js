//Variable Declared
const getValue = document.querySelector('#calc-display');
const submit = document.querySelector('#submit');
const digits = document.querySelectorAll('.digits');
const clear = document.querySelector('#clear');
const back = document.querySelector('#back');
const operators = document.querySelectorAll('.operators');

//For Multiple Equations
operators.forEach(operator=>{
    operator.addEventListener('click', ()=>{
        if(getValue.value.includes('+')||getValue.value.includes('-')||getValue.value.includes('*')||getValue.value.includes('/')){
            getSumValue();
        }
    })
})

//For displaying operators
digits.forEach(digit=>{
    digit.addEventListener('click', ()=>{
        getValue.value += digit.getAttribute('value');
    })
})

//Basic Calculator Functions
function add(a,b){
    return(a+b);
};

function subtract(a,b){
    return (a-b);
};

function multiply(a,b){
    return (a*b);
};

function divide(a,b){
    return (a/b);
};

//Find Operator
function getOperator(){
    const detect = getValue.value;
    if(detect.includes('+')) return('+');
    else if(detect.includes('-')) return('-');
    else if(detect.includes('*')) return('*');
    else if(detect.includes('/')) return('/');
}

//Calculation Algorithm
function getSumValue(){
    const whichOperator = getOperator();
    const findOperator = getValue.value.split(getOperator());
    findOperator[0]= parseFloat(findOperator[0]);
    findOperator[1]= parseFloat(findOperator[1]);

    if(whichOperator==='+'){
        getValue.value = add(findOperator[0],findOperator[1]);;
    }
    else if(whichOperator==='-'){
        getValue.value = subtract(findOperator[0],findOperator[1]);;
    }
    else if(whichOperator==='*'){
        getValue.value = multiply(findOperator[0],findOperator[1]);
    }
    else if(whichOperator==='/'){
        getValue.value = divide(findOperator[0],findOperator[1]);
    }
}


//Event Listeners
submit.addEventListener('click', getSumValue);

clear.addEventListener('click', ()=>{
    getValue.value = '';
})

back.addEventListener('click', ()=>{
    getValue.value = getValue.value.substr(0, getValue.value.length-1);
})