function avaliarAluno() {
    var inputNtp = document.all['ntp'];
    var inputNas = document.all['nas'];
    var inputNef = document.all['nef'];
    var pResposta = document.all ['resposta'];

    var ntp = Number (inputNtp.value);
    var nas = Number (inputNas.value);
    var nef = Number (inputNef.value);
    var media = ((ntp*2)+(nas*3)+(nef*5))/10

    pResposta.innerHTML = '<br>Nota de trabalho prático: ' + ntp +
    '<br>Nota de avaliação semestral: ' + nas +
    '<br>Nota de exame final: ' + nef +
    '<br>Média: ' + media.toFixed(1);
    if (media >=8) {
        pResposta.innerHTML+= '<br>Conceito A';
    } else if (media >=7){
        pResposta.innerHTML += '<br>Conceito B';
    } else if (media >=6){
        pResposta.innerHTML += '<br>Conceito C';
    } else if (media >=5){
        pResposta.innerHTML += '<br>Conceito D';
    } else {
        pResposta.innerHTML += '<br>Conceito E';
    }
}