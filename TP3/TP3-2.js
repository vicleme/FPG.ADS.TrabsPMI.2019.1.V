function lerVetor() {
    var pResposta = document.all ['resposta'];
    var v = [];
	var r = [];
	var cr =0;
	var q = 0;
    for (var i = 0; i < 8; i++) {
    v[i] = Number(prompt ("Informe o " + (i+1) + "º número"));
    if(v[i]>50) {
        r[cr]=v[i];
        cr++;
        q++;
    }
    }
    if (q>0) {
    for (var i = 0; i < r.length; i++) {
    pResposta.innerHTML += r[i] + '; Posição: ' + cr + '<br>';
    }} else {
   	pResposta.innerHTML += 'Nenhum número inserido é maior que 50.';
    }
}
   
