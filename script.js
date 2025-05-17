// let diaDaSemana = parseInt(prompt("Digite o Número de um Dia da Semana: "));

// switch (diaDaSemana) {
//   case 1:
//     alert("Domingo");
//     break;
//   case 2:
//     alert("Segunda");
//     break;
//   case 3:
//     alert("Terça");
//     break;
//   case 4:
//     alert("Quarta");
//     break;
//   case 5:
//     alert("Quinta");
//     break;
//   case 6:
//     alert("Sexta");
//     break;
//   case 7:
//     alert("Sábado");
//     break
//     default:
//         alert("Dia da Semana Inválido! =C")
// }

let number1 = parseFloat(prompt("Digite um Número: "));
let number2 = parseFloat(prompt("Digite outro Número: "));

let escolha = parseInt(
  prompt("[1] ADIÇÃO\n[2] SUBTRAÇÃO\n[3] MULTIPLICAÇÃO\n[4] DIVISÃO")
);

switch (escolha) {
  case 1:
    alert("O RESULTADO DA SOMA É: " + (number1 + number2));
    break;
  case 2:
    alert("O RESULTADO DA SUBTRAÇÃO É: " + (number1 - number2));
    break;
  case 3:
    alert("O RESULTADO DA MULTIPLICAÇÃO É: " + number1 * number2);
    break;
  case 4:
    alert("O RESULTADO DA DIVISÃO É: " + number1 / number2);
    break;
  default:
    alert("OPERAÇÃO INVÁLIDA! =C");
}
