function compararDatas() {
    var inputA1 = document.all['a1'];
    var inputM1 = document.all['m1'];
    var inputD1 = document.all['d1'];
    var inputA2 = document.all['a2'];
    var inputM2 = document.all['m2'];
    var inputD2 = document.all['d2'];
    var pResposta = document.all ['resposta'];

    var a1 = Number (inputA1.value);
    var a2 = Number (inputA2.value);
    var m1 = Number (inputM1.value);
    var m2 = Number (inputM2.value);
    var d1 = Number (inputD1.value);
    var d2 = Number (inputD2.value);

    pResposta.innerHTML = '';
    if ((a1 > a2) || (a1==a2 && m1>m2) || (a1==a2 && m1==m2 && d1>d2)){
            pResposta.innerHTML += 'A 1ª data é cronologicamente maior.<br><b>Obs:</b> Considera-se uma cronologia de ordem crescente'; 
    } else if (a1==a2 && m1==m2 && d1==d2){
            pResposta.innerHTML += 'As datas são iguais.';
    } else {
            pResposta.innerHTML += 'A 2ª data é cronologicamente maior.<br><b>Obs:</b> Considera-se uma cronologia de ordem crescente';
}
}