const getValue = document.querySelector('#calc-display');
const submit = document.querySelector('#submit');
const digits = document.querySelectorAll('.digits');

digits.forEach(digit=>{
    digit.addEventListener('click', ()=>{
        getValue.value += digit.getAttribute('value');
    })
})

function add(a,b){
    const c = parseInt(a);
    const d = parseInt(b);
    console.log(c+d);
};

function subtract(a,b){
    const c = parseInt(a);
    const d = parseInt(b);
    console.log(c-d);
    return sum;
};

function multiply(a,b){
    const c = parseInt(a);
    const d = parseInt(b);
    console.log(c*d);
    // return sum;
};

function divide(a,b){
    const c = parseInt(a);
    const d = parseInt(b);
    console.log(c/d);
    return sum;
};

function operate(sum){
    const detect = sum;
    console.log('hello')
    if(detect.includes('+')){
        const a = sum.split('+');
        console.log(a)
        add(a[0],a[1]);
    }
    else if(detect.includes('-')){
        const a = sum.split('-');
        subtract(a[0],a[1]);
    }
    else if(detect.includes('*')){
        const a = sum.split('*');
        multiply(a[0],a[1]);
    }
    else if(detect.includes('/')){
        const a = sum.split('/');
        divide(a[0],a[1]);
    }
}

submit.addEventListener('click', ()=>{
    const detect = getValue.value;
    if(detect.includes('+')){
        const a = detect.split('+');
        console.log(a)
        add(a[0],a[1]);
    }
    else if(detect.includes('-')){
        const a = detect.split('-');
        subtract(a[0],a[1]);
    }
    else if(detect.includes('*')){
        const a = detect.split('*');
        multiply(a[0],a[1]);
    }
    else if(detect.includes('/')){
        const a = detect.split('/');
        divide(a[0],a[1]);
    }
})
