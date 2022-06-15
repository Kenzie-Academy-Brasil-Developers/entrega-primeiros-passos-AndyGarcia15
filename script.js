let totalRefrigerante = parseFloat(prompt('insira o valor do Refrigerante')) * 3;
let totalMacarrao = parseFloat(prompt('insira o valor do Macarrão')) * 4;
let totalErvilha= parseFloat(prompt('insira o valor do Ervilha')) * 3;
let totalArroz = parseFloat(prompt('insira o valor do Arroz')) * 3;
let totalFeijao = parseFloat(prompt('insira o valor do Feijão')) *2;
let totalVinho = parseFloat(prompt('insira o valor do Vinho')) *3;

let totalCompra = totalArroz + totalErvilha + totalFeijao + totalMacarrao + totalRefrigerante + totalVinho;

if(totalCompra % 2 !== 0){

    divisao = totalCompra/2;

    alert(`Os dois amigos irão dividir a conta no valor de R$${totalCompra} igualmente em R$${divisao}.`)

}

else{

    let valorSemVinho = totalArroz + totalErvilha + totalFeijao + totalMacarrao + totalRefrigerante;
    let divisao = valorSemVinho/2;
    let valorAmigo = divisao + totalVinho;
    alert(`Você pagará o valor de R$${divisao} e seu amigo pagará R${valorAmigo}.`);
}