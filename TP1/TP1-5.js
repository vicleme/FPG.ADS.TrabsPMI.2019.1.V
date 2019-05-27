function escolherCaso() {
    var escolherCaso = document.all['caso'];
    var caso = escolherCaso.value;

    switch (caso) {
        case 'soma':
            var valor1 = prompt ("Informe um número: ");
            valor1 = Number (valor1);
            var valor2 = prompt ("Informe outro número: ");
            valor2 = Number (valor2);
            var somarvalor = valor1 + valor2;
            alert("A soma é: " + somarvalor)
            break;
        case 'raiz':
            var valor1 = prompt ("Informe um número: ");
            valor1 = Number (valor1);
            var calcularraiz = Math.sqrt(valor1);
            alert("A raiz é: " + calcularraiz)
            break;
    }
}