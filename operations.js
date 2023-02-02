function calcDinamica (){
    var numb1 = parseFloat(document.getElementById("numb1").value);
    var numb2 = parseFloat(document.getElementById("numb2").value);
    var operacao = document.getElementById("operacao").value;
    var tela0;

    if (operacao == '+'){
        tela0 = numb1 + numb2;
    }else if (operacao == '-'){
        tela0 = numb1 - numb2;
    }else if (operacao == '*'){
        tela0 = numb1 * numb2;
    }else if (operacao == '/'){
        tela0 = numb1 / numb2;
    }

    document.getElementById("tela0").value = tela0;
}