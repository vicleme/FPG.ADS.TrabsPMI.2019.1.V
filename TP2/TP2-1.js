function calcularSalarios() {
    var pResposta1 = document.all ['resposta1']
    var pResposta2 = document.all ['resposta2']
    for (var i = 1; i <= 25; i++) {
    var salarioantigo = prompt ("Informe o salário antigo: ");
    salarioantigo = Number (salarioantigo)
    if(salarioantigo==0) {
        i=25
        var salarionovo = 0
    } else if (salarioantigo<=500) {
        var salarionovo = salarioantigo*1.05+150
    } else if (salarioantigo<=600) {
        var salarionovo = salarioantigo*1.12+150
    } else if (salarioantigo<=1200) {
        var salarionovo = salarioantigo*1.12+100
    } else {
        var salarionovo = salarioantigo+100
    } 
    if (salarioantigo !=0) {
    pResposta1.innerHTML += salarioantigo.toFixed(2) + '<br>';
    pResposta2.innerHTML += salarionovo.toFixed(2) + '<br>';
}
}
}