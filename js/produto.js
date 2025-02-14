const TABELA_PRODUCTS = document.getElementById('table-product');

let produto = [
    {
        id: 1,
        nome: 'Quinta do Morgado',
        categoria: 'Vinho Tinto Suave',
        imagem: 'https://cdn.dooca.store/197/products/vinho-quinta-do-morgado-tinto-suave-750-ml.jpg?v=1665008400&webp=0',
        quantidade: 10,
        valor: 10.90
    },
    {
        id: 2,
        nome: 'Vale Dom Bento',
        categoria: 'Vinho Tinto Suave',
        imagem: 'https://cdn.awsli.com.br/1958/1958204/produto/203245775/screenshot_20230223_190651_instagram-pamtvr.jpg',
        quantidade: 24,
        valor: 8.90
    }
];
onclick
produto.forEach(addLinha);

function addLinha(cada_produto){
    TABELA_PRODUCTS.innerHTML += `
    <tr>
        <td>${cada_produto.id}</td>
        <td>${cada_produto.nome}</td>
        <td>${cada_produto.categoria}</td>
        <td> <img onclick= "abrirModal('${cada_produto.nome}', ' ${cada_produto.imagem}')" data-bs-toggle="modal" data-bs-target="#exampleModal" src="${cada_produto.imagem}" width="100px"></td>
        <td>${cada_produto.quantidade}</td>
        <td>${cada_produto.valor}</td>
        <td>
            <a href="#" class="btn btn-outline-warning btn-sm">
                Editar
            </a>
            <a href="#" class="btn btn-outline-danger btn-sm">
                Excluir
            </a>
        </td>
    </tr>
    `;
}

function abrirModal(nome, imagem){
    document.getElementById('modal_produto_nome').innerHTML= nome;
    document.getElementById('modal_produto_imagem').innerHTML= `
        <img src="${imagem}" width="100%">
    `;
}