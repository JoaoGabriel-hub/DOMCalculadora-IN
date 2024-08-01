let contador = 1;
let lista_notas = [];

function enviar_nota() {
    let input = document.querySelector(".input");

    let nota = parseFloat(input.value);

    if (nota < 0 || nota > 10) {
        alert("A nota digitada é inválida, por favor, insira uma nota válida.");
        return;
    }

    lista_notas.push(nota);

    let texto = document.createElement("p");
    texto.innerText = `A nota ${contador} é ${input.value}`; 

    let secao = document.querySelector(".espaco");
    secao.append(texto);

    input.value = "";
    contador++;
}    

let btn_adc = document.querySelector(".btn_adc");
btn_adc.addEventListener("click", ()=>{enviar_nota()});
   

function calc_media() {
    let soma = lista_notas.reduce((acc, nota) => acc + nota, 0);
    let media = soma / lista_notas.length;

    let show_media = document.querySelector(".show_media");
    show_media.innerText = `A média é: ${media.toFixed(2)}`;
}

let btn_calc = document.querySelector(".btn_calc");
btn_calc.addEventListener("click", ()=>{calc_media()});