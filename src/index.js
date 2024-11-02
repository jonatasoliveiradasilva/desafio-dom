const formulario = document.getElementById("form");

formulario.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    
    event.preventDefault();

    const valorTotal = document.getElementById("valorTotal").value;
    const taxaServico = document.getElementById("taxaServico").value;
    const quantidadePagantes = document.getElementById("quantidadePagantes").value;

    console.log(valorTotal);
    console.log(taxaServico);
    console.log(quantidadePagantes);
}

// const readline = require("readline-sync");

// const numeroPessoas = readline.questionInt("Digite o numero de pessoas na mesa: ");
// const valorTotal = readline.questionInt("Digite o valor total da conta: ");
// const formaPagamento = readline.questionInt("Digite a forma de pagamento (1 - Cartao, 2 - Dinheiro, 3 - Pix): ");

// let desconto;

// function calcularDesconto(valorTotal, formaPagamento) {

//     if (formaPagamento === 2 || formaPagamento === 3) {
//         desconto = valorTotal * 0.9;
//     }

//     return desconto;
// }

// calcularDesconto(valorTotal, formaPagamento);

// function exibirInformacoes() {

//     console.log("");
//     console.log(`Numero de pessoas na mesa: ${numeroPessoas}`);
//     console.log(`Valor total da conta: R$ ${valorTotal}`);

//     if (formaPagamento === 1) {
//         console.log(`Forma de pagamento: ${formaPagamento} (Cartão)`);
//     } else if (formaPagamento === 2) {
//         console.log(`Forma de pagamento: ${formaPagamento} (Dinheiro)`);
//         console.log(`Valor a ser pago com o desconto de 10%: R$ ${desconto}`);
//     } else if (formaPagamento === 3) {
//         console.log(`Forma de pagamento: ${formaPagamento} (Pix)`);
//         console.log(`Valor a ser pago com o desconto de 10%: R$ ${desconto}`);
//     } else {
//         console.log(`Forma de pagamento inválido`);
//     }
// }

// exibirInformacoes();
