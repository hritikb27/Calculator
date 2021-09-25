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
    const c = parseInt(a);
    const d = parseInt(b);
    return(c+d);
};

function subtract(a,b){
    const c = parseInt(a);
    const d = parseInt(b);
    return (c-d);
};

function multiply(a,b){
    const c = parseInt(a);
    const d = parseInt(b);
    return (c*d);
};

function divide(a,b){
    const c = parseInt(a);
    const d = parseInt(b);
    return (c/d);
};

//Calculation Algorithm
function getSumValue(){
    const detect = getValue.value;
    if(detect.includes('+')){
        const a = detect.split('+');
        const sum = add(a[0],a[1]);
        getValue.value = sum;
    }
    else if(detect.includes('-')){
        const a = detect.split('-');
        const sum = subtract(a[0],a[1]);
        getValue.value = sum;
    }
    else if(detect.includes('*')){
        const a = detect.split('*');
        const sum = multiply(a[0],a[1]);
        getValue.value = sum;
    }
    else if(detect.includes('/')){
        const a = detect.split('/');
        const sum = divide(a[0],a[1]);
        getValue.value = sum;
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