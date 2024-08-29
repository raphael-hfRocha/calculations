// Cria um novo Web Worker a partir do arquivo 'worker.js'
const workerQuadrado = new Worker('workerQuadrado.js');
const workerAreaTriangulo = new Worker('workerAreaTriangulo.js')
const workerFatorial = new Worker('workerFatorial.js')

function calcularQuadrado() {
    // Obtém o elemento de entrada onde o usuário digita o número
    const inputElement = document.getElementById('inputNumber');
    
    // Converte o valor digitado para um número
    const inputNumber = inputElement.value;
    
    // Envia o número digitado para o Web Worker processar
    console.log(inputNumber);
    workerQuadrado.postMessage(inputNumber);
}

// Adiciona um event listener para ouvir mensagens enviadas de volta pelo Web Worker
workerQuadrado.addEventListener('message', (event) => {
    // Obtém o resultado (quadrado do número) enviado pelo workerQuadrado
    const elevadoQuadrado = event.data;

    // Localiza o elemento <p> na página e insere o resultado nele
    const resultElement = document.getElementById('quadradoResult');
    resultElement.textContent = 'O quadrado do número é: ' + elevadoQuadrado;
    console.log(elevadoQuadrado);
});


function calcularAreaTriangulo() {
    const inputBase = document.getElementById('inputValorBase');
    const inputAltura  = document.getElementById('inputValorAltura');

    const inputAreaTriangulo = {
        inputValorBase: inputBase.value,
        inputValorAltura: inputAltura.value
    };
    
    workerAreaTriangulo.postMessage(inputAreaTriangulo)    
}


workerAreaTriangulo.addEventListener('message', (event) => {
    
    const area = event.data;

    const resultElement = document.getElementById('areaTrianguloResult');
    resultElement.textContent = `A área do triângulo é: ${area}`
});



function calcularFatorial() {
    const inputFatorial = document.getElementById('inputValorFatorial');

    const inputValorFatorial = inputFatorial.value;

    workerFatorial.postMessage(inputValorFatorial) 
}


workerFatorial.addEventListener('message', (event) => {
    
    const fatorial = event.data;

    const resultElement = document.getElementById('fatorialResult');
    resultElement.textContent = 'Valores fatorial: ' + fatorial;
});
