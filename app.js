<<<<<<< HEAD
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
=======
// Seleccionamos los elementos del DOM
const boton = document.getElementById('btnGenerar');
const input = document.getElementById('inputNumero');
const contenedor = document.getElementById('contenedor-listas');

// Agregamos el evento click al botón
boton.addEventListener('click', () => {
    // 1. Obtenemos el valor del input y lo convertimos a número
    const cantidad = parseInt(input.value);

    // Validamos que sea un número válido
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingresa un número válido mayor a 0.");
        return;
    }

    // 2. Limpiamos el contenedor antes de generar nuevas listas
    contenedor.innerHTML = '';

    // 3. Generamos el conjunto de listas
    // Creamos un arreglo maestro para guardar las listas (opcional, para lógica interna)
    let conjuntoMaestro = [];

    for (let i = 0; i < cantidad; i++) {
        // Creamos una lista interna basada en el índice actual
        let nuevaLista = [`ID-${i}`, `Fila contenido ${i}`, `Posición: ${i}`];
        conjuntoMaestro.push(nuevaLista);

        // 4. Creamos el elemento visual para el HTML
        const elementoDiv = document.createElement('div');
        elementoDiv.className = 'item-lista';
        elementoDiv.innerHTML = `<strong>Index [${i}]:</strong> Contenido de la lista generada`;
        
        // Lo agregamos al contenedor de la página
        contenedor.appendChild(elementoDiv);
    }

    // Mostramos el resultado técnico en la consola para revisión
    console.log("Estructura generada:", conjuntoMaestro);
});
>>>>>>> 350d2cf5b79ee9a0aff8607f43d402955f8cea10
