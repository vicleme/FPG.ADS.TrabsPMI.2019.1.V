function gerarFatorial() {
    var inputN = document.all['n'];
    var n = Number (inputN.value);
    var pResposta = document.all ['resposta'];
    var fat = Number (document.all['ant1']);
    if (n==0) {
        fat = 1
    } else {
    fat = n    
    }
    for (var i = (n-1); i >= 1; i=i-1) {
        fat=fat*i
    }

    pResposta.innerHTML = 'O fatorial de ' + n + ' é ' + fat + "." 
}