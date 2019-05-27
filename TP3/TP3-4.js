function lerVetor() {
    var pResposta = document.all ['resposta'];
    var v = [];
    var x = 0;
    for (var i = 0; i < 20; i++) {
    v[i] = Number(prompt ("Informe o " + (i+1) + "º número"));
    }
     for (var i = 0; i < 19; i++) {
     for (var j = i+1; j < 20; j++) {
    if (v[i]>v[j]){
        x=v[i];
        v[i]=v[j]
        v[j]=x
    }
    }
    }
    for (var i = 0; i < 20; i++) {
   	pResposta.innerHTML += v[i] + '<br>';
    }
}