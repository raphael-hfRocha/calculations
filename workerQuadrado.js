self.addEventListener('message', (event) => {
    const inputNumber = event.data;
    console.log('inputNumber: ', inputNumber);

    const elevadoQuadrado = inputNumber * inputNumber;

    console.log('elevadoQuadrado: ',elevadoQuadrado);

    self.postMessage(elevadoQuadrado);
})

