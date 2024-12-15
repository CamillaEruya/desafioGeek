import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]"); // Seleção do elemento lista

function constroiCard(descricao, imagem, preco, id) {
    const card = document.createElement("li");
    card.className = "card-produto";
    card.setAttribute("data-id", id); // Adiciona o ID como atributo ao card
    card.innerHTML = `
        <img src="${imagem}" alt="${descricao}">
        <h3>${descricao}</h3>
        <p class="preco">R$ ${preco}</p>
        <button class="deletar-produto" aria-label="Deletar produto">🗑️</button>
    `;

    // Adiciona o evento de exclusão ao botão
    const botaoDeletar = card.querySelector(".deletar-produto");
    botaoDeletar.addEventListener("click", async (e) => {
        await excluirProduto(id);
    });

    return card;
}

async function excluirProduto(id) {
    try {
        const resposta = await conectaApi.deletarProduto(id); // Chama o método DELETE da API
    } catch (error) {
         console.error("Erro ao excluir produto:", error);
    }
}

async function carregarCards() {
    try {
        const produtos = await conectaApi.listarProdutos();

        produtos.forEach(produto => {
            const card = constroiCard(produto.descricao, produto.imagem, produto.preco, produto.id);
            lista.appendChild(card);
        });
    } catch (error) {
     console.log('error', error);
    }
}

carregarCards();
