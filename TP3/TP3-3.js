function lerVetor() {
    var pResposta = document.all ['resposta'];
    var v = [];
    for (var i = 0; i < 10; i++) {
    v[i] = Number(prompt ("Informe o " + (i+1) + "º número"));
    if(v[i] % 2 == 0) {
        v[i]=v[i]+5;
    } else {
    	v[i]=v[i]*5
    }
    }
    for (var i = 0; i < 10; i++) {
   	pResposta.innerHTML += v[i] + '<br>';
    }
}
   