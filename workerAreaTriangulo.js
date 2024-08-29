self.addEventListener('message', (event) => {

    const inputAreaTriangulo = event.data;

    const calculoArea = (inputAreaTriangulo.inputValorBase * inputAreaTriangulo.inputValorAltura) / 2;
    
    self.postMessage(parseFloat(calculoArea));
})