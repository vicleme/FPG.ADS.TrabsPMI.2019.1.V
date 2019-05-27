function contarVinhos() {
    var pResposta = document.all ['resposta']
    v = Number (v)
    var t = Number (t)
    var b = Number (b)
    var r = Number (r)  
    var c = Number (c)
    var tp = Number (tp)
    var bp = Number (bp)
    var rp = Number (rp)
    t = 0
    b = 0
    r = 0
    c = 0
    tp = 0
    bp = 0
    rp = 0
    v = 1
    for (var i = 1; i <= 50 && v!= 0; i++) {
    var v = prompt ("Informe o tipo de vinho: ");
    while (v!=0 && v!=1 && v!=2 && v!=3) {
        alert ('O valor inserido deve estar entre 0 e 3.');
        var v = prompt ("Informe o tipo de vinho: ")
        }
    if (v==0) {
        i=50
    } else if (v==1) {
        var t = t+1;
        var c = c + 1;
    } else if (v==2) {
        var b = b+1;
        var c = c + 1;
    } else if (v==3) {
        var r = r+1;
        var c = c + 1;
    } 
    }
    if (c==0) {
        var c = 1
    }
    tp = ((t/c)*100)
    bp = ((b/c)*100)
    rp = ((r/c)*100)

    pResposta.innerHTML = tp.toFixed(2) + '% dos vinhos são tinto;<br>' + 
    bp.toFixed(2) + '% dos vinhos são branco; e<br>' +
    rp.toFixed(2) + '% dos vinhos são rosê.';
}