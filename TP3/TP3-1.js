function lerVetor() {
    var pResposta1 = document.all ['resposta1'];
    var pResposta2 = document.all ['resposta2'];
    var v = [];
	var p = [];
	var n = [];
    var cp = 0;
    var cn = 0;
    for (var i = 0; i < 8; i++) {
    v[i] = Number(prompt ("Informe o " + (i+1) + "º número"));
    if(v[i]<0) {
        n[cn]=v[i];
        cn++;
    } else {
        p[cp]=v[i];
        cp++;
    }
}
    for (var i = 0; i < p.length ; i++) {
    pResposta1.innerHTML += p[i] + '<br>';
    }
    for (var i = 0; i < n.length ; i++) {
    pResposta2.innerHTML += n[i] + '<br>';
}
}