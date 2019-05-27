function gerarSequencia() {
    var inputN = document.all['n'];
    var pResposta = document.all ['resposta'];
    var ant1 = Number (document.all['ant1']);
    var ant2 = Number (document.all['ant2']);
    ant1 = 1
    ant2 = 0

    var n = Number (inputN.value);

    for (var i = 1; i <= n; i++) {
        ant0 = ant1 + ant2
        if (ant0 == ant1) {
        pResposta.innerHTML= ant0
        } else {
        pResposta.innerHTML+= ' ' + ant0
        }
        ant1 = ant2
        ant2 = ant0
    }
}