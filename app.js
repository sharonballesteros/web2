function calcular(operacion) {
    // Obtenemos los valores de los inputs
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const display = document.getElementById('resultado-txt');

    // Validación simple: verificar si son números
    if (isNaN(n1) || isNaN(n2)) {
        display.innerText = "Error: Falta número";
        return;
    }

    let resultado = 0;

    // Estructura de control para decidir la operación
    switch (operacion) {
        case '+':
            resultado = n1 + n2;
            break;
        case '-':
            resultado = n1 - n2;
            break;
        case '*':
            resultado = n1 * n2;
            break;
        case '/':
            // Validación para evitar división por cero
            if (n2 === 0) {
                display.innerText = "No se puede ÷ 0";
                return;
            }
            resultado = n1 / n2;
            break;
    }

    // Mostramos el resultado en el HTML
    display.innerText = `Resultado: ${resultado}`;
}