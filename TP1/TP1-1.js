function calcularRaizes() {
    var inputA = document.all['a'];
    var inputB = document.all['b'];
    var inputC = document.all['c'];
    var pResposta = document.all ['resposta'];

    var a = Number (inputA.value);
    var b = Number (inputB.value);
    var c = Number (inputC.value);
    var d = (b*b)-(4*a*c)

    pResposta.innerHTML = '';
    if (d >=0) {
        var x1 = (-b+Math.sqrt(d))/(2*a);
        var x2 = (-b-Math.sqrt(d))/(2*a);
            if (x1==x2) {
            pResposta.innerHTML+= 'A raiz da equação é: ' + x1;
            } else {
            pResposta.innerHTML+= 'As raízes da equação são: ' + x1 + ' e ' + x2;
            }
        } else {
            pResposta.innerHTML+='O delta é negativo e não existe raiz para a equação no conjunto dos reais.';
}
}