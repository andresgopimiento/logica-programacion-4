function esNumero(valor) {
    return !isNaN(parseFloat(valor)) && isFinite(valor);
}

// Función para obtener la serie de Fibonacci
function obtenerFibonacci(num) {
    let serie = [];
    let a = 0, b = 1;

    for (let i = 0; i < num; i++) {
        serie.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }

    return serie;
}

// Función principal
function main() {
    let entrada;
    do {
        // Solicitar al usuario un número y verificar si es válido
        entrada = prompt("Ingrese un número para obtener la serie de Fibonacci:");
    } while (!esNumero(entrada) || entrada <= 0);

    const numero = parseInt(entrada);

    // Obtener la serie de Fibonacci
    const serieFibonacci = obtenerFibonacci(numero);

    // Crear un elemento en el DOM para mostrar la serie
    const resultadoDiv = document.createElement('div');
    resultadoDiv.textContent = `Serie de Fibonacci para ${numero} números: ${serieFibonacci.join(', ')}`;

    // Agregar el elemento al cuerpo del documento
    document.body.appendChild(resultadoDiv);
}

// Llamar a la función principal al cargar la página
main();