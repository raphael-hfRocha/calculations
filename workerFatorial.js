self.addEventListener('message', (event) => {
    const inputValorFatorial = event.data;

    let fatorial = 1;
    const listValues = []
    
    for(let i = 1; i <= inputValorFatorial; i++) {
        fatorial = fatorial * i;
        listValues.push(fatorial)
    }
    
    self.postMessage(listValues);
})