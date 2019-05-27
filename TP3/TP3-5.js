function lerVetor() {
    var pResposta = document.all ['resposta'];
    var v = [];
    var iz = 0;
    var x = 0;
    var c = 0;
    for (var i = 0; i < 100; i++) {
    v[i] = Number(prompt ("Informe o " + (i+1) + "º número"));
    if (v[i]==0 && i!=0) {
        x=v[(i-1)];
        iz=i;
        i=100;
    } else if (v[i]==0) {
    iz=i;
    i=100;
    }
    }
     for (var j = 0; j < iz; j++){
        if (v[j]==x) {
         c++;   
         }; 
     }
   	pResposta.innerHTML = c;
}