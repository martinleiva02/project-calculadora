const op1 = document.getElementById('op1')
const operacion = document.getElementById('operacion')
const op2 = document.getElementById('op2')
const btnCalcular = document.getElementById("calculo")
const pResultado = document.getElementById("resultado")


btnCalcular.addEventListener('click', calcular)

function calcular (){
    const Operacion1 = operacion.value
    const operador1 = parseFloat(op1.value)
    const operador2 = parseFloat(op2.value)
    var resultado

    if((Operacion1 == "+" || Operacion1 == "-" || Operacion1 == "*" || Operacion1 == "/" )&& !isNaN(operador1) && !isNaN(operador2)){
        
        switch (Operacion1) {
            case "+":
                resultado = operador1 + operador2
                break;
            case "-":
                resultado = operador1 - operador2
                break;
            case "*":
                resultado = operador1 * operador2
                break;
            case "/":
                resultado = operador1 / operador2
                break;        
        }

        pResultado.innerText = 'Resultado =  ' + resultado
        pResultado.style.color = 'black'
    } else{
        pResultado.innerText = 'calculo imposible'
        pResultado.style.color = 'yellow'
    }
}


