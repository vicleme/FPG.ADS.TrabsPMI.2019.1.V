function verificarPrimo() {
    var inputN = document.all['n'];
    var pResposta = document.all ['resposta'];
    var c = Number (document.all['c']);
    var c = 0

    var n = Number (inputN.value);

    for (var i=1; i <= n; i++) {
        if (n % i == 0) {
            c = c + 1
        }
    }
        if (c == 2) {
        pResposta.innerHTML= 'O número ' + n + ' é primo';
        } else {
        pResposta.innerHTML= 'O número ' + n + ' não é primo';  
        }
}