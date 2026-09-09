const botao = document.querySelector("#botaoMensagem");
const mensagem = document.querySelector("#mensagemInterativa");
botao.addEventListener("click", mostrarMensagem);
function mostrarMensagem() {
    mensagem.textContent =
    "Voce acabou de criar uma interacao com JavaScript!";
}
