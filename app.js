
console.log('----------------------------------------');
console.log('-----Flujo del Algoritmo por consola-----');
console.log('----------------------------------------');
console.log("\n Bienvenido al Programa Invertir el Número");
console.log('----------------------------------------');

document.getElementById("number").onfocus = function () {

    if (document.getElementById("number").value == 0) {
        document.getElementById("result").innerHTML = "";
    }
};

//llamado de las funciones con el evento onclick
document.getElementById("btn-inverted").onclick = function () {
    inverted();
    showNumber();
    clearBtn();
};

function inverted() {
    let number = document.getElementById("number").value;
    if (number === 0 || number === "0") {
        document.getElementById("result").innerHTML = '"El Número ingresado no puede ser el 0"';
        console.log('\n"El Número ingresado no puede ser el 0"');

    } else if (number === "") {
        document.getElementById("result").innerHTML = '"Campo vacio, Valide"';
        console.log('----------------------------------------');
        console.log('\n "Campo vacio, Valide"')
        console.log('----------------------------------------');
    } else if (number < 10) {
        document.getElementById("result").innerHTML = '"El número debe ser mayor a un digito"';
        console.log('----------------------------------------');
        console.log('\n "El número debe ser mayor a un digito"')
        console.log('----------------------------------------');
    } else {
        while (parseInt(number / 10) != 0) {
            document.getElementById("result").innerHTML += (number % 10);
            number = parseInt(number / 10);
            if (parseInt(number / 10) == 0) {
                document.getElementById("result").innerHTML += (number % 10);
                document.getElementById("result").innerHTML += "     ";
            }
            console.log('----------------------------------------');
            console.log('\n "El Resultado del número invertido es:"' + document.getElementById("result").innerHTML);
            console.log('----------------------------------------');
        }
    }
}
//funcion para limpiar el input id number
function clearBtn() {
    document.getElementById("number").value = "";
}

//funcion para mostrar el numero ingresado
function showNumber() {
    document.getElementById("number").value;
    document.getElementById("originalNumber").innerHTML = document.getElementById("number").value;
}

