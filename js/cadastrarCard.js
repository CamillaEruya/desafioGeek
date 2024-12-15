import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function cadastrarCard(evento) {
    evento.preventDefault();

    const descricao = document.querySelector("[data-descricao]").value;
    const imagem = 'img/' + document.querySelector("[data-imagem]").value;
  
    const preco = document.querySelector("[data-preco]").value;

    try {
        await conectaApi.criarCard(descricao, imagem, preco);
        // alert("Produto cadastrado com sucesso!");
        formulario.reset(); // Limpa o formulário após o cadastro
    } catch (erro) {
        console.error("Erro ao cadastrar o produto:", erro);
        //alert("Erro ao cadastrar o produto. Tente novamente.");
    }
}

formulario.addEventListener("submit", cadastrarCard);
console.log(imagem);