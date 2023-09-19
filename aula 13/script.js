function soma(n1,n2){
    return n1 + n2;
 }

 //subtração
 function subtracao (n1,n2){
 return n1 - n2;
}

//multiplicação
function multiplicacao (n1,n2){
 return n1 * n2;
}

//divisao
function divisao (n1, n2){
 return n1 / n2;
}

function somar(){
     document.getElementById("resultado").value = soma(Number(document.getElementById("n1").value), Number(document.getElementById("n2").value));
}