const botaoAdicionar = document.getElementNyID("btnAdicionar");
const btnVerDetalhes =  document.getElementById("btnVerDetalhes");
const mensagemDiv = document.getElemetById("mensagemConfirmacao");
const detalhesDiv = document.getElementById("detalhesProduto");
const botaoVerMais = document.getElementById("btnVerMais");
const botaoMais = document.getElementById("btnMais");
const contadorDisplay = document.getElementById("quantidadeProduto");
const botaoMenos = document.getElementById("btnMenos");

botaoAdicionar.addEventListener('click', function() {
    console.log("Botão 'Adicionar' clicado");
    mensagemDiv.textContent = "Produto adicionado com sucesso!"
})

botaoAdicionar.addEventListener('click', function() {
    console.log("Botão 'Adicionar' clicado");
    mensagemDiv.textContent = "Produto adicionado com sucesso!"
})