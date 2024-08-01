let contador = 1;

function enviar_nota() {
    let input = document.querySelector(".input");

    let nota = parseFloat(input.value);

    if (nota < 0 || nota > 10) {
        alert("Nota inválida. As notas devem ser de 0 até 10");
        return;
    }

    let texto = document.createElement("p");
    texto.innerText = `A nota ${contador} é ${input.value}`; 

    let secao = document.querySelector(".espaco");
    secao.append(texto);

    input.value = "";
    contador++;
}    

let btn_adc = document.querySelector(".btn_adc");
btn_adc.addEventListener("click", ()=>{enviar_nota()});
   