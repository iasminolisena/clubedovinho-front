const TABELA_PRODUCTS = document.getElementById('table-product');

listar();

function listar(){
    fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(dados => {
            TABELA_PRODUCTS.innerHTML = '';
            dados.forEach(addLinha);
        });
};

onclick

function addLinha(cada_produto) {

    TABELA_PRODUCTS.innerHTML += `
    <tr>
        <td>${cada_produto.id}</td>
        <td>${cada_produto.name}</td>
        <td>${cada_produto.category}</td>
        <td> <img onclick= "abrirModal('${cada_produto.name}', ' ${cada_produto.image}')" data-bs-toggle="modal" data-bs-target="#exampleModal" src="${cada_produto.image}" width="100px"></td>
        <td>${cada_produto.quantity}</td>
        <td>${cada_produto.price}</td>
        <td>
            <a href="#" class="btn btn-outline-warning btn-sm">
                Editar
            </a>
            <a href="#" onclick="excluir('${cada_produto.id}')" class="btn btn-outline-danger btn-sm">
                Excluir
            </a>
        </td>
    </tr>
    `;
}

function excluir(id) {
    if (false === confirm('Quer excluir esse produto?')){
        return;
    }

    fetch(`http://localhost:3000/products/${id}` ,{
        method:"DELETE"
    });

    alert('Excluido com sucesso');
    listar();
}


function abrirModal(nome, imagem) {
    document.getElementById('modal_produto_nome').innerHTML = nome;
    document.getElementById('modal_produto_imagem').innerHTML = `
        <img src="${imagem}" width="100%">
    `;
}

function addProduct(){
    event.preventDefault();

    let dados= {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        category: document.getElementById('category').value,
        quantity: document.getElementById('quantity').value,
        image: document.getElementById('image').value
    };

    fetch('http://localhost:3000/products',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(dados)
    })

    document.getElementById('form').requestFullscreen();
    alert('Produto cadastrado com sucesso');
    listar();
}