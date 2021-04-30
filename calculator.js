window.onload = function () {

    let firstNumberVariableHeading = 'First number';
    document.getElementById('firstNumberHeading').innerHTML = firstNumberVariableHeading;
   
    let secondNumberVariableHeading = 'Second number';
    document.getElementById('secondNumberHeading').innerHTML = secondNumberVariableHeading;

    let resultNumberVariableHeading = 'Result';
    document.getElementById('resultHeading').innerHTML = resultNumberVariableHeading;
}
function sum(){
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let r = n1+n2
    document.getElementById('result').value = r;
}

function sub(){
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let r = n1-n2
    document.getElementById('result').value = r;
}

function mul(){
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let r = n1*n2
    document.getElementById('result').value = r;
}

function div(){
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let r = n1/n2
    document.getElementById('result').value = r;
}