let contador = 1;
let lista_notas = [];

function enviar_nota() {
    let input = document.querySelector(".input");

    /** VERIFICANDO SE INPUT VAZIO (STRING) **/

    let notaStr = input.value.trim();

    if (notaStr === '') {
        alert("Por favor, insira uma nota.");
        return;
    }

    /** TRANSFORMANDO NOTA EM FLOAT E VERIFICANDO SE É > 0 E < 10 **/

    let nota = parseFloat(notaStr);

    if (nota < 0 || nota > 10) {
        alert("A nota digitada é inválida, por favor, insira uma nota válida.");
        return;
    }

    /** ADC NOTA À LISTA DE NOTAS **/

    lista_notas.push(nota);

    /** CRIANDO MENSAGEM <P> MOSTRANDO CONTADOR **/

    let texto = document.createElement("p");
    texto.innerText = `A nota ${contador} é ${input.value}`; 

    /** ADC NOTAS AO ESPACO **/

    let secao = document.querySelector(".espaco");
    secao.append(texto);

    input.value = "";
    contador++;
}    

/** CHAMANDO FUNÇÃO DE ENVIAR NOTA **/

let btn_adc = document.querySelector(".btn_adc");
btn_adc.addEventListener("click", ()=>{enviar_nota()});
   

function calc_media() {

    /** CALCULANDO SOMA E MÉDIA **/

    let soma = lista_notas.reduce((acc, nota) => acc + nota, 0);
    let media = soma / lista_notas.length;

    /** MOSTRANDO A MÉDIA **/

    let show_media = document.querySelector(".show_media");
    show_media.innerText = `A média é: ${media.toFixed(2)}`;
}

/** CHAMANDO CÁLCULO DE MÉDIA **/

let btn_calc = document.querySelector(".btn_calc");
btn_calc.addEventListener("click", ()=>{calc_media()});