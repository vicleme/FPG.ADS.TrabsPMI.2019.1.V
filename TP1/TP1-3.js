function ordenarNumeros() {
    var inputN1 = document.all['n1'];
    var inputN2 = document.all['n2'];
    var inputN3 = document.all['n3'];
    var pResposta = document.all ['resposta'];

    var n1 = Number (inputN1.value);
    var n2 = Number (inputN2.value);
    var n3 = Number (inputN3.value);

    pResposta.innerHTML = '';
    if (n1 >= n2 && n1 >= n3){
        if (n2 >= n3){
            pResposta.innerHTML += n3 +' '+ n2 +' '+ n1;
        } else {
            pResposta.innerHTML += n2 +' '+ n3 +' '+ n1;
        }
    } else if (n2 >= n1 && n2 >= n3){
        if (n1 >= n3){
            pResposta.innerHTML += n3 +' '+ n1 +' '+ n2;
        } else {
            pResposta.innerHTML += n1 +' '+ n3 +' '+ n2;
        } 
    } else {
        if (n1 >= n2){
            pResposta.innerHTML += n2 +' '+ n1 +' '+ n3;
        } else {
            pResposta.innerHTML += n1 +' '+ n2 +' '+ n3;
        }
}
}