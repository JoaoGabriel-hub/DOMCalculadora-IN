function enviar_nota() {
    let input = document.querySelector(".input");
    let texto = document.createElement("p");
    texto.innerText = input.value;

    let secao = document.querySelector(".espaco");
    secao.append(texto);

    input.value = "";
}    

let btn_adc = document.querySelector(".btn_adc");
btn_adc.addEventListener("click", ()=>{enviar_nota()});
   