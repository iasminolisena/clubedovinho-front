const TABELA_CLIENT = document.getElementById('table-client');

let url = `https://feitoza.tec.br/api/index.php`;

//`XMLHttpRequest`
    fetch(url)
        .then(res => res.json())
        .then(clients => {
            clients.forEach(addLinhaNaTabela);
        });
        function addLinhaNaTabela(client){
            TABELA_CLIENT.innerHTML += `
                <tr>
                    <td>${client.id}</td>
                    <td>${client.nome}</td>
                    <td>${client.email}</td>
                    <td>${client.telefone}</td>
                    <td> <img onclick= "abrirModal('${client.nome}', ' ${client.foto}')" data-bs-toggle="modal" data-bs-target="#exampleModal" src="${client.foto}" width="100px"></td>
                    <td>${client.data_cadastro}</td>
                    <td>${client.data_ultimo_pedido}</td>
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
        function abrirModal(nome, foto){
            document.getElementById('modal_produto_nome').innerHTML= nome;
            document.getElementById('modal_produto_foto').innerHTML= `
                <img src="${foto}" width="100%">
            `;
        }
