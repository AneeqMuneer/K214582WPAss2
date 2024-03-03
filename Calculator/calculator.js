let a;
let b;
let operation;
let ans;

initialize = () => {
    a = '';
    b = '';
    ans = '';
    operation = '';
}

operand = (val) => {
    if(operation == ''){
        a += val;
        document.getElementById("inputoutput").value = a;
    }
    else{
        b += val;
        document.getElementById("inputoutput").value = b;
    }
}

switchoperand = (op) => {
    if(operation == ''){
        operation = op;
    }
    else{
        if(a != '' && b != ''){
            solve();
        }
        else if(a != '' && b == ''){
            operation = op;
        }
    }
}

solve = () => {
    let expression = a + operation + b;

    try {
        ans = eval(expression);

        document.getElementById("inputoutput").value = ans;
    } catch (error) {
        document.getElementById("inputoutput").value = 'Error';
    }

    a = ans;
    b = '';
}