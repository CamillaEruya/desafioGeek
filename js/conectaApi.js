async function listarProdutos() {
    const conexao = await fetch("http://localhost:3000/produto");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criarCard(descricao, imagem, preco) {
    const conexao = await fetch("http://localhost:3000/produto",{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            descricao: descricao,
            imagem: imagem,
            preco: preco,
        })
    });

    conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function deletarProduto(id, func) {
    console.log('deletarProduto', id);
    fetch(`http://localhost:3000/produto/${id}`, 
        {
            method: "DELETE"
        })
    .then(() => console.log(`Produto com ID ${id} removido`))
    .catch(error => console.error("Erro ao deletar:", error));
}

export const conectaApi = {
    listarProdutos,
    criarCard,
    deletarProduto,
};
