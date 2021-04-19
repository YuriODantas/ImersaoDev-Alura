let input = document.querySelector('.input');

let cleanScreen = false;
let operator = false;
let point = false;
let firstParameter = true;

function addParameter(number) {
    if (cleanScreen == true && number != '+' && number != '-' && number != '*' && number != '/' && number != '.') {
        cc();
        cleanScreen = false;
    }

    if (number == '+' || number == '-' || number == '*' || number == '/') {
        if (operator == false && firstParameter == false) {
            input.value += number;
            operator = true;
            point = false;
            cleanScreen = false;
        } else if (operator == true || firstParameter == true) {
            input.value = input.value;
        }
    }

    if(operator == true){
        input.value = input.value;
    }

    if(number == '.'){
        if(point == false && firstParameter == false){
            input.value += number;
            point = true;
        }else{
            input.value = input.value;
        }
    }

    if(number != '+' && number != '-' && number != '*' && number != '/' && number != '.'){
        input.value += number;
        firstParameter = false;
    }
}

function result() {
    let content = input.value;
    if(content){
        input.value = eval(content);
    }
    cleanScreen = true;
    operator = false;
    point = false;
}

function cc() {
    input.value = "";
    operator = false;
    point = false;
    firstParameter = true;
}